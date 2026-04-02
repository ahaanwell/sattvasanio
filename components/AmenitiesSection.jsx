/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

const amenitiesData = [
  { id: 1,  name: "Gymnasium",           image: "./images/gym.svg",    alt: "Gymnasium" },
  { id: 2,  name: "Swimming Pool",       image: "./images/swm.svg",    alt: "Swimming Pool" },
  { id: 3,  name: "Yoga Pavilion",       image: "./images/yoga.svg",   alt: "Yoga Pavilion" },
  { id: 4,  name: "Video Door Phone",    image: "./images/videos.svg", alt: "Video Door Phone" },
  { id: 5,  name: "Kids Activity Zone",  image: "./images/kids.svg",   alt: "Kids Activity Zone" },
  { id: 6,  name: "Mini Theater",        image: "./images/mine.svg",   alt: "Mini Theater" },
  { id: 7,  name: "Aerobics Room",       image: "./images/tennis.svg", alt: "Aerobics Room" },
  { id: 8,  name: "Indoor Games Room",   image: "./images/chess.svg",  alt: "Indoor Games Room" },
  { id: 9,  name: "Club House",          image: "./images/disco-ball.svg", alt: "Club House" },
  { id: 10, name: "Dance/Music",         image: "./images/dance.svg",  alt: "Dance/Music" },
  { id: 11, name: "24/7 CCTV Monitoring",image: "./images/cctv.svg",   alt: "24/7 CCTV Monitoring" },
  { id: 12, name: "Jogging Track",       image: "./images/jog.svg",    alt: "Jogging Track" },
];

export default function AmenitiesSection() {
  return (
    <section
      id="amenities"
      aria-labelledby="amenities-heading"
      className="w-full bg-white pt-14 px-4 md:px-0"
    >
      <div className="max-w-5xl mx-auto">
        <h2
          id="amenities-heading"
          className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-2"
        >
          Amenities at Sattva Sanio
        </h2>

        <div className="w-full h-px bg-gray-200 mb-5" />

      <div className="space-y-10 text-gray-800 mb-5">

  <div>
    <p className="mb-4">
      Sattva Sanio offers a thoughtfully curated range of amenities designed to elevate everyday living with comfort, recreation, and convenience.
    </p>

    <h3 className="text-xl font-semibold mb-3">Premium Lifestyle Amenities</h3>

    <p className="mb-4">
      The project features a wide selection of modern lifestyle facilities that create opportunities for relaxation, social interaction, and leisure within the community.
    </p>

    <ul className="list-disc pl-6 space-y-2">
      <li>Elegant clubhouse with modern interiors</li>
      <li>Resort-style swimming pool</li>
      <li>Fully equipped fitness center</li>
      <li>Dedicated yoga and meditation zones</li>
      <li>Indoor games and recreation room</li>
      <li>Multipurpose hall for events and gatherings</li>
      <li>Quiet reading and co-working lounge</li>
      <li>Party and celebration space</li>
    </ul>

    <p className="mt-4">
      These amenities are designed to help residents unwind, socialize, and enjoy a balanced lifestyle without stepping out of the community.
    </p>
  </div>


  <div>
    <h3 className="text-xl font-semibold mb-3">Health & Fitness Facilities</h3>

    <p className="mb-4">
      For those who prioritize wellness, the project includes dedicated spaces that promote an active and healthy routine.
    </p>

    <ul className="list-disc pl-6 space-y-2">
      <li>Well-laid jogging and walking tracks</li>
      <li>Dedicated cycling pathways</li>
      <li>Outdoor sports courts</li>
      <li>Open-air fitness stations</li>
      <li>Exercise zones amidst greenery</li>
      <li>Peaceful meditation gardens</li>
    </ul>

    <p className="mt-4">
      These thoughtfully planned areas encourage residents to stay active while enjoying a refreshing outdoor environment.
    </p>
  </div>


  <div>
    <h3 className="text-xl font-semibold mb-3">Family & Kids-Friendly Spaces</h3>

    <p className="mb-4">
      The development also focuses on creating safe and engaging spaces for families and children to spend quality time together.
    </p>

    <ul className="list-disc pl-6 space-y-2">
      <li>Secure children's play area</li>
      <li>Interactive sand play zone</li>
      <li>Comfortable family seating areas</li>
      <li>Landscaped community lawns</li>
      <li>Dedicated kids' activity zones</li>
      <li>Open parks for outdoor fun</li>
    </ul>

    <p className="mt-4">
      These spaces are designed to provide a joyful and safe environment where children can play freely while families relax nearby.
    </p>
  </div>


  <div>
    <h3 className="text-xl font-semibold mb-3">Security & Essential Conveniences</h3>

    <p className="mb-4">
      Sattva Sanio ensures a secure and hassle-free lifestyle with modern safety systems and essential infrastructure.
    </p>

    <ul className="list-disc pl-6 space-y-2">
      <li>24/7 gated security with trained personnel</li>
      <li>Advanced CCTV monitoring across premises</li>
      <li>Intercom connectivity for residents</li>
      <li>Power backup for common areas and essential services</li>
      <li>Modern fire safety systems</li>
      <li>Ample resident and visitor parking</li>
      <li>High-speed elevators in all towers</li>
    </ul>

    <p className="mt-4">
      These features ensure residents experience both safety and convenience in their daily lives.
    </p>
  </div>

</div>


        <ul
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 lg:gap-4"
          aria-label="Sattav Aaranya"
        >
          {amenitiesData.map((item) => (
            <li
              key={item.id}
              className="flex flex-col items-center justify-between w-full h-[150px] lg:h-[180px] shadow-[0_4px_10px_rgba(0,0,0,0.15)] p-3 rounded-xl hover:border hover:border-gray-300 hover:shadow-md transition-all duration-300 bg-white"
            >
              <div className="w-full flex-1 flex items-center justify-center p-3 h-[60%]">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-[90%] object-contain"
                  loading="lazy"
                 
                />
              </div>

              <p className="text-center text-sm text-gray-700 font-light leading-tight pb-1">
                {item.name}
              </p>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}