

import { FaDownload } from "react-icons/fa";
import EMICalculator from "./Emicalculator";
import DownloadCostSheetActions from "./DownloadCostSheetActions";

const priceData = [
  { type: "2 BHK", size: "On Request", price: "₹ 1.2 Cr* onwards" },
  { type: "3 BHK", size: "On Request", price: "Price On Request" },
  { type: "4 BHK", size: "On Request", price: "Price On Request" },
];

export default function PriceListSection() {
  return (
    <section
      id="price-table"
      aria-labelledby="price-list-heading"
      className="w-full bg-white pt-14"
    >
      <div className="max-w-5xl mx-auto">

        <h2
          id="price-list-heading"
          className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-2"
        >
          Apartment Configurations & Pricing
        </h2>

        <div className="w-full h-px bg-gray-200 mb-5" />

        <div className="flex flex-col lg:flex-row gap-0">

          {/* Desktop Table */}
          <div className="flex-1 overflow-x-auto">
            <table
              className="w-full text-sm md:text-base"
              role="table"
              aria-label="Apartment types and pricing"
            >
              <thead>
                <tr className="border bg-primary text-white border-gray-200">
                  <th className="py-1 px-2 font-bold text-center w-1/4">Unit Type</th>
                  <th className="py-1 px-2 font-bold text-center w-1/3">Size</th>
                  <th className="py-1 px-2 font-bold text-center w-1/3">Price</th>
                </tr>
              </thead>
              <tbody>
                {priceData.map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-gray-300 hover:bg-gray-50 transition"
                  >
                    <td className="py-2 px-2 text-center text-black">{row.type}</td>
                    <td className="py-2 px-2 text-center text-black">{row.size}</td>
                    <td className="py-2 px-2 text-center font-medium text-primary">
                      {row.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          
          {/* Costing Image */}
          <div className="px-4 md:px-0">
            <img
              className="w-full"
              loading="lazy"
              src="/images/costing-details.webp"
              alt="Sattva Sanio Price Sheet and Costing Details"
            />
            <DownloadCostSheetActions/>
          </div>

        </div>

        {/* Content Section */}
        <div className="pt-10 text-gray-800">

          <h2 className="text-2xl font-semibold mb-6">
            Apartment Types, Sizes & Price Insights
          </h2>

          <div className="space-y-6">

            <p>
              <strong>Sattva Sanio</strong> offers a well-curated mix of 2 BHK, 3 BHK, and 4 BHK apartments designed to suit modern urban lifestyles. Each residence is planned with efficient layouts, ensuring optimal space utilization, natural light, and ventilation for comfortable daily living.
            </p>

            <p>
              Located at Budigere Cross on Old Madras Road, the project features high-rise towers with contemporary architecture and scenic surroundings. The elevated structure allows residents to enjoy open views along with a peaceful environment within a well-developed community.
            </p>

            <p>
              Pricing for apartments starts from approximately <a href="https://www.sattvasanio.in/price"><b>₹ 1.2 Crore*</b></a>, making it a competitive offering in East Bangalore’s premium housing segment. The final cost may vary depending on factors such as floor level, unit size, tower positioning, and facing.
            </p>

            <p>
              The 2 BHK units are ideal for working professionals and small families, while 3 BHK homes provide additional space for growing families. For those seeking a more spacious and luxurious lifestyle, the 4 BHK apartments offer expansive layouts and premium living experiences.
            </p>

            <p>
              With a combination of modern design, flexible configurations, and strategic location, the project presents an attractive opportunity for both end-users and real estate investors looking for long-term value in East Bangalore.
            </p>

          </div>

          <EMICalculator />

        </div>

      </div>
    </section>
  );
}