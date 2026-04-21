/* eslint-disable react/no-unescaped-entities */

import MasterPlanClient from "./MasterPlanClient";

export default function MasterPlanSection() {
  return (
    <section
      id="master-plan"
      aria-labelledby="master-plan-heading"
      className="w-full bg-white pt-14 px-4 md:px-0"
    >
      <div className="max-w-5xl mx-auto">
        <h2
          id="master-plan-heading"
          className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-2"
        >
          Master Plan
        </h2>

        <div className="w-full h-px bg-gray-200 mb-5" />
        <div className="text-gray-800 mb-5 space-y-6">
            <p>
      The <a href="https://www.sattvasanio.in/master-plan"><b>Sattva Sanio master plan</b></a> is thoughtfully designed to create a modern residential ecosystem that blends high-rise living with open green landscapes. Spread across approximately <b>10+ acres</b> at Budigere Cross on <b>Old Madras Road</b>, the development focuses on delivering a balanced lifestyle with urban convenience and natural surroundings.
    </p>

    <p>
      The layout is carefully planned to ensure optimal space utilization, smooth internal circulation, and enhanced privacy for residents. From tower placement to landscaped zones, every element is strategically designed to offer a comfortable and visually appealing living environment.
    </p>

        </div>
        <div className="max-w-2xl mx-auto">
          <div
            
            className="relative w-full aspect-[5/3] bg-gray-100 overflow-hidden"
          >
            <img
              src="./images/master-plan.webp"
              alt="Master Plan"
              className="w-full h-full object-cover"
              loading="lazy"
            />

            <MasterPlanClient/>
          </div>

          <div className="bg-primary text-white text-center font-semibold text-lg md:text-xl py-4 px-4">
            Master Plan
          </div>

        </div>
        <div className="pt-6 text-gray-800">

  <div className="space-y-6">
    <div>
      <h3 className="text-xl font-semibold mb-3">
        Land Parcel & Layout Design
      </h3>
      <p>
        The project is spread over a vast land parcel, allowing the inclusion of residential towers, open green spaces, and lifestyle zones without congestion. The layout ensures a harmonious mix of built-up and open areas.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-3">
        High-Rise Tower Configuration
      </h3>
      <p>
        Sattva Sanio features premium high-rise towers rising up to <b>G+35 floors</b>. These towers are designed to provide panoramic city views along with ample natural light and cross ventilation in every home.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-3">
        Tower Placement & Planning
      </h3>
      <p>
        The development includes <b>four residential towers</b> positioned to maximize privacy, reduce overlooking, and ensure proper airflow between buildings. The spacing enhances openness across the community.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-3">
        Total Residences
      </h3>
      <p>
        The project offers <b>600+ premium apartments</b>, forming a well-structured gated community designed for modern urban families seeking comfort and security.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-3">
        Apartment Configurations
      </h3>
      <p>
        The master plan includes thoughtfully designed <b>2 BHK, 3 BHK, and 4 BHK homes</b>, catering to a wide range of homebuyers—from working professionals to large families.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-3">
        Green Spaces & Open Areas
      </h3>
      <p>
        A significant portion of the project is dedicated to landscaped gardens, open lawns, and recreational green zones. These areas promote a peaceful lifestyle while encouraging outdoor activities and relaxation.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-3">
        Lifestyle & Amenities Hub
      </h3>
      <p>
        A centrally located clubhouse and amenities zone forms the heart of the community. It includes fitness facilities, indoor games, leisure spaces, and social interaction areas for residents of all age groups.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-3">
        Internal Roads & Connectivity
      </h3>
      <p>
        The internal infrastructure is designed with wide driveways, pedestrian-friendly walkways, and clearly defined parking areas. This ensures smooth traffic flow and safe movement within the premises.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-3">
        Safety & Gated Community Features
      </h3>
      <p>
        The project is planned as a secure gated community with controlled entry and exit points, surveillance systems, and modern security measures to ensure a safe and comfortable living environment.
      </p>
    </div>

    <p>
      Overall, the master plan of Sattva Sanio reflects a perfect balance between architecture, open spaces, and lifestyle amenities, making it a well-rounded residential destination in East Bangalore.
    </p>

  </div>

</div>
      </div>
    </section>
  );
}