import HomePage from "./components/Home/HomePage";

export async function fetchMetaData(pageName) {
  const url = process.env.NEXT_PUBLIC_SERVER_URL;

  const response = await fetch(`${url}/smile-dental/metadata`);
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  const metaData = await response.json();

  // Find the metadata for the specific page
  return metaData.find(meta => meta?.page_name === pageName);
}
export const metadata = async () => {
  const metaData = await fetchMetaData("home");
  return {
    title: metaData?.meta_title,
    description: metaData?.meta_description,
  };
};

export default function Home() {
  return (
    <>
      <HomePage />
    </>
  );
}
