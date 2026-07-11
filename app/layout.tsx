import type { Metadata } from "next";
import { Inter, Work_Sans } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import "lite-youtube-embed/src/lite-yt-embed.css";
import { Analytics } from '@vercel/analytics/next';



const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  adjustFontFallback: true,
  weight: ["400"]
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
  adjustFontFallback: true,
  weight: ["600"],
  preload: false,
});




export const metadata: Metadata = {
  metadataBase: new URL("https://www.theislandsbygaurs.in"),
  title: "The Islands by Gaurs | 4/5/6 BHK Luxury Apartments at Jaypee Greens, Greater Noida",
  description:
    "Discover The Islands by Gaurs — 9 iconic towers of 4, 5 & 6 BHK luxury condominiums at Pari Chowk, Greater Noida. Golf course view, ready amenities, RERA approved.",

  alternates: {
    canonical: "https://www.theislandsbygaurs.in/",
  },

  icons: {
    icon: "/logo.webp",
  },

  openGraph: {
    title: "The Islands by Gaurs",
    description:
      "4, 5 & 6 BHK golf-view luxury condominiums at Jaypee Greens, Pari Chowk, Greater Noida by Gaurs Group.",
    url: "https://www.theislandsbygaurs.in/",
    siteName: "The Islands by Gaurs",
    images: [
      {
        url: "/logo.webp",
        width: 1200,
        height: 630,
        alt: "The Islands by Gaurs",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "The Islands by Gaurs",
    description:
      "4, 5 & 6 BHK golf-view luxury condominiums at Jaypee Greens, Greater Noida.",
    images: ["/logo.webp"],
  },
};

import { ModalProvider } from "@/components/ModalContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable}  h-full antialiased light `}
    >
      <Analytics />
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PGFWQ73S');`}
      </Script>
      <Script id="clarity-script" strategy="afterInteractive">
        {`(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "wj5sfhnj3d");`}
      </Script>

      <body suppressHydrationWarning className="min-h-full flex flex-col overflow-x-hidden">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PGFWQ73S"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <ModalProvider>
          {children}
        </ModalProvider>
      </body>
    </html>
  );
}
