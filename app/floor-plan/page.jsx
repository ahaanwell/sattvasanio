import BlogSection from "@/components/BlogsSection";
import FloorPlanPage from "./FloorPlanPage";

export const metadata = {
  title: {
    default:
      "Sattva Sanio Floor Plan | 2, 3 & 4 BHK Layouts in Budigere Cross Bangalore",
    template: "%s | Sattva Sanio Floor Plan",
  },

  description:
    "Explore Sattva Sanio floor plans in Budigere Cross, Bangalore. Discover well-designed 2 BHK, 3 BHK and 4 BHK apartment layouts with spacious rooms, modern architecture and smart living spaces.",

  keywords: [
    "Sattva Sanio floor plan",
    "Sattva Sanio 2 BHK layout",
    "Sattva Sanio 3 BHK layout",
    "Sattva Sanio 4 BHK layout",
    "Sattva Sanio Budigere Cross apartments",
    "Sattva Sanio Bangalore layout",
    "apartment floor plans Bangalore",
    "Budigere Cross apartment layouts"
  ],

  metadataBase: new URL("https://www.sattvasanio.in"),

  alternates: {
    canonical: "/floor-plan",
  },

  openGraph: {
    title:
      "Sattva Sanio Floor Plan | 2, 3 & 4 BHK Apartment Layouts",
    description:
      "View detailed floor plans of Sattva Sanio Bangalore with spacious layouts, modern design and efficient living spaces.",
    url: "https://www.sattvasanio.in/floor-plan",
    siteName: "Sattva Sanio",
    images: [
      {
        url: "https://www.sattvasanio.in/images/floor-plan-banner.webp",
        width: 1200,
        height: 630,
        alt: "Sattva Sanio Floor Plan",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Sattva Sanio Floor Plan | 2, 3 & 4 BHK Apartment Layout",
    description:
      "Discover modern and spacious floor plans at Sattva Sanio in Budigere Cross Bangalore.",
    images: [
      "https://www.sattvasanio.in/images/floor-plan-banner.webp",
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

export default function page() {
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
            name: "Floor Plan",
            item: "https://www.sattvasanio.in/floor-plan",
          },
        ],
      },

      {
        "@type": "Product",
        name: "Sattva Sanio Floor Plans",
        description:
          "Premium 2 BHK, 3 BHK and 4 BHK apartment floor plans at Sattva Sanio in Budigere Cross, Bangalore with modern layouts and spacious design.",
        brand: {
          "@type": "Brand",
          name: "Sattva Group",
        },
        image:
          "https://www.sattvasanio.in/images/floor-plan-banner.webp",
        url: "https://www.sattvasanio.in/floor-plan",

        areaServed: {
          "@type": "Place",
          name: "Bangalore",
        },

        offers: {
          "@type": "Offer",
          url: "https://www.sattvasanio.in/floor-plan",
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
        },
      },

      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What types of floor plans are available at Sattva Sanio?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sattva Sanio offers 2 BHK, 3 BHK and 4 BHK apartment floor plans designed with modern layouts, spacious rooms and efficient space utilization.",
            },
          },
          {
            "@type": "Question",
            name: "Where is Sattva Sanio located in Bangalore?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sattva Sanio is located at Budigere Cross on Old Madras Main Road in East Bangalore, offering excellent connectivity to major IT hubs.",
            },
          },
          {
            "@type": "Question",
            name: "Are Sattva Sanio floor plans suitable for modern living?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, the floor plans feature spacious living areas, modern kitchens, balconies and smart layouts ideal for contemporary urban living.",
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
      <FloorPlanPage />
      <BlogSection />
    </>
  );
}