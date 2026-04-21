
import DownloadActions from "@/components/DownloadActions";
import PageHero from "@/components/PageHero";

function PricePage() {

  return (
    <>
      <main className="w-full bg-white">
        <div>
          <PageHero title={"Price"} />
        </div>
        <div className="max-w-5xl mx-auto py-10 px-4 md:px-0">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
            Sattva Sanio Price
          </h1>
          <DownloadActions/>
         <div className="space-y-6 text-gray-800 mt-5 leading-7">

  <p>
    The <a href="https://www.sattvasanio.in/price"><b>Sattva Sanio pricing</b></a> is carefully positioned to deliver strong value for buyers looking for
    premium homes in <b>East Bangalore</b>. Situated along Old Madras Road near Budigere Cross,
    the project features thoughtfully designed <b>2, 3, and 4 BHK residences</b> with an
    introductory price starting from <b>₹1.2 Crore onwards</b>.
  </p>

  <div className="flex justify-center items-center">
    <img 
      src="/images/gallery-1.webp" 
      alt="Sattva Sanio Apartments"
      loading="lazy"
    />
  </div>

  <p>
    Spread across a large land parcel, the development includes modern high-rise towers
    with premium specifications and lifestyle amenities. With multiple configurations
    available, buyers can choose homes based on size, layout preferences, and budget.
  </p>

  <p>
    Due to its location advantage and proximity to major employment hubs like Whitefield,
    KR Puram, and IT corridors, this project stands out as a strong option for both
    end-users and investors seeking long-term appreciation.
  </p>

  {/* Apartment Pricing */}
  <h3 className="text-2xl font-semibold mt-10">
    Apartment Configurations & Pricing
  </h3>

  <div className="flex justify-center items-center">
    <img 
      src="/images/apartments-price.jpeg" 
      alt="Sattva Sanio Price List"
      loading="lazy"
    />
  </div>

  <p>
    Sattva Sanio offers a range of apartment configurations designed for modern living.
    Each unit is planned with efficient layouts, spacious interiors, and contemporary
    finishes to suit different lifestyle needs.
  </p>

  <h3 className="text-xl font-semibold mt-6">Indicative Price Chart</h3>

  <div className="overflow-x-auto">
    <table className="w-full border border-gray-300 mt-4">
      <thead className="bg-gray-100">
        <tr>
          <th className="border p-3 text-left">Configuration</th>
          <th className="border p-3 text-left">Size Range</th>
          <th className="border p-3 text-left">Starting Price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border p-3">2 BHK</td>
          <td className="border p-3">Available on Request</td>
          <td className="border p-3">₹1.2 Cr* Onwards</td>
        </tr>
        <tr>
          <td className="border p-3">3 BHK</td>
          <td className="border p-3">Available on Request</td>
          <td className="border p-3">
            <button
              className="cursor-pointer text-blue-600 underline"
              
            >
              Get Price Details
            </button>
          </td>
        </tr>
        <tr>
          <td className="border p-3">4 BHK</td>
          <td className="border p-3">Available on Request</td>
          <td className="border p-3">
            <button
              className="cursor-pointer text-blue-600 underline"
            
            >
              Get Price Details
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <p className="text-sm text-gray-600">
    *Prices are indicative and may vary based on unit size, floor level, and availability.
  </p>

  {/* Pricing Benefits */}
  <h3 className="text-2xl font-semibold mt-10">
    Key Pricing Advantages
  </h3>

  <p>
    One of the major highlights of this project is its competitive launch pricing
    compared to other premium developments in the region. Buyers get access to
    modern homes at an early-stage price point, which enhances investment potential.
  </p>

  <ul className="list-disc pl-6 space-y-2">
    <li>Attractive pre-launch and early-stage pricing</li>
    <li>Premium homes in a fast-developing location</li>
    <li>Flexible payment options during construction</li>
    <li>Strong potential for capital appreciation</li>
  </ul>

  {/* Payment Plan */}
  <h3 className="text-2xl font-semibold mt-10">
    Payment Plan & Booking Process
  </h3>

  <div className="flex justify-center items-center">
    <img 
      src="/images/payment-plan-and-booking-process.jpeg" 
      alt="Payment Plan"
      loading="lazy"
    />
  </div>

  <p>
    The project offers buyer-friendly payment plans aligned with construction
    milestones. This staged payment structure reduces financial burden and
    makes ownership more convenient.
  </p>

  <ul className="list-disc pl-6 space-y-2">
    <li>Submit initial Expression of Interest (EOI)</li>
    <li>Select preferred unit and configuration</li>
    <li>Complete booking documentation</li>
    <li>Pay in stages as construction progresses</li>
  </ul>

  <p>
    Early buyers may also benefit from exclusive offers, launch discounts,
    and priority unit selection.
  </p>

  {/* Additional Charges */}
  <h3 className="text-2xl font-semibold mt-10">
    Additional Costs to Consider
  </h3>

  <p>
    Apart from the base price, buyers should account for standard additional
    charges applicable in residential projects.
  </p>

  <ul className="list-disc pl-6 space-y-2">
    <li>GST as per current government rules</li>
    <li>Floor rise premium for higher levels</li>
    <li>Parking and clubhouse charges</li>
    <li>Maintenance deposit</li>
    <li>Stamp duty and registration fees</li>
  </ul>

  {/* Investment Section */}
  <h3 className="text-2xl font-semibold mt-10">
    Investment Potential
  </h3>

  <p>
    Sattva Sanio presents a strong investment opportunity due to its strategic
    location, modern design, and brand reliability. The surrounding area is
    witnessing rapid infrastructure development, which is expected to drive
    property value growth over time.
  </p>

  <ul className="list-disc pl-6 space-y-2">
    <li>Prime location on Old Madras Road</li>
    <li>Close to IT hubs and business zones</li>
    <li>Growing demand for residential properties</li>
    <li>Future appreciation driven by infrastructure growth</li>
  </ul>

  {/* Highlights */}
  <h3 className="text-2xl font-semibold mt-10">
    Project Price Highlights
  </h3>

  <ul className="list-disc pl-6 space-y-2">
    <li>Premium 2, 3 & 4 BHK apartments</li>
    <li>Starting price from ₹1.2 Crore onwards</li>
    <li>Located in Budigere Cross growth corridor</li>
    <li>Modern high-rise living with amenities</li>
    <li>Ideal for both end-use and investment</li>
  </ul>

  <p>
    Overall, the pricing strategy makes Sattva Sanio a well-balanced option
    for buyers looking for a premium home with long-term value in East Bangalore.
  </p>

</div>
        </div>
      </main>
    </>
  );
}

export default PricePage;
