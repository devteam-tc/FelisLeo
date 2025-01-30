import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from 'next/script';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Felis Leo | Redefining Cinema Excellence",
  description: "Felis Leo Productions excels in quality film production across Tamil, Telugu, Hindi, Malayalam, and Kannada, creating engaging cinematic experiences.",
};

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <head>
//       <meta
//           name="google-site-verification"
//           content="google2b33fffdbdc7a783"
//         />
//         {/* Google Analytics */}
//         <Script
//           async
//           src="https://www.googletagmanager.com/gtag/js?id=G-XKJ8V6EYXR"
//         ></Script>
//         <Script id="google-analytics">
//           {`
//             window.dataLayer = window.dataLayer || [];
//             function gtag(){dataLayer.push(arguments);}
//             gtag('js', new Date());
//             gtag('config', 'G-XKJ8V6EYXR');
//           `}
//         </Script>

//         {/* Google Tag Manager */}
//         <Script id="google-tag-manager">
//           {`
//             (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
//             new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
//             j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
//             'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
//             })(window,document,'script','dataLayer','GTM-KM4VCPXF');
//           `}
//         </Script>
//       </head>
//       <body className={`${geistSans.variable} ${geistMono.variable}`}>
//         {/* Google Tag Manager (noscript) */}
//         <noscript>
//           <iframe
//             src="https://www.googletagmanager.com/ns.html?id=GTM-KM4VCPXF"
//             height="0"
//             width="0"
//             style={{ display: 'none', visibility: 'hidden' }}
//           ></iframe>
//         </noscript>
//         {children}
//       </body>
//     </html>
//   );
// }

export default function RootLayout({ children }) {
  const nonce = 'randomNonceValue'; // Make sure this matches the nonce in CSP

  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="google2b33fffdbdc7a783"
        />
        {/* Google Analytics */}
        <Script
          async
          nonce={nonce}
          src="https://www.googletagmanager.com/gtag/js?id=G-XKJ8V6EYXR"
        ></Script>
        <Script id="google-analytics" nonce={nonce}>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XKJ8V6EYXR');
          `}
        </Script>

        {/* Google Tag Manager */}
        <Script id="google-tag-manager" nonce={nonce}>
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KM4VCPXF');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}

