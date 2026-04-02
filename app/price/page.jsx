import BlogSection from "@/components/BlogsSection";
import PricePage from "./PricePage";

export const metadata = {
  title: {
    default:
      "Sattva Sanio Price | 2, 3 & 4 BHK Price List in Budigere Cross Bangalore",
    template: "%s | Sattva Sanio Price",
  },

  description:
    "Check the latest Sattva Sanio price in Budigere Cross, Bangalore. Explore updated price list for 2 BHK, 3 BHK and 4 BHK apartments with exclusive pre-launch offers and flexible payment plans.",

  keywords: [
    "Sattva Sanio price",
    "Sattva Sanio 2 BHK price",
    "Sattva Sanio 3 BHK price",
    "Sattva Sanio 4 BHK price",
    "Sattva Sanio price list Bangalore",
    "Budigere Cross apartment price",
    "Sattva Sanio payment plan",
    "Bangalore apartment price list"
  ],

  metadataBase: new URL("https://www.sattvasanio.in"),

  alternates: {
    canonical: "/price",
  },

  openGraph: {
    title:
      "Sattva Sanio Price | Latest Apartment Price List Bangalore",
    description:
      "Explore configuration-wise pricing of Sattva Sanio apartments with attractive pre-launch offers and payment options.",
    url: "https://www.sattvasanio.in/price",
    siteName: "Sattva Sanio",
    images: [
      {
        url: "https://www.sattvasanio.in/images/sattvasanio.webp",
        width: 1200,
        height: 630,
        alt: "Sattva Sanio Price List",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Sattva Sanio Price | Apartment Price List Bangalore",
    description:
      "View latest price details of Sattva Sanio including 2, 3 and 4 BHK configurations.",
    images: [
      "https://www.sattvasanio.in/images/sattvasanio.webp",
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
            item: "https://www.sattvasanio.in/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Price",
            item: "https://www.sattvasanio.in/price",
          },
        ],
      },

      {
        "@type": "Product",
        name: "Sattva Sanio Apartments",
        description:
          "Premium 2 BHK, 3 BHK and 4 BHK apartments at Sattva Sanio in Budigere Cross, Bangalore with modern amenities and attractive pricing options.",

        brand: {
          "@type": "Brand",
          name: "Sattva Group",
        },

        image:
          "https://www.sattvasanio.in/images/sattvasanio.webp",

        url: "https://www.sattvasanio.in/price",

        areaServed: {
          "@type": "City",
          name: "Bangalore",
        },

        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "INR",
          lowPrice: "On Request",
          highPrice: "On Request",
          offerCount: "3",
          availability: "https://schema.org/PreOrder",
          url: "https://www.sattvasanio.in/price",
        },
      },

      {
        "@type": "OfferCatalog",
        name: "Sattva Sanio Price List",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Apartment",
              name: "2 BHK Apartment",
            },
            priceCurrency: "INR",
            price: "On Request",
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Apartment",
              name: "3 BHK Apartment",
            },
            priceCurrency: "INR",
            price: "On Request",
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Apartment",
              name: "4 BHK Apartment",
            },
            priceCurrency: "INR",
            price: "On Request",
          },
        ],
      },

      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is the price of Sattva Sanio apartments?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The price of Sattva Sanio apartments varies based on configuration such as 2 BHK, 3 BHK and 4 BHK units. You can request the latest price list for updated offers and availability.",
            },
          },
          {
            "@type": "Question",
            name: "Are there any pre-launch offers available?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, Sattva Sanio offers exclusive pre-launch pricing and early booking benefits for a limited time.",
            },
          },
          {
            "@type": "Question",
            name: "Does Sattva Sanio provide flexible payment plans?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, buyers can choose from flexible payment plans including construction-linked plans and home loan assistance from leading banks.",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <PricePage />
      <BlogSection />
    </>
  );
}