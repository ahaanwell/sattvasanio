import BlogSection from "@/components/BlogsSection";
import AmenitiesPage from "./AmenitiesPage";

export const metadata = {
  title: {
    default:
      "Sattva Sanio Amenities in Bangalore | Clubhouse, Pool & Lifestyle Features",
    template: "%s | Sattva Sanio Amenities",
  },

  description:
    "Explore Sattva Sanio amenities at Budigere Cross, Old Madras Road (NH-75), East Bangalore. Enjoy clubhouse, swimming pool, gym, landscaped gardens, sports courts, kids play area and modern lifestyle facilities.",

  keywords: [
    "Sattva Sanio amenities",
    "Sattva Sanio Bangalore amenities",
    "Sattva Sanio clubhouse",
    "Sattva Sanio swimming pool",
    "Sattva Sanio gym",
    "Sattva Sanio sports facilities",
    "Sattva Sanio kids play area",
    "apartments amenities Budigere Cross",
    "luxury amenities East Bangalore",
  ],

  metadataBase: new URL("https://www.sattvasanio.in"),

  alternates: {
    canonical: "https://www.sattvasanio.in/amenities",
  },

  openGraph: {
    title:
      "Sattva Sanio Amenities | Luxury Lifestyle in East Bangalore",
    description:
      "Discover premium amenities at Sattva Sanio including clubhouse, fitness center, swimming pool, green landscapes and sports courts.",
    url: "https://www.sattvasanio.in/amenities",
    siteName: "Sattva Sanio",
    images: [
      {
        url: "https://www.sattvasanio.in/images/amenities.jpeg",
        width: 1200,
        height: 630,
        alt: "Sattva Sanio Amenities in Bangalore",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Sattva Sanio Amenities | Premium Lifestyle Facilities",
    description:
      "Explore Sattva Sanio amenities including clubhouse, gym, swimming pool, landscaped gardens and sports courts.",
    images: [
      "https://www.sattvasanio.in/images/amenities.jpeg"
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
          "Sattva Sanio in East Bangalore offers premium amenities including clubhouse, swimming pool, gym, landscaped gardens, jogging tracks, sports courts and kids play areas.",
        url: "https://www.sattvasanio.in/amenities",
        image: "https://www.sattvasanio.in/images/amenities.jpeg",

        address: {
          "@type": "PostalAddress",
          streetAddress: "Old Madras Road, Budigere Cross",
          addressLocality: "Bangalore",
          addressRegion: "Karnataka",
          postalCode: "560049",
          addressCountry: "IN"
        },

        amenityFeature: [
          { "@type": "LocationFeatureSpecification", "name": "Clubhouse", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Swimming Pool", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Gymnasium", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Jogging Track", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Cycling Track", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Children Play Area", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Basketball Court", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Badminton Court", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Cricket Practice Area", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Skating Rink", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Landscaped Gardens", "value": true }
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
              text: "Sattva Sanio offers clubhouse, swimming pool, gym, jogging track, landscaped gardens, sports courts and dedicated kids play areas."
            }
          },
          {
            "@type": "Question",
            name: "Does Sattva Sanio have a swimming pool and gym?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, Sattva Sanio includes a modern swimming pool and fully equipped gymnasium for residents."
            }
          },
          {
            "@type": "Question",
            name: "Are there sports facilities in Sattva Sanio?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, the project offers badminton court, basketball court, cricket practice area, skating rink and other sports amenities."
            }
          },
          {
            "@type": "Question",
            name: "Is Sattva Sanio a good investment in East Bangalore?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, due to its location on Old Madras Road near Budigere Cross, modern amenities and growing infrastructure, Sattva Sanio is considered a strong investment option."
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
      <BlogSection />
    </>
  );
}