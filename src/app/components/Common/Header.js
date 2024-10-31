"use client"
import React, { useEffect, useState } from 'react';
import HeaderContent from "./HeaderContent";

const Header = () => {
  const [headerData, setHeaderData] = useState(null);
  const url = process.env.NEXT_PUBLIC_SERVER_URL;

  useEffect(() => {
    const fetchHeaderData = async () => {
      const options = {
        method: "GET",
        cache: "no-store",
        headers: {
          "Content-Type": "application/json",
        },
      };

      try {
        const res = await fetch(`${url}/smile-dental/headers`, options);
        if (!res.ok) {
          throw new Error(`Error: ${res.status} ${res.statusText}`);
        }
        const data = await res.json();
        setHeaderData(data);
      } catch (error) {
        console.error("Fetch error:", error);
        setHeaderData({}); // Or handle error state
      }
    };

    fetchHeaderData();
  }, [url]); // Run effect when url changes

  return (
    <div>
      {headerData ? <HeaderContent headerData={headerData} /> : <p>Loading...</p>}
    </div>
  );
};

export default Header;
