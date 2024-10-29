/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["smile-dental-buckett.s3.us-west-2.amazonaws.com"],
  },
  i18n: {
    locales: ["en", "es"], // Available languages
    defaultLocale: "en", // Default language
  },
};

export default nextConfig;
