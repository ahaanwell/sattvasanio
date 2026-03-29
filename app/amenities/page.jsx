import BlogSection from "@/components/BlogsSection";
import AmenitiesPage from "./AmenitiesPage";

export const metadata = {
  title: {
    default:
      "Sattva Sanio Amenities | Clubhouse, Swimming Pool & Lifestyle Facilities",
    template: "%s | Sattva Sanio Amenities",
  },

  description:
    "Explore the premium amenities at Sattva Sanio in Budigere Cross, Old Madras Road Bangalore including clubhouse, swimming pool, gym, landscaped gardens, sports courts, kids play area and modern lifestyle facilities.",

  keywords: [
    "Sattva Sanio amenities",
    "Sattva Sanio Bangalore amenities",
    "Sattva Sanio clubhouse",
    "Sattva Sanio lifestyle amenities",
    "Sattva Sanio sports facilities",
    "Sattva Sanio swimming pool",
    "Sattva Sanio gym",
    "Sattva Sanio kids play area",
    "Budigere Cross apartment amenities",
    "luxury apartment amenities Bangalore"
  ],

  metadataBase: new URL("https://www.sattvasanio.in"),

  alternates: {
    canonical: "https://www.sattvasanio.in/amenities",
  },

  openGraph: {
    title:
      "Sattva Sanio Amenities | Premium Lifestyle Facilities in Bangalore",
    description:
      "Discover modern lifestyle amenities at Sattva Sanio including clubhouse, fitness center, swimming pool, landscaped gardens and sports courts.",
    url: "https://www.sattvasanio.in/amenities",
    siteName: "Sattva Sanio",
    images: [
      {
        url: "https://www.sattvasanio.in/images/amenities.jpeg",
        width: 1200,
        height: 630,
        alt: "Sattva Sanio Amenities",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Sattva Sanio Amenities | Luxury Lifestyle Facilities",
    description:
      "Explore modern amenities at Sattva Sanio including clubhouse, gym, sports courts and landscaped gardens.",
    images: [
      "https://www.sattvasanio.in/images/amenities.jpeg"
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
            item: "https://www.sattvasanio.in/"
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Amenities",
            item: "https://www.sattvasanio.in/amenities"
          }
        ]
      },

      {
        "@type": "ApartmentComplex",
        name: "Sattva Sanio",
        description:
          "Sattva Sanio offers modern lifestyle amenities including clubhouse, swimming pool, landscaped gardens, fitness center, sports courts and kids play area in East Bangalore.",
        url: "https://www.sattvasanio.in/amenities",
        image: "https://www.sattvasanio.in/images/amenities.jpeg",

        address: {
          "@type": "PostalAddress",
          streetAddress: "Old Madras Main Road, Budigere Cross",
          addressLocality: "Bangalore",
          addressRegion: "Karnataka",
          postalCode: "560049",
          addressCountry: "IN"
        },

        amenityFeature: [
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
            name: "Gymnasium",
            value: true
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Jogging Track",
            value: true
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Children Play Area",
            value: true
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Basketball Court",
            value: true
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Badminton Court",
            value: true
          }
        ]
      },

      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What amenities are available at Sattva Sanio?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sattva Sanio offers modern amenities including a clubhouse, swimming pool, gymnasium, sports courts, landscaped gardens, jogging tracks and children's play areas."
            }
          },
          {
            "@type": "Question",
            name: "Does Sattva Sanio have a clubhouse?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, Sattva Sanio features a modern clubhouse with indoor games, lounge areas, multipurpose halls and community spaces."
            }
          },
          {
            "@type": "Question",
            name: "Are there sports facilities at Sattva Sanio?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, the project includes badminton courts, basketball courts, cricket practice areas, skating rink and other sports amenities."
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
      <AmenitiesPage />
      <BlogSection/>
    </>
  );
}