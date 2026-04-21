/* eslint-disable react/no-unescaped-entities */
import {
  FaBuilding,
  FaRupeeSign,
  FaVectorSquare,
  FaDoorOpen,
  FaLayerGroup,
  FaCity,
  FaHelmetSafety,
  FaCertificate,
  FaCalendarDay,
} from "react-icons/fa6";
import { MdApartment } from "react-icons/md";

const highlights = [
  {
    icon: <FaBuilding className="text-3xl text-primary" />,
    label: "Project Type",
    value: "Apartment",
  },
  {
    icon: <FaRupeeSign className="text-3xl text-primary" />,
    label: "Starting Price",
    value: "₹1.2 Cr* Onwards",
  },
  {
    icon: <MdApartment className="text-3xl text-primary" />,
    label: "Unit Type",
    value: "2, 3 & 4 BHK",
  },
  {
    icon: <FaVectorSquare className="text-3xl text-primary" />,
    label: "Unit Sizes",
    value: "...",
  },
  {
    icon: <FaDoorOpen className="text-3xl text-primary" />,
    label: "Project Status",
    value: "New Launch",
  },
  {
    icon: <FaLayerGroup className="text-3xl text-primary" />,
    label: "Land Area",
    value: "10+ Acres",
  },
  {
    icon: <FaCity className="text-3xl text-primary" />,
    label: "Total Units",
    value: "600+",
  },
  {
    icon: <FaBuilding className="text-3xl text-primary" />,
    label: "Total No. of Floors",
    value: "G + 35 Floors",
  },
  {
    icon: <FaBuilding className="text-3xl text-primary" />,
    label: "No Of Towers",
    value: "4",
  },
  {
    icon: <FaHelmetSafety className="text-3xl text-primary" />,
    label: "Builder",
    value: "Sattva Group",
  },
  {
    icon: <FaCertificate className="text-3xl text-primary" />,
    label: "Rera No",
    value: "Coming Soon",
  },
  {
    icon: <FaCalendarDay className="text-3xl text-primary" />,
    label: "Possession",
    value: "Coming Soon",
  },
];

