import BlogSection from "@/components/BlogsSection";
import LocationPage from "./LocationPage";

export const metadata = {
  title: {
    default:
      "Sattva Sanio Location | Old Madras Road Budigere Cross Bangalore Connectivity",
    template: "%s | Sattva Sanio Location",
  },

  description:
    "Discover the prime location of Sattva Sanio at Budigere Cross on Old Madras Main Road, East Bangalore. Enjoy excellent connectivity to Whitefield, KR Puram, ITPL, Kempegowda International Airport, schools, hospitals, and shopping malls.",

  keywords: [
    "Sattva Sanio location",
    "Sattva Sanio Budigere Cross location",
    "Sattva Sanio Old Madras Road",
    "Sattva Sanio Bangalore location",
    "Sattva Sanio connectivity",
    "apartments near Budigere Cross",
    "Budigere Cross residential projects",
    "Sattva Sanio Whitefield connectivity",
    "Sattva Sanio airport connectivity",
    "Sattva Sanio nearby IT parks"
  ],

  metadataBase: new URL("https://www.sattvasanio.in"),

  alternates: {
    canonical: "https://www.sattvasanio.in/location",
  },

  openGraph: {
    title:
      "Sattva Sanio Location | Budigere Cross Old Madras Road Bangalore",
    description:
      "Explore the strategic location of Sattva Sanio in East Bangalore with excellent connectivity to Whitefield, KR Puram, IT hubs, schools, hospitals and Kempegowda International Airport.",
    url: "https://www.sattvasanio.in/location",
    siteName: "Sattva Sanio",
    images: [
      {
        url: "https://www.sattvasanio.in/images/location-banner.png",
        width: 1200,
        height: 630,
        alt: "Sattva Sanio Location Map Budigere Cross",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Sattva Sanio Location | Budigere Cross Connectivity",
    description:
      "View the location map and connectivity advantages of Sattva Sanio Bangalore near Whitefield and Old Madras Road.",
    images: ["https://www.sattvasanio.in/images/location-banner.png"],
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
            name: "Location",
            item: "https://www.sattvasanio.in/location"
          }
        ]
      },

      {
        "@type": "ApartmentComplex",
        name: "Sattva Sanio",
        description:
          "Sattva Sanio is a premium residential apartment project located on Old Madras Main Road near Budigere Cross in East Bangalore with excellent connectivity to Whitefield, KR Puram and Kempegowda International Airport.",
        url: "https://www.sattvasanio.in/location",
        image: "https://www.sattvasanio.in/images/location-banner.png",

        address: {
          "@type": "PostalAddress",
          streetAddress: "Old Madras Main Road, Budigere Cross",
          addressLocality: "Bangalore",
          addressRegion: "Karnataka",
          postalCode: "560049",
          addressCountry: "IN"
        },

        geo: {
          "@type": "GeoCoordinates",
          latitude: "13.0685",
          longitude: "77.7440"
        }
      },

      {
        "@type": "Place",
        name: "Whitefield IT Hub",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Whitefield",
          addressRegion: "Karnataka",
          addressCountry: "IN"
        }
      },

      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Where is Sattva Sanio located?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sattva Sanio is located on Old Madras Main Road near Budigere Cross in East Bangalore with excellent connectivity to Whitefield, KR Puram and the airport."
            }
          },
          {
            "@type": "Question",
            name: "How far is Whitefield from Sattva Sanio?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Whitefield IT hub is approximately 10–12 km from the Sattva Sanio project location at Budigere Cross."
            }
          },
          {
            "@type": "Question",
            name: "How far is Kempegowda International Airport from Sattva Sanio?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Kempegowda International Airport is approximately 27–30 km from Sattva Sanio and can be reached in around 40–50 minutes depending on traffic."
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
      <LocationPage />
      <BlogSection/>
    </>
  );
}