import { Poppins, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import BrochureWrapper from "@/components/BrochureWrapper";

const poppins = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const robotoMono = Roboto_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    default:
      "Sattva Sanio | Old Madras Road | Budigere Cross | Review  | New Launch",
    template: "%s | Sattva Sanio Bangalore",
  },

  description:
    "Sattva Sanio is a premium apartment project at Budigere Cross, Old Madras Road, East Bangalore. Spread across 10+ acres, offering luxury 2, 3 & 4 BHK homes with modern amenities and excellent connectivity.",

  keywords: [
    "Sattva Sanio",
    "Sattva Sanio Bangalore",
    "Sattva Sanio Budigere Cross",
    "Sattva Sanio Old Madras Road",
    "Sattva Sanio price",
    "Sattva Sanio brochure",
    "Sattva Sanio floor plan",
    "apartments in Budigere Cross",
    "flats in Old Madras Road Bangalore",
    "luxury apartments East Bangalore",
    "new launch apartments Bangalore",
    "2 BHK flats Budigere Cross",
    "3 BHK flats Budigere Cross",
    "4 BHK flats Bangalore",
    "Sattva Group projects Bangalore",
  ],

  metadataBase: new URL("https://www.sattvasanio.in"),

  alternates: {
    canonical: "https://www.sattvasanio.in/",
  },

  openGraph: {
    title:
      "Sattva Sanio | Old Madras Road | Budigere Cross | Review  | New Launch",
    description:
      "Explore Sattva Sanio apartments at Budigere Cross, Old Madras Road, Bangalore. Premium 2, 3 & 4 BHK homes with world-class amenities.",
    url: "https://www.sattvasanio.in/",
    siteName: "Sattva Sanio",
    images: [
      {
        url: "https://www.sattvasanio.in/images/sattvaaangane.webp",
        width: 1200,
        height: 630,
        alt: "Sattva Sanio Apartments Budigere Cross Bangalore",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Sattva Sanio | Old Madras Road | Budigere Cross | Review  | New Launch",
    description:
      "Discover Sattva Sanio in East Bangalore offering premium 2, 3 & 4 BHK apartments with modern lifestyle amenities.",
    images: [
      "https://www.sattvasanio.in/images/sattvaaangane.webp",
    ],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  authors: [
    {
      name: "Sattva Sanio",
      url: "https://www.sattvasanio.in/",
    },
  ],

  creator: "Sattva Sanio",
  publisher: "Sattva Sanio",

  category: "Real Estate",

  verification: {
    google: "dRlABeZ3CrEqb5hYxsH8Y9y1uDjg91M_dLWRC0TAbZc",
  },
};

export default function RootLayout({ children }) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "Sattva Sanio",
        url: "https://www.sattvasanio.in/",
        logo: "https://www.sattvasanio.in/images/sattvaaangane.webp",
      },
      {
        "@type": "ApartmentComplex",
        name: "Sattva Sanio",
        description:
          "Sattva Sanio is a premium residential project located on Old Madras Road, Budigere Cross, East Bangalore offering 2, 3 and 4 BHK luxury apartments with modern amenities.",
        url: "https://www.sattvasanio.in/",
        image:
          "https://www.sattvasanio.in/images/sattvaaangane.webp",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Old Madras Main Road, Budigere Cross",
          addressLocality: "Bangalore",
          addressRegion: "Karnataka",
          postalCode: "560049",
          addressCountry: "IN",
        },
        numberOfAccommodationUnits: "600+",
        amenityFeature: [
          {
            "@type": "LocationFeatureSpecification",
            name: "Swimming Pool",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Gymnasium",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Clubhouse",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Children Play Area",
            value: true,
          },
        ],
        offers: {
          "@type": "Offer",
          price: "12000000",
          priceCurrency: "INR",
          availability: "https://schema.org/PreSale",
          url: "https://www.sattvasanio.in/",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Where is Sattva Sanio located?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sattva Sanio is located on Old Madras Road at Budigere Cross in East Bangalore.",
            },
          },
          {
            "@type": "Question",
            name: "What is the starting price of Sattva Sanio apartments?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The starting price of apartments at Sattva Sanio is approximately ₹1.2 Crore.",
            },
          },
          {
            "@type": "Question",
            name: "What apartment types are available in Sattva Sanio?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The project offers 2 BHK, 3 BHK and 4 BHK luxury apartments.",
            },
          },
        ],
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>

      <body
        className={`${poppins.variable} ${robotoMono.variable} antialiased`}
      >
        <Header />
        <BrochureWrapper />
        {children}
        <Footer />
        <MobileBottomBar />
      </body>
    </html>
  );
}