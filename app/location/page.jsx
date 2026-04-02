import BlogSection from "@/components/BlogsSection";
import LocationPage from "./LocationPage";

export const metadata = {
  title: {
    default:
      "Sattva Sanio Location | Budigere Cross, Old Madras Road Bangalore Connectivity",
    template: "%s | Sattva Sanio Location",
  },

  description:
    "Explore Sattva Sanio location at Budigere Cross on Old Madras Road, Bangalore. Enjoy seamless connectivity to Whitefield, KR Puram, ITPL, schools, hospitals and Kempegowda International Airport.",

  keywords: [
    "Sattva Sanio location",
    "Budigere Cross apartments location",
    "Old Madras Road projects",
    "Sattva Sanio connectivity",
    "apartments near Whitefield Bangalore",
    "Sattva Sanio airport distance",
    "East Bangalore residential projects"
  ],

  metadataBase: new URL("https://www.sattvasanio.in"),

  alternates: {
    canonical: "/location",
  },

  openGraph: {
    title:
      "Sattva Sanio Location | Prime Connectivity in East Bangalore",
    description:
      "Discover the strategic location of Sattva Sanio with excellent connectivity to Whitefield, KR Puram, IT hubs and Kempegowda International Airport.",
    url: "https://www.sattvasanio.in/location",
    siteName: "Sattva Sanio",
    images: [
      {
        url: "https://www.sattvasanio.in/images/location-banner.webp",
        width: 1200,
        height: 630,
        alt: "Sattva Sanio Location Map",
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
      "Check location advantages of Sattva Sanio near Whitefield, KR Puram and Airport.",
    images: [
      "https://www.sattvasanio.in/images/location-banner.webp",
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
            name: "Location",
            item: "https://www.sattvasanio.in/location",
          },
        ],
      },

      {
        "@type": "LocalBusiness",
        name: "Sattva Sanio",
        image: "https://www.sattvasanio.in/images/location-banner.webp",
        url: "https://www.sattvasanio.in/location",
        description:
          "Sattva Sanio is a premium residential project located at Budigere Cross on Old Madras Road, East Bangalore with excellent connectivity to IT hubs and airport.",

        address: {
          "@type": "PostalAddress",
          streetAddress: "Old Madras Main Road, Budigere Cross",
          addressLocality: "Bangalore",
          addressRegion: "Karnataka",
          postalCode: "560049",
          addressCountry: "IN",
        },

        geo: {
          "@type": "GeoCoordinates",
          latitude: 13.0685,
          longitude: 77.7440,
        },

        areaServed: {
          "@type": "City",
          name: "Bangalore",
        },

        hasMap:
          "https://www.google.com/maps?q=13.0685,77.7440",

        sameAs: [
          "https://www.sattvasanio.in/",
        ],
      },

      {
        "@type": "Place",
        name: "Whitefield",
        description: "Major IT hub near Sattva Sanio",
      },

      {
        "@type": "Place",
        name: "Kempegowda International Airport",
        description: "Nearest airport to Sattva Sanio",
      },

      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Where is Sattva Sanio located?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sattva Sanio is located at Budigere Cross on Old Madras Main Road in East Bangalore with excellent connectivity to Whitefield and KR Puram.",
            },
          },
          {
            "@type": "Question",
            name: "What is the distance from Whitefield to Sattva Sanio?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Whitefield is approximately 10 to 12 km from Sattva Sanio, making it a convenient option for IT professionals.",
            },
          },
          {
            "@type": "Question",
            name: "How far is the airport from Sattva Sanio?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Kempegowda International Airport is around 27 to 30 km away and can be reached within 45 minutes depending on traffic.",
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
      <LocationPage />
      <BlogSection />
    </>
  );
}