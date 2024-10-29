import { Inter } from "next/font/google";
import Header from "./components/Common/Header";
import Footer from "./components/Common/Footer";
import Script from "next/script";

import "./globals.css";

import "@/app/styles/aos.css";
import "@/app/styles/base.css";
import "@/app/styles/bootstrap.min.css";
import "@/app/styles/flaticon.css";
import "@/app/styles/fontawesome.css";
import "@/app/styles/magnific-popup.css";
import "@/app/styles/pbminfotech-base-icons.css";
import "@/app/styles/responsive.css";
import "@/app/styles/shortcode.css";
import "@/app/styles/style.css";
import "@/app/styles/swiper.min.css";
import "@/app/styles/themify-icons.css";

import CallButton from "./components/Common/CallButton";
import ContactUsBar from "./components/Common/ContactUsBar";
import FlexBookLink from "./components/Common/FlexBook";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Your Site Title", // Update to your site title
  description: "Your site description", // Update to your site description
  keywords: "keyword1, keyword2, keyword3", // Optional keywords
  authors: [{ name: "Your Name" }], // Update with your name
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://smilecloudfamilydental.com/',
    siteName: 'Smile Cloud Family Dental',
    images: [
      {
        url: '/path/to/image.jpg', // Replace with your image URL
        width: 800,
        height: 600,
        alt: 'Image description',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@yourtwitterhandle', // Replace with your Twitter handle
    title: 'Your Site Title', // Replace with your Twitter title
    description: 'Your site description', // Replace with your Twitter description
    image: '/path/to/image.jpg', // Replace with your Twitter image URL
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Script
          id="google-analytics-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-CGSDEN7K1N');
              gtag('config', 'AW-16588479971');
              gtag('event', 'conversion', {'send_to': 'AW-16588479971/85vLCOGv2sgZEOO7gOY9'});
            `,
          }}
        />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-CGSDEN7K1N"
        />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16588479971"
        />
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s) {
                if(f.fbq) return;
                n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq) f._fbq=n;
                n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)
              }(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '7651433724939661');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=7651433724939661&ev=PageView&noscript=1"
          />
        </noscript>

        <div className="page-wrapper">
          <Header />
          {children}
          <ContactUsBar />
          <Footer />
          <CallButton />
          <FlexBookLink />
        </div>

        {/* Additional Scripts */}
        <Script src="/js/bootstrap.min.js" strategy="lazyOnload" />
        <Script src="/js/jquery.min.js" strategy="lazyOnload" />
        <Script src="/js/popper.min.js" strategy="lazyOnload" />
        <Script src="/js/jquery.waypoints.min.js" strategy="lazyOnload" />
        <Script src="/js/jquery.appear.js" strategy="lazyOnload" />
        <Script src="/js/numinate.min.js" strategy="lazyOnload" />
        <Script src="/js/swiper.min.js" strategy="lazyOnload" />
        <Script src="/js/jquery.magnific-popup.min.js" strategy="lazyOnload" />
        <Script src="/js/circle-progress.js" strategy="lazyOnload" />
        <Script src="/js/jquery.countdown.min.js" strategy="lazyOnload" />
        <Script src="/js/aos.js" strategy="lazyOnload" />
        <Script src="/js/ScrollTrigger.js" strategy="lazyOnload" />
        <Script src="/js/SplitText.js" strategy="lazyOnload" />
        <Script src="/js/magnetic.js" strategy="lazyOnload" />
        <Script src="/js/gsap-animation.js" strategy="lazyOnload" />
        <Script src="/js/jquery-validate/jquery.validate.min.js" strategy="lazyOnload" />
        <Script src="https://d3ivs86j8l3a5r.cloudfront.net/flexBook.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
