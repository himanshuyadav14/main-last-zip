import HeaderContent from "./HeaderContent";

const Header = async () => {
  const url = process.env.NEXT_PUBLIC_SERVER_URL;
  const options = {
    method: "GET",
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
    },
  };


  const headerData = await fetch(`${url}/smile-dental/headers`, options).then((res) => res.json());

  return (
    <div>
      <HeaderContent headerData={headerData} />
    </div>
  );
};

export default Header;