export default function ProjectHighlights() {
  return (
    <section
      id="project-highlights"
      aria-labelledby="highlights-heading"
      className="w-full bg-white pt-8 px-4 md:px-0"
    >
      <div className="max-w-5xl mx-auto">
        <h1
          id="highlights-heading"
          className="text-3xl font-semibold text-gray-900 text-center mb-5"
        >
          About Sattva Sanio
        </h1>
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
          aria-label="Sattva Sanio project highlights"
        >
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl px-1 sm:px-5 py-3 sm:py-5 flex items-start gap-1 sm:gap-4 hover:shadow-sm transition-shadow duration-300"
            >
              <div aria-hidden="true" className="mt-1 flex-shrink-0">
                {item.icon}
              </div>

              <div>
                <p className="text-sm text-gray-500 leading-tight mb-1">
                  {item.label}
                </p>
                <p className="text-sm font-semibold text-gray-800 leading-snug">
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto text-gray-700 mt-6 leading-relaxed">
  
  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
    Premium Apartments at Budigere Cross, Bangalore
  </h2>

  <p className="mb-4">
    Sattva Sanio is a premium residential project by the reputed Sattva Group, located on Old Madras Road near Budigere Cross in East Bangalore. This modern gated community is thoughtfully designed to offer a perfect balance of comfort, convenience, and a contemporary lifestyle.
  </p>

  <p className="mb-4">
    Spread across over 10 acres, the project features well-planned high-rise towers surrounded by landscaped gardens and open green spaces. With four elegant towers rising up to G+35 floors, residents can enjoy panoramic city views along with a peaceful living environment.
  </p>

  <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mt-6 mb-3">
    Spacious & Modern Homes
  </h2>
  <p className="mb-4">
    The project offers 2 BHK, 3 BHK, and 4 BHK apartments designed to meet the needs of working professionals, families, and investors. Each home is built with smart layouts, ample ventilation, and modern architecture to ensure comfortable everyday living.
  </p>

  <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mt-6 mb-3">
    Lifestyle Amenities & Community Living
  </h2>
  <p className="mb-4">
    With more than 600 premium residences, the development includes a wide range of modern amenities and shared spaces. From recreational facilities to social zones, it is designed to create a vibrant and active community within a secure environment.
  </p>

  <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mt-6 mb-3">
    Excellent Connectivity & Location Benefits
  </h2>
  <p className="mb-4">
    Located in a rapidly developing part of East Bangalore, the project enjoys excellent connectivity to major IT parks, reputed schools, hospitals, and entertainment hubs. This makes it an ideal choice for professionals working in nearby business districts and families looking for a well-connected yet peaceful residential destination.
  </p>

  <p>
    Sattva Sanio combines modern apartments, premium amenities, and a prime location to offer a balanced and elevated lifestyle in Bangalore.
  </p>

</div>
        <div className="text-gray-800">

  <h2 className="text-2xl font-semibold text-gray-800 my-6">
    Sattva Sanio Project Overview & Key Details
  </h2>

  <div className="overflow-x-auto mb-10">
    <table className="w-full border border-gray-200">
      <tbody>
        <tr className="border-b border-gray-400">
          <td className="p-2 font-semibold">Project Name</td>
          <td className="p-2">Sattva Sanio</td>
        </tr>
        <tr className="border-b border-gray-400">
          <td className="p-2 font-semibold">Location</td>
          <td className="p-2">Old Madras Road, Budigere Cross, East Bangalore</td>
        </tr>
        <tr className="border-b border-gray-400">
          <td className="p-2 font-semibold">Development Type</td>
          <td className="p-2">Premium Residential Apartments</td>
        </tr>
        <tr className="border-b border-gray-400">
          <td className="p-2 font-semibold">Total Land Area</td>
          <td className="p-2">10+ Acres</td>
        </tr>
        <tr className="border-b border-gray-400">
          <td className="p-2 font-semibold">Number of Towers</td>
          <td className="p-2">4 High-Rise Towers</td>
        </tr>
        <tr className="border-b border-gray-400">
          <td className="p-2 font-semibold">Structure</td>
          <td className="p-2">Ground + 35 Floors</td>
        </tr>
        <tr className="border-b border-gray-400">
          <td className="p-2 font-semibold">Total Residences</td>
          <td className="p-2">600+ Units</td>
        </tr>
        <tr className="border-b border-gray-400">
          <td className="p-2 font-semibold">Configurations</td>
          <td className="p-2">2, 3 & 4 BHK Apartments</td>
        </tr>
        <tr className="border-b border-gray-400">
          <td className="p-2 font-semibold">Price Range</td>
          <td className="p-2">Starting from ₹1.2 Cr*</td>
        </tr>
        <tr>
          <td className="p-2 font-semibold">Community Type</td>
          <td className="p-2">Secure Gated Community</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h2 className="text-2xl font-semibold mb-6">
    Key Highlights & Advantages
  </h2>

  <div className="space-y-6 leading-relaxed">

    <div>
      <h3 className="text-xl font-semibold mb-2">
        Strategic Location in East Bangalore
      </h3>
      <p>
        Located on Old Madras Road near Budigere Cross, the project enjoys excellent connectivity to major hubs like Whitefield and KR Puram. This fast-developing corridor makes daily commuting easy and adds strong value for both homebuyers and investors.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-2">
        Expansive Development Across 10+ Acres
      </h3>
      <p>
        Spread over a large land parcel, the community is designed with a balanced mix of open spaces and residential zones, allowing residents to enjoy greenery, wide roads, and well-planned infrastructure within the project.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-2">
        Modern High-Rise Living
      </h3>
      <p>
        The development features four iconic towers rising up to 35 floors, offering elevated living with scenic views, better ventilation, and a modern architectural design.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-2">
        Premium Residences in a Gated Community
      </h3>
      <p>
        With over 600 thoughtfully designed apartments, the project fosters a vibrant community lifestyle while ensuring privacy, safety, and a well-maintained living environment.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-2">
        Flexible Apartment Options
      </h3>
      <p>
        The project offers 2 BHK, 3 BHK, and 4 BHK homes, catering to different family sizes. Each unit is planned to maximize space utilization, natural light, and airflow for a comfortable living experience.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-2">
        Lifestyle Amenities for All Age Groups
      </h3>
      <p>
        Residents can enjoy a wide range of facilities including a clubhouse, swimming pool, gymnasium, landscaped gardens, jogging tracks, children’s play areas, and sports zones designed for an active lifestyle.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-2">
        Green & Open Environment
      </h3>
      <p>
        The project emphasizes open spaces and greenery, with landscaped parks and relaxation zones that provide a calm and refreshing atmosphere within the community.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-2">
        Advanced Security Features
      </h3>
      <p>
        The gated community is equipped with 24/7 security, CCTV surveillance, and controlled access points, ensuring a safe and secure environment for residents.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-2">
        Strong Investment Potential
      </h3>
      <p>
        With rapid infrastructure growth and proximity to IT hubs, Budigere Cross is emerging as a promising real estate destination, making this project a smart investment opportunity.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-2">
        Balanced Urban Lifestyle
      </h3>
      <p>
        Combining premium homes, modern amenities, green surroundings, and seamless connectivity, the project offers a well-rounded lifestyle that meets the needs of today’s urban residents.
      </p>
    </div>

  </div>

</div>

        <div className="text-gray-800 mt-6">

  <h2 className="text-2xl font-semibold mb-6">About the Project</h2>

  <div className="space-y-6">

    <p>
      <strong>Sattva Sanio</strong> is a large-scale residential development coming up in East Bangalore, designed to offer a modern and comfortable lifestyle. Developed by <a href="https://sattvagroup.com/" rel="nofollow"><strong>Sattva Resi Pvt Ltd</strong></a>, the construction contract has been awarded to Starworth Infrastructure &amp; Construction Ltd (SICL), a subsidiary of Puravankara, with an estimated value of <b>₹311.18 crore</b>. Spanning approximately 3.04 million sq. ft., the project is planned for completion within 37 months. It aims to deliver a well-planned urban community that blends spacious living with contemporary architecture and practical design.
    </p>

    <p>
      One of the key highlights of the development is its impressive high-rise towers, offering expansive views and a refreshing living environment. The layout is carefully planned to maximize natural light and cross ventilation in every home. With a strong focus on greenery and open spaces, residents can enjoy a calm and relaxing atmosphere away from the city’s hustle. Landscaped gardens, walking pathways, and dedicated seating zones are thoughtfully integrated to promote an active and healthy lifestyle. The apartments are designed with efficient layouts, ensuring spacious living areas for family time and private bedrooms for relaxation.
    </p>

    <p>
      The kitchens are designed to be modern and functional, making daily activities convenient and efficient. Beyond individual homes, the project emphasizes community living with a wide range of shared amenities that encourage social interaction and an engaging lifestyle. Residents will have access to sports facilities, fitness centers, and play areas suitable for all age groups. Overall, the development is envisioned as a complete residential ecosystem that combines comfort, connectivity, and modern living standards. Key features of the project include:
    </p>

    <ul className="list-disc pl-6 space-y-2">
      <li>4 high-rise residential towers</li>
      <li>Beautifully landscaped open spaces</li>
      <li>Dedicated community activity zones</li>
      <li>Wide internal roads for smooth movement</li>
      <li>Well-planned pedestrian pathways</li>
      <li>Secure gated community with controlled access</li>
      <li>Clubhouse and recreational facilities</li>
    </ul>

    <p>
      The overall master plan ensures seamless movement within the community while maintaining a balance between built spaces and greenery, creating a comfortable and visually appealing living environment.
    </p>

  </div>

</div>

<div className="pt-6 text-gray-800">

  <h2 className="text-2xl font-semibold mb-6">Customer Reviews & Market Response</h2>

  <div className="space-y-6">

    <p>
      Sattva Sanio has been generating strong interest among homebuyers and real estate experts due to its well-planned layout, premium high-rise design, and strategic location. Spread across a large land parcel in Budigere Cross, the project is being seen as a promising addition to East Bangalore’s residential landscape.
    </p>

    <p>
      Property consultants highlight its connectivity to key areas like Whitefield and KR Puram, along with its modern amenities and community-focused design. These factors make it an attractive option for both end-users and investors looking for long-term value.
    </p>

    <p>
      The development features four tall residential towers with thoughtfully designed homes, open green zones, and lifestyle amenities. The overall concept focuses on offering a peaceful yet well-connected urban lifestyle within a secure gated environment.
    </p>

    <p>
      Project brochures and official materials showcase detailed master plans, apartment configurations, and lifestyle features, giving buyers a clear understanding of the project’s vision. This transparency and planning have contributed to positive initial feedback in the market.
    </p>

  </div>

  <h2 className="text-2xl font-semibold mt-12 mb-6">RERA Status & Approvals</h2>

  <div className="space-y-6">

    <p>
      The project is currently in the process of obtaining RERA registration from the Karnataka Real Estate Regulatory Authority. Once approved, the official RERA number will be published along with verified project details such as timelines, layout plans, and specifications.
    </p>

    <p>
      The developer has already initiated necessary approvals, including land clearances, building permissions, and planning sanctions from relevant authorities. RERA approval will further enhance transparency and buyer confidence.
    </p>

  </div>

  <h2 className="text-2xl font-semibold mt-12 mb-6">
    Expression of Interest (EOI) & Booking Details
  </h2>

  <div className="space-y-6">

    <p>
      The Expression of Interest (EOI) phase allows early buyers to secure priority access to units at pre-launch pricing. This stage is ideal for investors and homebuyers who want to benefit from initial offers and better unit selection.
    </p>

    <p>
      Buyers can participate in the EOI process by submitting a token amount, which indicates their intent to purchase. This ensures early allocation once bookings officially open.
    </p>

    <ul className="list-disc pl-6 space-y-2">
      <li>2 BHK Apartments – ₹6 Lakhs (Approx.)</li>
      <li>3 BHK Apartments – ₹9 Lakhs (Approx.)</li>
      <li>4 BHK Apartments – ₹12 Lakhs (Approx.)</li>
    </ul>

    <p>
      The project is expected to follow a construction-linked payment plan, offering flexibility to buyers by aligning payments with development milestones.
    </p>

    <ul className="list-disc pl-6 space-y-2">
      <li>Initial booking amount at confirmation</li>
      <li>Payment during agreement stage</li>
      <li>Stage-wise payments during construction</li>
      <li>Final payment at possession</li>
    </ul>

    <p>
      This structured approach makes the investment more manageable and financially convenient for buyers.
    </p>

  </div>

  <h2 className="text-2xl font-semibold mt-12 mb-6">Latest Project Updates 2026</h2>

  <div className="space-y-6">

    <p>
      Sattva Group continues to strengthen its presence in Bangalore with premium residential developments, and this project is a part of that expansion. Known for quality construction and timely delivery, the developer aims to introduce a modern living destination in East Bangalore.
    </p>

    <p>
      With increasing demand for well-connected residential communities, the project is expected to attract strong interest from both buyers and investors. Its location advantage and planned infrastructure growth further enhance its future potential.
    </p>

  </div>

  <h2 className="text-2xl font-semibold mt-12 mb-6">
    Growth of Budigere Cross & East Bangalore
  </h2>

  <div className="space-y-6">

    <p>
      Budigere Cross has transformed significantly over the past decade from a quiet peripheral area into a rapidly developing residential hub. Its proximity to Whitefield and major IT corridors has played a key role in this growth.
    </p>

    <p>
      As employment opportunities increased in nearby tech parks, the demand for quality housing in surrounding areas also rose. Budigere Cross emerged as a preferred location due to its connectivity and relatively open land availability.
    </p>

    <p>
      Infrastructure upgrades such as road widening, improved connectivity to KR Puram, and better access to highways have made commuting more convenient. In addition, the development of schools, hospitals, and retail spaces has improved overall livability.
    </p>

    <p>
      The continued expansion of East Bangalore’s IT sector and upcoming infrastructure projects are expected to further boost the region’s real estate demand. As a result, Budigere Cross is steadily evolving into a well-connected and high-growth residential zone.
    </p>

    <p>
      Positioned in this fast-growing corridor, the project offers a combination of modern living, connectivity, and long-term investment potential, making it a compelling choice for today’s homebuyers.
    </p>

  </div>

</div>

      </div>
    </section>
  );
}
