/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

const landmarks = [
  { label: "Outer Ring Road", detail: "Immediate Access" },
  { label: "Sarjapur Road", detail: "10–15 Minutes" },
  { label: "Electronic City", detail: "25–30 Minutes" },
  { label: "Koramangala", detail: "20 Minutes" },
];

const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.683256338268!2d77.7662908!3d13.0558224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae0ff2939d2fdb%3A0x53dac1d0b117326b!2sNH%2075%20%26%20Old%20Madras%20Rd%2C%20Bengaluru%2C%20Karnataka%20560049!5e0!3m2!1sen!2sin!4v1773561216072!5m2!1sen!2sin";

export default function LocationSection() {
  return (
    <section
      id="location"
      aria-labelledby="location-heading"
      className="w-full bg-white pt-14 px-3 md:px-0"
    >
      <div className="max-w-5xl mx-auto">
        <h2
          id="location-heading"
          className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-2"
        >
          Location &amp; Connectivity
        </h2>

        <div className="w-full h-px bg-gray-200 mb-5" />

        <div className="mb-5 space-y-6 text-gray-800 leading-7">
          <p>
            <b>Sattva Sanio</b> is strategically located at Budigere Cross along
            <b> Old Madras Road (NH-75)</b>, one of the key growth corridors in
            <b> East Bangalore</b>. This location has rapidly emerged as a
            preferred residential destination due to its strong connectivity and
            balanced lifestyle environment. Homebuyers are increasingly drawn to
            this area for its peaceful surroundings combined with easy access to
            major employment hubs.
          </p>

          <p>
            Positioned close to important zones such as Whitefield, KR Puram,
            and Hoskote, the project offers seamless connectivity to leading IT
            parks and business districts. The presence of major road networks
            including
            <b> Old Madras Road</b> and <b> State Highway 104</b> ensures smooth
            travel across the city, making daily commuting convenient for
            working professionals.
          </p>

          <p>
            Budigere Cross is witnessing consistent infrastructure development,
            with new residential communities, educational institutions,
            healthcare centers, and retail spaces coming up in the vicinity.
            With ongoing growth and future development potential, this location
            is becoming a strong choice for those seeking modern homes in a
            well-connected and rapidly evolving part of Bangalore.
          </p>
        </div>

        <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm mb-8">
          <div className="w-full h-[380px] md:h-[460px]">
            <iframe
              src={MAP_EMBED_URL}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sattva Sanio location map — Bellandur, Bangalore"
              aria-label="Google Maps showing Sattva Sanio location in Bellandur, Bangalore"
            />
          </div>

          <Link
            href="https://maps.app.goo.gl/mgHt22xpDC33Br8B9"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Know more about Sattva Sanio location in Bellandur Bangalore"
            className="block w-full bg-primary hover:bg-blue-800 text-white text-center font-semibold text-lg py-4 transition-colors duration-200"
          >
            Know More About Location
          </Link>
        </div>

        <div className="text-gray-800 flex justify-between mt-4">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Project Address</h2>

            <p className="leading-7">
              <strong>Sattva Sanio</strong>
              <br />
              Cheemasandra Village, Bidarahalli Hobli,
              <br />
              Budigere Cross, Off Old Madras Road (NH-75),
              <br />
              East Bangalore, Bengaluru Urban District,
              <br />
              Karnataka – 560049.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Landmark and Map Details
            </h3>

            <div className="space-y-2">
              <p>
                <strong>Landmark:</strong> Near Budigere Cross Junction, Off Old
                Madras Road (NH-75)
              </p>
              <p>
                <strong>Coordinates:</strong> 13.0491° N, 77.7483° E
              </p>
              <p>
                <strong>Google Plus Code:</strong> 2PXX+FM8, Budigere Cross,
                Bengaluru, Karnataka 560049
              </p>
            </div>
          </div>
        </div>

        <div className="pt-6 text-gray-800">
          <h2 className="text-2xl font-semibold mb-6">
  Why Choose the Location of Sattva Sanio
</h2>

<div className="space-y-6 text-gray-800 leading-7">
  <p>
    The location of <b>Sattva Sanio</b> offers a perfect blend of connectivity,
    convenience, and future growth potential. Situated near Budigere Cross on
    <b> Old Madras Road (NH-75)</b>, the project ensures effortless access to
    key destinations across East Bangalore while maintaining a peaceful
    residential environment.
  </p>

  <ul className="list-disc pl-6 space-y-2">
    <li>Strategic location near Budigere Cross with direct highway access</li>
    <li>Close proximity to major IT hubs like <b>Whitefield</b> and <b>ITPL</b></li>
    <li>Seamless connectivity to KR Puram, Hoskote, and Outer Ring Road</li>
    <li>Easy access to <b>State Highway 104</b> and major city routes</li>
    <li>Nearby reputed schools, colleges, and educational institutions</li>
    <li>Well-connected to hospitals and healthcare facilities</li>
    <li>Availability of malls, retail outlets, and entertainment zones</li>
    <li>Strong public transport connectivity including buses and metro access</li>
  </ul>
</div>

<div className="mt-5">
  <img
    className="mb-3 w-full"
    src="/images/locationview.jpg"
    alt="Sattva Sanio Location Advantages"
    loading="lazy"
  />
</div>

<h3 className="text-xl font-semibold mt-10 mb-6">
  Connectivity Overview
</h3>

<div className="overflow-x-auto mb-10">
  <table className="w-full border border-gray-200 text-left">
    <thead>
      <tr className="border-b bg-gray-50">
        <th className="p-3 font-semibold">Destination</th>
        <th className="p-3 font-semibold">Distance</th>
        <th className="p-3 font-semibold">Travel Time</th>
      </tr>
    </thead>
    <tbody>
      <tr className="border-b">
        <td className="p-3">Budigere Cross</td>
        <td className="p-3">2 km</td>
        <td className="p-3">5 mins</td>
      </tr>
      <tr className="border-b">
        <td className="p-3">Old Madras Road</td>
        <td className="p-3">1 km</td>
        <td className="p-3">3 mins</td>
      </tr>
      <tr className="border-b">
        <td className="p-3">KR Puram</td>
        <td className="p-3">12 km</td>
        <td className="p-3">20 mins</td>
      </tr>
      <tr className="border-b">
        <td className="p-3">Whitefield</td>
        <td className="p-3">10 km</td>
        <td className="p-3">18 mins</td>
      </tr>
      <tr className="border-b">
        <td className="p-3">ITPL</td>
        <td className="p-3">12 km</td>
        <td className="p-3">20 mins</td>
      </tr>
      <tr className="border-b">
        <td className="p-3">Hoskote</td>
        <td className="p-3">8 km</td>
        <td className="p-3">15 mins</td>
      </tr>
      <tr className="border-b">
        <td className="p-3">Kempegowda International Airport</td>
        <td className="p-3">25–30 km</td>
        <td className="p-3">35–40 mins</td>
      </tr>
      <tr className="border-b">
        <td className="p-3">Phoenix Marketcity</td>
        <td className="p-3">13 km</td>
        <td className="p-3">25 mins</td>
      </tr>
      <tr className="border-b">
        <td className="p-3">Manyata Tech Park</td>
        <td className="p-3">27 km</td>
        <td className="p-3">45 mins</td>
      </tr>
      <tr>
        <td className="p-3">Orion Uptown Mall</td>
        <td className="p-3">8 km</td>
        <td className="p-3">15 mins</td>
      </tr>
    </tbody>
  </table>
</div>

<div className="space-y-6 text-gray-800 leading-7">
  <p>
    Located in one of the fastest-developing regions of Bangalore, this area
    continues to witness rapid infrastructure upgrades and residential demand.
    The surroundings offer a calm lifestyle while ensuring quick access to
    business districts, shopping destinations, and transport hubs.
  </p>

  <p>
    With increasing investments and upcoming developments, Budigere Cross is
    emerging as a high-potential real estate destination, making 
    <b> Sattva Sanio</b> an excellent choice for both homebuyers and investors.
  </p>
</div>

          <h3 className="text-xl font-semibold mt-10 mb-4">
  Airport Accessibility
</h3>

<img
  className="mb-3 w-full"
  src="/images/airport.jpg"
  alt="Sattva Sanio Airport Connectivity"
  loading="lazy"
/>

<div className="space-y-5 text-gray-800 leading-7">
  <p>
    Sattva Sanio benefits from convenient access to Kempegowda International Airport,
    located approximately 25–30 km away. The project is well connected through
    major road networks including Old Madras Road, allowing residents to reach
    the airport without hassle.
  </p>

  <ul className="list-disc pl-6 space-y-2">
    <li>Smooth connectivity via NH-75 and key arterial roads</li>
    <li>Ideal for frequent travelers and business professionals</li>
    <li>Reduced travel stress due to improved road infrastructure</li>
    <li>Strong factor contributing to long-term property value growth</li>
  </ul>
</div>

<h3 className="text-xl font-semibold mt-10 mb-4">
  Metro Connectivity & Future Expansion
</h3>

<img
  className="mb-3 w-full"
  src="/images/metro.jpg"
  alt="Metro Connectivity near Sattva Sanio"
  loading="lazy"
/>

<div className="space-y-5 text-gray-800 leading-7">
  <p>
    The project is supported by nearby metro stations at Whitefield and KR Puram,
    which connect residents to major parts of Bangalore. These metro links offer
    a reliable and time-saving commuting option for daily travel.
  </p>

  <ul className="list-disc pl-6 space-y-2">
    <li>Quick access to Whitefield and KR Puram metro stations</li>
    <li>Direct connectivity to key business and residential zones</li>
    <li>Upcoming metro extensions to enhance reach and convenience</li>
    <li>Helps reduce traffic dependency and commute time</li>
  </ul>
</div>

<h3 className="text-xl font-semibold mt-10 mb-4">
  Public Transport & Daily Commute Options
</h3>

<img
  className="mb-3 w-full"
  src="/images/busandpublictransport.jpg"
  alt="Public Transport near Sattva Sanio"
  loading="lazy"
/>

<div className="space-y-5 text-gray-800 leading-7">
  <p>
    Residents of Sattva Sanio enjoy easy access to various public transport
    options, making daily commuting simple and efficient. The area is well
    served by BMTC buses and other local transport facilities.
  </p>

  <ul className="list-disc pl-6 space-y-2">
    <li>Regular BMTC bus services from Budigere Cross Junction</li>
    <li>Easy connectivity to Whitefield, KR Puram, and central Bangalore</li>
    <li>Availability of cabs and auto-rickshaws throughout the day</li>
    <li>Convenient access to nearby bus and railway stations</li>
  </ul>
</div>

<h3 className="text-xl font-semibold mt-10 mb-4">
  Road Connectivity & Highway Access
</h3>

<div className="text-gray-800">
  <p className="mb-4 leading-7">
    The project enjoys excellent road connectivity, ensuring smooth travel
    across Bangalore and nearby regions. Its strategic location along Old
    Madras Road provides quick access to multiple important routes.
  </p>

  <ul className="list-disc pl-6 space-y-2 mb-10">
    <li>Direct connectivity to Old Madras Road (NH-75)</li>
    <li>Easy routes to Whitefield, KR Puram, and Hoskote</li>
    <li>Quick access to Outer Ring Road and major highways</li>
    <li>Seamless travel towards Bangalore–Chennai highway corridor</li>
    <li>Continuous infrastructure upgrades improving travel efficiency</li>
  </ul>
</div>

          <div>

  {/* Market Comparison Section */}
  <h2 className="text-2xl font-semibold mb-6">
    Property Comparison: Budigere Cross vs Whitefield
  </h2>

  <div className="space-y-5 text-gray-800 leading-7">
    <p>
      When comparing real estate opportunities in East Bangalore, Budigere Cross
      is rapidly gaining attention as a strong alternative to Whitefield.
      While Whitefield is a well-established IT hub with premium developments,
      property prices there have already reached higher levels.
    </p>

    <p>
      In contrast, Budigere Cross offers relatively affordable housing options
      while still being well-connected to major employment zones. The area is
      witnessing steady infrastructure growth, reduced congestion, and increased
      interest from both homebuyers and investors.
    </p>

    <ul className="list-disc pl-6 space-y-2">
      <li>Better price advantage compared to Whitefield</li>
      <li>Lower traffic density and peaceful surroundings</li>
      <li>Close proximity to IT corridors and business hubs</li>
      <li>High appreciation potential due to ongoing development</li>
    </ul>
  </div>

  {/* Comparison Table */}
  <div className="overflow-x-auto mt-6">
    <table className="w-full border border-gray-200 text-left">
      <thead>
        <tr className="border-b bg-gray-50">
          <th className="p-3 font-semibold">Area</th>
          <th className="p-3 font-semibold">Price Range (Approx)</th>
          <th className="p-3 font-semibold">Investment Outlook</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b">
          <td className="p-3">Whitefield</td>
          <td className="p-3">₹10,000 – ₹14,000 / sq ft</td>
          <td className="p-3">Stable growth in a developed market</td>
        </tr>
        <tr>
          <td className="p-3">Budigere Cross</td>
          <td className="p-3">₹7,000 – ₹9,000 / sq ft</td>
          <td className="p-3">Emerging hotspot with strong future returns</td>
        </tr>
      </tbody>
    </table>
  </div>

  {/* East Bangalore Section */}
  <div className="mt-10 text-gray-800">
    <h2 className="text-2xl font-semibold mb-6">Why East Bangalore is Booming</h2>

    <img
      className="mb-4 w-full"
      src="/images/east-bangalore.jpg"
      alt="East Bangalore Growth"
      loading="lazy"
    />

    <div className="space-y-6 leading-7">

      <p>
        East Bangalore has transformed into one of the city's most sought-after
        residential zones. What was once a quiet suburban stretch has now evolved
        into a thriving urban corridor with IT parks, residential communities,
        educational institutions, and lifestyle hubs.
      </p>

      <p>
        The presence of major employment centers, improved road infrastructure,
        and expanding metro connectivity has significantly boosted the demand
        for housing in this region. Buyers today are actively looking for
        properties that combine accessibility, comfort, and long-term value —
        making East Bangalore an ideal choice.
      </p>

      {/* Demand Section */}
      <h3 className="text-xl font-semibold">
        Growing Demand & Real Estate Potential
      </h3>

      <p>
        Areas like Whitefield, KR Puram, and Budigere Cross are seeing consistent
        growth due to their proximity to IT hubs and business parks. With ongoing
        infrastructure developments such as road expansions and metro projects,
        commuting is becoming easier and faster.
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>Strong demand from IT professionals</li>
        <li>Continuous infrastructure upgrades</li>
        <li>Balanced mix of urban and peaceful living</li>
        <li>Excellent long-term investment potential</li>
      </ul>

      {/* Location Advantage */}
      <h3 className="text-xl font-semibold">
        Strategic Location of Sattva Sanio
      </h3>

      <p>
        Located along Old Madras Road near Budigere Cross, Sattva Sanio enjoys
        excellent connectivity to key areas like Whitefield, KR Puram, and
        Hoskote. This location ensures smooth travel to workplaces, schools,
        hospitals, and shopping destinations.
      </p>

      <p>
        Despite its connectivity advantages, the area still offers a calm and
        green environment, making it perfect for families seeking a peaceful
        lifestyle without compromising on accessibility.
      </p>

      {/* Key Landmarks Section */}
      <h3 className="text-xl font-semibold">
        Important Nearby Locations & Landmarks
      </h3>

      <div className="space-y-5">

        <div>
          <h4 className="font-semibold">Budigere Cross</h4>
          <p>
            A rapidly developing residential junction connecting major roads and
            emerging as a prime investment hotspot.
          </p>
        </div>

        <div>
          <h4 className="font-semibold">Old Madras Road (NH-75)</h4>
          <p>
            A key arterial route offering seamless connectivity to East Bangalore
            and nearby towns.
          </p>
        </div>

        <div>
          <h4 className="font-semibold">Whitefield IT Corridor</h4>
          <p>
            One of Bangalore’s largest employment hubs with major tech parks and
            global companies.
          </p>
        </div>

        <div>
          <h4 className="font-semibold">KR Puram</h4>
          <p>
            A major transit hub with railway station, metro access, and bus
            connectivity.
          </p>
        </div>

        <div>
          <h4 className="font-semibold">Kempegowda International Airport</h4>
          <p>
            Easily accessible via highways, ideal for frequent travelers and
            business professionals.
          </p>
        </div>

        <div>
          <h4 className="font-semibold">Hoskote</h4>
          <p>
            A fast-growing suburb with industrial and residential development.
          </p>
        </div>

        <div>
          <h4 className="font-semibold">Indiranagar</h4>
          <p>
            A premium lifestyle destination known for dining, shopping, and
            entertainment.
          </p>
        </div>

        <div>
          <h4 className="font-semibold">ITPL (Tech Park)</h4>
          <p>
            A major employment zone attracting professionals from across the
            city.
          </p>
        </div>

        <div>
          <h4 className="font-semibold">Orion Uptown Mall</h4>
          <p>
            Nearby shopping and entertainment hub with retail, dining, and
            cinema options.
          </p>
        </div>

        <div>
          <h4 className="font-semibold">Healthcare Facilities</h4>
          <p>
            Access to reputed hospitals in Whitefield ensures quality medical
            care nearby.
          </p>
        </div>

        <div>
          <h4 className="font-semibold">Educational Institutions</h4>
          <p>
            Presence of top schools and universities makes it ideal for families.
          </p>
        </div>

        <div>
          <h4 className="font-semibold">Metro Connectivity</h4>
          <p>
            Upcoming and existing metro links at KR Puram improve city-wide
            connectivity and reduce travel time.
          </p>
        </div>

      </div>

    </div>
  </div>

</div>
        </div>
      </div>
    </section>
  );
}
