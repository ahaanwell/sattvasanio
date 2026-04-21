
import DownloadActions from "@/components/DownloadActions";
import PageHero from "@/components/PageHero";
import Link from "next/link";

function LocationPage() {
  const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.683256338268!2d77.7662908!3d13.0558224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae0ff2939d2fdb%3A0x53dac1d0b117326b!2sNH%2075%20%26%20Old%20Madras%20Rd%2C%20Bengaluru%2C%20Karnataka%20560049!5e0!3m2!1sen!2sin!4v1773561216072!5m2!1sen!2sin";

  return (
    <>
      <main className="w-full bg-white">
        <div>
          <PageHero title={"Location"} />
        </div>
        <div className="max-w-5xl mx-auto py-10 px-4 md:px-0">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
            Sattva Sanio Location
          </h1>
          <DownloadActions/>
          <div className="space-y-6 text-gray-800 mt-5">
  <p>
    The <a href="https://www.sattvasanio.in/location"><b>Sattva Sanio Location</b></a> is strategically positioned along 
    <b> Old Madras Road near Budigere Cross in East Bangalore</b>, a rapidly evolving residential and investment zone. 
    This prime address ensures excellent connectivity to key employment centers, major transport routes, educational institutions, 
    healthcare facilities, and lifestyle destinations across the city.
  </p>

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
        title="Sattva Sanio Location Map – East Bangalore"
        aria-label="Map showing Sattva Sanio location near Budigere Cross, Bangalore"
      />
    </div>

    <Link
      href="https://maps.app.goo.gl/mgHt22xpDC33Br8B9"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Explore Sattva Sanio location on Google Maps"
      className="block w-full bg-primary hover:bg-blue-800 text-white text-center font-semibold text-lg py-4 transition-colors duration-200"
    >
      Explore Exact Location
    </Link>
  </div>

  <p>
    Budigere Cross has quickly gained attention as a preferred residential destination due to its proximity to major areas like 
    <b> Whitefield, KR Puram, and <a href="https://en.wikipedia.org/wiki/Kempegowda_International_Airport" rel="nofollow">Kempegowda International Airport</a></b>. 
    Improved infrastructure and seamless road connectivity have significantly enhanced accessibility, making it an attractive choice for homebuyers and investors.
  </p>

  <p>
    The surrounding region features a blend of modern developments and peaceful residential pockets, offering a balanced lifestyle 
    for families and working professionals.
  </p>

  <h2 className="text-2xl font-semibold mt-10">
    Connectivity & Accessibility
  </h2>

  <p>
    The <b><a href="https://www.sattvasanio.in/">Sattva Sanio</a> address in East Bangalore</b> provides smooth access to major parts of the city via key arterial roads. 
    The presence of NH-75 (Old Madras Road) and other connecting routes ensures convenient daily travel.
  </p>

  <ul className="list-disc pl-6 space-y-2">
    <li>Direct connectivity to Old Madras Road (NH-75)</li>
    <li>Easy access to Whitefield–Hoskote Road</li>
    <li>Quick reach to KR Puram and Outer Ring Road</li>
    <li>Well-connected routes to Kempegowda International Airport</li>
  </ul>

  <p>
    These well-developed road networks reduce travel time and improve overall connectivity for residents.
  </p>

  <h3 className="text-2xl font-semibold mt-10">
    Close to Major IT Corridors
  </h3>

  <p>
    One of the strongest advantages of this location is its proximity to prominent IT hubs in East Bangalore. 
    Professionals working in nearby tech parks can enjoy shorter commute times and better work-life balance.
  </p>

  <ul className="list-disc pl-6 space-y-2">
    <li>Whitefield IT Corridor</li>
    <li>International Tech Park Bangalore (ITPL)</li>
    <li>KR Puram business zone</li>
    <li>Marathahalli tech hub</li>
  </ul>

  <p>
    Whitefield is approximately <b>10–12 km away</b>, making it easily accessible for daily commuters.
  </p>

  <h3 className="text-2xl font-semibold mt-10">
    Airport Connectivity
  </h3>

  <p>
    The project is well-connected to <b>Kempegowda International Airport</b>, located around <b>27–30 km</b> away. 
    Travel time typically ranges between <b>40 to 50 minutes</b> depending on traffic conditions, making it convenient for frequent travelers.
  </p>

  <h3 className="text-2xl font-semibold mt-10">
    Public Transport & Metro Access
  </h3>

  <p>
    Residents benefit from strong public transport connectivity, including metro, rail, and bus services that link the area to major city zones.
  </p>

  <ul className="list-disc pl-6 space-y-2">
    <li>KR Puram Railway Station – approx. 10 km</li>
    <li>Baiyappanahalli Metro Station – approx. 16 km</li>
    <li>Whitefield Metro Station (Purple Line)</li>
    <li>BMTC bus services across Bangalore</li>
  </ul>

  <p>
    The expansion of the metro network has further enhanced connectivity to central and eastern Bangalore.
  </p>

  <h3 className="text-2xl font-semibold mt-10">
    Nearby Schools & Colleges
  </h3>

  <p>
    Families will find several reputed educational institutions located within easy reach of the project.
  </p>

  <ul className="list-disc pl-6 space-y-2">
    <li>New Baldwin International School</li>
    <li>Delhi Public School, Whitefield</li>
    <li>Chrysalis High</li>
    <li>Vibgyor High School</li>
    <li>Garden City University</li>
  </ul>

  <h3 className="text-2xl font-semibold mt-10">
    Healthcare Facilities Nearby
  </h3>

  <p>
    Access to quality healthcare is another advantage of this location, with several reputed hospitals nearby.
  </p>

  <ul className="list-disc pl-6 space-y-2">
    <li>Manipal Hospital, Whitefield</li>
    <li>Narayana Multispeciality Hospital</li>
    <li>Sathya Sai Super Speciality Hospital</li>
    <li>East Point Hospital</li>
  </ul>

  <h3 className="text-2xl font-semibold mt-10">
    Shopping & Lifestyle Destinations
  </h3>

  <p>
    Residents can enjoy access to premium malls and entertainment hubs located within a short drive.
  </p>

  <ul className="list-disc pl-6 space-y-2">
    <li>Orion Uptown Mall</li>
    <li>Forum Shantiniketan Mall</li>
    <li>Phoenix Marketcity</li>
    <li>VR Bengaluru Mall</li>
  </ul>

  <h2 className="text-2xl font-semibold mt-10">
    Location Advantages at a Glance
  </h2>

  <div className="flex justify-center items-center">
    <img 
      src="/images/sattva-sanio-address.jpeg"
      loading="lazy" 
      alt="Sattva Sanio Address Location Map" 
    />
  </div>

  <ul className="list-disc pl-6 space-y-2">
    <li>Prime location near Budigere Cross, East Bangalore</li>
    <li>Strong connectivity via NH-75 (Old Madras Road)</li>
    <li>Close to major IT hubs like Whitefield</li>
    <li>Easy access to KR Puram and Outer Ring Road</li>
    <li>Convenient travel to the international airport</li>
    <li>Surrounded by schools, hospitals, and malls</li>
  </ul>

  <p>
    With rapid infrastructure growth and increasing demand, Budigere Cross is emerging as a promising real estate destination. 
    The location of Sattva Sanio offers both immediate convenience and long-term investment potential in East Bangalore.
  </p>
</div>
        </div>
      </main>
      
    </>
  );
}

export default LocationPage;
