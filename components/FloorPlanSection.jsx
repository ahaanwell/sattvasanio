/* eslint-disable react/no-unescaped-entities */

import FloorPlanClient from "./FloorPlanClient";

const floorPlans = [
  {
    id: 1,
    label: "2 BHK Floor Plan",
    image: "./images/2-bhk-floorplan.webp",
    alt: "2 BHK Apartment Layout",
  },
  {
    id: 2,
    label: "3 BHK Floor Plan",
    image: "./images/3-bhk-floorplan.webp",
    alt: "3 BHK Apartment Layout",
  },
  {
    id: 3,
    label: "4 BHK Floor Plan",
    image: "./images/3-bhk-floorplan.webp",
    alt: "4 BHK Apartment Layout",
  },
];

export default function FloorPlanSection() {

  return (
    <section
      id="floor-plan"
      aria-labelledby="floor-plan-heading"
      className="w-full bg-white pt-14 px-4 md:px-0"
    >
      <div className="max-w-5xl mx-auto">

        <h2
          id="floor-plan-heading"
          className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-2"
        >
          Floor Plans & Layout Designs
        </h2>

        <div className="w-full h-px bg-gray-200 mb-5" />

        <div className="text-gray-800 pb-5">
          <p>
            The <a href="https://www.sattvasanio.in/floor-plan">floor plans</a> are intelligently designed to offer maximum space efficiency, proper ventilation, and a comfortable living experience for modern families.
          </p>
        </div>

        {/* Floor Plan Grid */}
        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          aria-label="Apartment floor plan layouts"
        >
          {floorPlans.map((plan) => (
            <li
              key={plan.id}
              className="rounded-xl overflow-hidden border border-gray-200 shadow-sm cursor-pointer"
              
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src={plan.image}
                  alt={plan.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />

                <FloorPlanClient plan={plan} />
              </div>

              <div className="bg-primary text-white text-center font-semibold text-base md:text-lg py-3 px-4">
                {plan.label}
              </div>
            </li>
          ))}
        </ul>

        {/* Content Section */}
        <div className="space-y-10 pt-6 text-gray-800">

          <div>
            <h3 className="text-xl font-semibold mb-4">2 BHK Layout Overview</h3>

            <p className="mb-4">
              The 2 BHK apartments are ideal for working professionals and small families looking for efficient and comfortable living spaces.
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Well-planned living and dining area</li>
              <li>Two spacious bedrooms</li>
              <li>Functional kitchen layout</li>
              <li>Attached and common bathrooms</li>
              <li>Balcony for natural light and ventilation</li>
            </ul>

            <p className="mt-4">
              These homes are designed to maximize usability while maintaining a cozy and modern feel.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">3 BHK Layout Overview</h3>

            <p className="mb-4">
              The 3 BHK apartments provide additional space, making them suitable for growing families who need more flexibility and comfort.
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Large living and dining areas</li>
              <li>Three well-designed bedrooms</li>
              <li>Spacious kitchen with utility area</li>
              <li>Multiple bathrooms for convenience</li>
              <li>Balconies with open views</li>
            </ul>

            <p className="mt-4">
              These layouts offer a perfect balance between space, functionality, and modern design.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">4 BHK Layout Overview</h3>

            <p className="mb-4">
              The 4 BHK residences are designed for those seeking premium and expansive living spaces with enhanced privacy and comfort.
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Expansive living and dining zones</li>
              <li>Four large bedrooms with attached bathrooms</li>
              <li>Premium kitchen and utility space</li>
              <li>High-end layout with better space distribution</li>
              <li>Wide balconies for outdoor relaxation</li>
            </ul>

            <p className="mt-4">
              These homes deliver a luxury lifestyle within a well-planned gated community environment.
            </p>
          </div>

        </div>

      </div>

      
    </section>
  );
}