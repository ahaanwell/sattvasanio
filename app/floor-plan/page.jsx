import BlogSection from "@/components/BlogsSection";
import FloorPlanPage from "./FloorPlanPage";

export const metadata = {
  title: {
    default:
      "Sattva Sanio Floor Plan | Old Madras Main Road | Pre Launch Offer",
    template: "%s | Sattva Sanio Floor Plan",
  },

  description:
    "Explore the detailed floor plans of Sattva Sanio located on Old Madras Main Road, Budigere Cross, Bangalore. View well-designed 2 BHK, 3 BHK and 4 BHK apartment layouts with spacious rooms, modern architecture, and efficient living spaces.",

  keywords: [
    "Sattva Sanio floor plan",
    "Sattva Sanio Bangalore floor plan",
    "Sattva Sanio Budigere Cross floor plan",
    "Sattva Sanio apartment layout",
    "Sattva Sanio unit plan",
    "Sattva Sanio 2 BHK floor plan",
    "Sattva Sanio 3 BHK floor plan",
    "Sattva Sanio 4 BHK floor plan",
    "Sattva Sanio flat layout",
    "Sattva Sanio apartment design",
    "Budigere Cross apartment floor plan",
    "apartments floor plan Bangalore",
  ],

  metadataBase: new URL("https://www.sattvasanio.in"),

  alternates: {
    canonical: "https://www.sattvasanio.in/floor-plan",
  },

  openGraph: {
    title:
      "Sattva Sanio Floor Plan | 2, 3 & 4 BHK Apartment Layouts",
    description:
      "View the spacious floor plans and apartment layouts of Sattva Sanio Bangalore featuring modern architecture and smart living spaces.",
    url: "https://www.sattvasanio.in/floor-plan",
    siteName: "Sattva Sanio",
    images: [
      {
        url: "https://www.sattvasanio.in/images/floor-plan-banner.webp",
        width: 1200,
        height: 630,
        alt: "Sattva Sanio Floor Plan Layout",
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
      "Discover spacious and modern floor plans at Sattva Sanio Bangalore. View detailed apartment layouts for 2 BHK, 3 BHK and 4 BHK homes.",
    images: [
      "https://www.sattvasanio.in/images/floor-plan-banner.jpeg",
    ],
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
        "@type": "Apartment",
        name: "Sattva Sanio Floor Plan",
        description:
          "Detailed floor plans of Sattva Sanio apartments located in Budigere Cross Bangalore including 2 BHK, 3 BHK and 4 BHK layouts.",
        url: "https://www.sattvasanio.in/floor-plan",
        image:
          "https://www.sattvasanio.in/images/floor-plan-banner.webp",

        address: {
          "@type": "PostalAddress",
          streetAddress: "Old Madras Main Road, Budigere Cross",
          addressLocality: "Bangalore",
          addressRegion: "Karnataka",
          addressCountry: "IN",
        },

        numberOfRooms: "2,3,4",
        amenityFeature: [
          {
            "@type": "LocationFeatureSpecification",
            name: "Spacious Living Rooms",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Modern Kitchen Layout",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Balcony Design",
            value: true,
          },
        ],
      },

      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What apartment types are available in Sattva Sanio floor plan?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sattva Sanio offers 2 BHK, 3 BHK and 4 BHK apartment floor plans designed for spacious and modern living.",
            },
          },
          {
            "@type": "Question",
            name: "Where is Sattva Sanio located?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sattva Sanio is located on Old Madras Main Road at Budigere Cross in East Bangalore.",
            },
          },
          {
            "@type": "Question",
            name: "Are the floor plans of Sattva Sanio spacious?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, the floor plans are designed with spacious living areas, modern kitchens, balconies and efficient layouts for comfortable living.",
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
      <BlogSection/>
    </>
  );
}