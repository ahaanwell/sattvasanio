import BlogSection from "@/components/BlogsSection";
import MasterPlanPage from "./MasterPlanPage";

export const metadata = {
  title: {
    default:
      "Sattva Sanio Master Plan | Township Layout in Budigere Cross Bangalore",
    template: "%s | Sattva Sanio Master Plan",
  },

  description:
    "Explore the Sattva Sanio master plan in Budigere Cross, Bangalore. Discover a thoughtfully designed township layout with residential towers, landscaped open spaces, modern amenities and smart infrastructure.",

  keywords: [
    "Sattva Sanio master plan",
    "Sattva Sanio township layout",
    "Sattva Sanio site plan Bangalore",
    "Budigere Cross apartment layout",
    "Sattva Sanio tower plan",
    "Sattva Sanio project design",
    "East Bangalore township projects"
  ],

  metadataBase: new URL("https://www.sattvasanio.in"),

  alternates: {
    canonical: "/master-plan",
  },

  openGraph: {
    title:
      "Sattva Sanio Master Plan | Smart Township Layout in Bangalore",
    description:
      "View the master layout of Sattva Sanio featuring premium towers, green landscapes, internal roads and modern amenities.",
    url: "https://www.sattvasanio.in/master-plan",
    siteName: "Sattva Sanio",
    images: [
      {
        url: "https://www.sattvasanio.in/images/master-plan-banner.webp",
        width: 1200,
        height: 630,
        alt: "Sattva Sanio Master Plan Layout",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Sattva Sanio Master Plan | Township Layout Overview",
    description:
      "Discover the complete master plan of Sattva Sanio including towers, green spaces and amenities.",
    images: [
      "https://www.sattvasanio.in/images/master-plan-banner.webp",
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
            name: "Master Plan",
            item: "https://www.sattvasanio.in/master-plan",
          },
        ],
      },

      {
        "@type": "Product",
        name: "Sattva Sanio Master Plan",
        description:
          "Detailed township master plan of Sattva Sanio in Budigere Cross, Bangalore showcasing residential towers, landscaped gardens, open spaces and modern infrastructure.",
        
        brand: {
          "@type": "Brand",
          name: "Sattva Group",
        },

        image:
          "https://www.sattvasanio.in/images/master-plan-banner.webp",

        url: "https://www.sattvasanio.in/master-plan",

        areaServed: {
          "@type": "City",
          name: "Bangalore",
        },

        offers: {
          "@type": "Offer",
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
          url: "https://www.sattvasanio.in/master-plan",
        },
      },

      {
        "@type": "Place",
        name: "Budigere Cross",
        description: "Prime residential location in East Bangalore",
      },

      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is included in the Sattva Sanio master plan?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The master plan includes well-positioned residential towers, landscaped open areas, internal roads, clubhouse facilities and dedicated spaces for recreation.",
            },
          },
          {
            "@type": "Question",
            name: "How is the layout of Sattva Sanio designed?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The layout is designed to maximize space utilization, natural light and ventilation while maintaining a balance between green spaces and built areas.",
            },
          },
          {
            "@type": "Question",
            name: "Is Sattva Sanio located in a good area?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, Sattva Sanio is located at Budigere Cross on Old Madras Road, offering excellent connectivity to major IT hubs and key areas of Bangalore.",
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
      <MasterPlanPage />
      <BlogSection />
    </>
  );
}