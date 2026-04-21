import AccordionItem from "./AccordionItem";

const PRIMARY = "#ce3125";

const projects = [
  {
    id: 1,
    number: "01",
    name: "Sattva Vasanta Skye",
    tag: "Pre-Launch 2025",
    location: "Bellary Road, North Bangalore",
    type: "Residential Apartments",
    units: "1,077 Units",
    area: "16 Acres",
    config: "Studio, 1, 2, 3 & 4 BHK",
    size: "447 – 2,324 sq.ft.",
    price: "₹78 Lakhs* Onwards",
    possession: "May 2026",
    rera: "ACK/KA/RERA/1250/303/PR/020525/009184",
    towers: "11 Towers (G+13 & G+14)",
    highlights: [
      "Set against stunning Nandi Hills backdrop",
      "16-acre integrated township with 80%+ green cover",
      "Vaastu-compliant units across all configurations",
      "3 majestic towers with open skyline views",
      "Near Kempegowda International Airport",
    ],
    amenities: ["Swimming Pool", "Clubhouse", "Gymnasium", "Jogging Track", "Children's Play Area", "Landscaped Gardens"],
  },
  {
    id: 2,
    number: "02",
    name: "Sattva City Doddajala",
    tag: "New Launch",
    location: "Doddajala (Chikkajala), North Bangalore",
    type: "Luxury Township",
    units: "3,460 Units",
    area: "53 Acres",
    config: "Studio, 1, 2, 2.5, 3, 3.5 & 4 BHK",
    size: "776 – 1,800 sq.ft.",
    price: "₹55 Lakhs* Onwards",
    possession: "December 2029",
    rera: "RERA Approved",
    towers: "13 Towers (2B + G + 21 Floors)",
    highlights: [
      "53-acre mega township — one of the largest in North Bangalore",
      "80%+ open green spaces across the entire project",
      "50,000 sq.ft. two-level luxury clubhouse",
      "Near Asia's upcoming grand retail mall",
      "No shared walls between units — maximum privacy",
    ],
    amenities: ["50,000 sq.ft. Clubhouse", "Multiple Pools", "Sports Courts", "Amphitheatre", "Retail Zone", "Co-working Spaces"],
  },
  {
    id: 3,
    number: "03",
    name: "Sattva Lumina",
    tag: "New Launch",
    location: "Rajanukunte, Yelahanka–Doddaballapura Road",
    type: "Premium High-Rise Apartments",
    units: "1,900 Flats",
    area: "13.88 Acres",
    config: "Studio, 1, 2 & 3 BHK",
    size: "420 – 1,780 sq.ft.",
    price: "On Request",
    possession: "Under Construction",
    rera: "RERA Registered",
    towers: "8 High-Rise Towers (G+29)",
    highlights: [
      "Breathtaking Nagadasanahalli Lake views from all towers",
      "25,000 sq.ft. on-site mall with retail, cafés & restaurants",
      "8 towers offering panoramic skyline vistas",
      "Serene surroundings away from city congestion",
      "Premium Studio to 3 BHK configurations",
    ],
    amenities: ["Lake-View Amenity Deck", "Mall & Retail", "Infinity Pool", "Clubhouse", "Gym", "Kids' Zone"],
  },
  {
    id: 4,
    number: "04",
    name: "Sattva Songbird",
    tag: "Pre-Launch",
    location: "Cheemasandra, Budigere Road, East Bangalore",
    type: "Apartments & Triplex Villas",
    units: "1,400 Flats",
    area: "12 Acres",
    config: "Studio, 1, 2, 3 BHK + 4 BHK Triplex Villas",
    size: "468 – 3,543 sq.ft.",
    price: "₹48.5 Lakhs* Onwards",
    possession: "Under Construction",
    rera: "RERA Registered",
    towers: "4 Towers (G+29/30 Floors)",
    highlights: [
      "Seamless connectivity via NH-75",
      "Just 20 km from Kempegowda International Airport",
      "Exclusive 4 BHK triplex villa options available",
      "Lush green surroundings and open landscape",
      "Close to Whitefield & major IT corridors",
    ],
    amenities: ["Resort-Style Clubhouse", "Swimming Pool", "Sky Lounge", "Jogging Track", "Sports Zone", "EV Charging"],
  },
  {
    id: 5,
    number: "05",
    name: "Sattva Bhumi Plots",
    tag: "Open for Booking",
    location: "Vijayapura, Devanahalli, North Bangalore",
    type: "Premium Gated Plotted Development",
    units: "356 Plots",
    area: "20 Acres",
    config: "Residential Plots",
    size: "600 – 1,800 sq.ft.",
    price: "₹37.6 Lakhs* Onwards",
    possession: "Ready to Build",
    rera: "PRM/KA/RERA/1250/303/PR/211024/007160",
    towers: "Gated Community (State Highway 96)",
    highlights: [
      "20 min from Kempegowda International Airport",
      "5 min from Vijayapura Town, 20 min from Nandi Hills",
      "15,000 sq.ft. community clubhouse included",
      "Wide internal roads & underground utilities",
      "Near Boeing, Wipro & KIADB Aerospace SEZ",
    ],
    amenities: ["15,000 sq.ft. Clubhouse", "Swimming Pool", "Wide Internal Roads", "Landscaped Parks", "24/7 Security", "Underground Utilities"],
  },
];

export default function SattvaProjects() {
  return (
    <section className="bg-white w-full">
      <div className="max-w-5xl mx-auto pb-16">

        {/* Desktop header */}
        <div
          className="hidden md:grid items-center gap-4 px-5 py-4 rounded-t-lg"
          style={{
            gridTemplateColumns: "2.5rem 1fr 1fr 10rem 2.5rem",
            backgroundColor: PRIMARY,
          }}
        >
          <div />
          <span className="text-xs font-bold tracking-widest uppercase text-white">Project Name</span>
          <span className="text-xs font-bold tracking-widest uppercase text-white">Location</span>
          <span className="text-xs font-bold tracking-widest uppercase text-white">Starting Price</span>
          <div />
        </div>

        {/* Mobile header */}
        <div
          className="md:hidden px-4 py-3 rounded-t-lg"
          style={{ backgroundColor: PRIMARY }}
        >
          <span className="text-xs font-bold tracking-widest uppercase text-white">Latest Projects</span>
        </div>

        {/* Accordion list — each item is a Client Component island */}
        <div className="border border-t-0 border-gray-200 rounded-b-lg overflow-hidden divide-y divide-gray-100">
          {projects.map((p) => (
            <AccordionItem key={p.id} p={p} />
          ))}
        </div>

      </div>
    </section>
  );
}