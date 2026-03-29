import BlogSection from "@/components/BlogsSection";
import PricePage from "./PricePage";

export const metadata = {
  title: {
    default:
      "Sattva Sanio Price | Old Madras Main Road | Pre Launch Offer",
    template: "%s | Sattva Sanio Price",
  },

  description:
    "Discover the latest Sattva Sanio price on Old Madras Main Road with exclusive pre-launch offers. Explore premium homes, floor plans, and early-bird deals in East Bangalore.",

  keywords: [
    "Sattva Sanio price",
    "Sattva Sanio Bangalore price",
    "Sattva Sanio apartment price",
    "Sattva Sanio Budigere Cross price",
    "Sattva Sanio price list",
    "Sattva Sanio 2 BHK price",
    "Sattva Sanio 3 BHK price",
    "Sattva Sanio 4 BHK price",
    "Sattva Sanio cost",
    "Sattva Sanio payment plan",
    "apartments price Budigere Cross",
    "luxury apartment price Bangalore"
  ],

  metadataBase: new URL("https://www.sattvasanio.in"),

  alternates: {
    canonical: "https://www.sattvasanio.in/price",
  },

  openGraph: {
    title:
      "Sattva Sanio Price | 2, 3 & 4 BHK Apartment Price List Bangalore",
    description:
      "Explore the latest price list of Sattva Sanio apartments in Budigere Cross Bangalore including configuration wise pricing and payment plans.",
    url: "https://www.sattvasanio.in/price",
    siteName: "Sattva Sanio",
    images: [
      {
        url: "https://www.sattvasanio.in/images/sattvasanio.webp",
        width: 1200,
        height: 630,
        alt: "Sattva Sanio Apartment Price List",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Sattva Sanio Price | Apartment Price List Budigere Cross",
    description:
      "View the latest price list of Sattva Sanio Bangalore including 2, 3 and 4 BHK apartment pricing and payment plans.",
    images: ["https://www.sattvasanio.in/images/sattvasanio.webp"],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "Real Estate",
};

export default function Page() {

  const schema = {
    "@context": "https://schema.org",
    "@graph": [

      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.sattvasanio.in/"
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Price",
            item: "https://www.sattvasanio.in/price"
          }
        ]
      },

      {
        "@type": "ApartmentComplex",
        name: "Sattva Sanio",
        description:
          "Sattva Sanio is a premium residential apartment project located at Budigere Cross, Old Madras Main Road Bangalore offering luxury 2, 3 and 4 BHK apartments with modern amenities.",
        url: "https://www.sattvasanio.in/price",
        image: "https://www.sattvasanio.in/images/sattvaSanio.webp",

        address: {
          "@type": "PostalAddress",
          streetAddress: "Old Madras Main Road, Budigere Cross",
          addressLocality: "Bangalore",
          addressRegion: "Karnataka",
          addressCountry: "IN"
        },

        offers: {
          "@type": "Offer",
          priceCurrency: "INR",
          price: "On Request",
          availability: "https://schema.org/PreOrder",
          url: "https://www.sattvasanio.in/price"
        }
      },

      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is the starting price of Sattva Sanio apartments?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The starting price of Sattva Sanio apartments depends on the configuration such as 2 BHK, 3 BHK and 4 BHK units. For the latest price list and offers you can request the updated pricing details."
            }
          },
          {
            "@type": "Question",
            name: "Where is Sattva Sanio located?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sattva Sanio is located at Budigere Cross on Old Madras Main Road in East Bangalore."
            }
          },
          {
            "@type": "Question",
            name: "Does Sattva Sanio offer payment plans?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, Sattva Sanio offers flexible payment plans for home buyers including construction linked plans and bank loan options."
            }
          }
        ]
      }

    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <PricePage />
      <BlogSection/>
    </>
  );
}