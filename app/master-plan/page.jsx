import BlogSection from "@/components/BlogsSection";
import MasterPlanPage from "./MasterPlanPage";

export const metadata = {
  title: {
    default:
      "Sattva Sanio Master Plan | Township Layout & Project Site Plan Budigere Cross",
    template: "%s | Sattva Sanio Master Plan",
  },

  description:
    "Explore the master plan of Sattva Sanio located on Old Madras Main Road, Budigere Cross, Bangalore. Discover the well-planned township layout with residential towers, landscaped gardens, modern amenities, and open green spaces.",

  keywords: [
    "Sattva Sanio master plan",
    "Sattva Sanio Bangalore master plan",
    "Sattva Sanio Budigere Cross master plan",
    "Sattva Sanio township layout",
    "Sattva Sanio site plan",
    "Sattva Sanio project layout",
    "Sattva Sanio apartment township plan",
    "Budigere Cross apartment master plan",
    "Sattva Sanio tower layout",
    "Sattva Sanio residential layout Bangalore"
  ],

  metadataBase: new URL("https://www.sattvasanio.in"),

  alternates: {
    canonical: "https://www.sattvasanio.in/master-plan",
  },

  openGraph: {
    title:
      "Sattva Sanio Master Plan | Township Layout & Project Site Plan",
    description:
      "View the detailed master layout of Sattva Sanio Bangalore featuring residential towers, landscaped gardens, modern amenities, and open green spaces.",
    url: "https://www.sattvasanio.in/master-plan",
    siteName: "Sattva Sanio",
    images: [
      {
        url: "https://www.sattvasanio.in/images/master-plan-banner.jpeg",
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
      "Sattva Sanio Master Plan | Township Layout Budigere Cross",
    description:
      "Discover the master plan layout of Sattva Sanio Bangalore including tower placement, amenities, green areas and project infrastructure.",
    images: [
      "https://www.sattvasanio.in/images/master-plan-banner.jpeg",
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
            name: "Master Plan",
            item: "https://www.sattvasanio.in/master-plan",
          },
        ],
      },

      {
        "@type": "ApartmentComplex",
        name: "Sattva Sanio Master Plan",
        description:
          "Master plan of Sattva Sanio residential project in Budigere Cross Bangalore featuring 4 towers, landscaped gardens, modern amenities and planned open spaces.",
        url: "https://www.sattvasanio.in/master-plan",
        image:
          "https://www.sattvasanio.in/images/master-plan-banner.webp",

        address: {
          "@type": "PostalAddress",
          streetAddress: "Old Madras Main Road, Budigere Cross",
          addressLocality: "Bangalore",
          addressRegion: "Karnataka",
          addressCountry: "IN"
        },

        numberOfAccommodationUnits: "600+",

        amenityFeature: [
          {
            "@type": "LocationFeatureSpecification",
            name: "Landscaped Gardens",
            value: true
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Clubhouse",
            value: true
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Swimming Pool",
            value: true
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Children Play Area",
            value: true
          }
        ]
      },

      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What does the Sattva Sanio master plan include?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The master plan of Sattva Sanio includes residential towers, landscaped gardens, modern amenities, open green spaces and internal roads designed for comfortable living."
            }
          },
          {
            "@type": "Question",
            name: "How many towers are included in Sattva Sanio master plan?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The master plan of Sattva Sanio includes 4 residential towers with G+35 floors."
            }
          },
          {
            "@type": "Question",
            name: "Where is Sattva Sanio located?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sattva Sanio is located on Old Madras Main Road at Budigere Cross in East Bangalore."
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
      <MasterPlanPage />
      <BlogSection/>
    </>
  );
}