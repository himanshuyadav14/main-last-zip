import HeaderContent from "./HeaderContent"

const Header = async () => {
  const url = process.env.NEXT_PUBLIC_SERVER_URL;
  const options = {
    method: "GET",
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(`${url}/smile-dental/headers`, options);
  const headerData = await response.json();

  return (
    <HeaderContent headerData={headerData} />
  );
};

export default Header;