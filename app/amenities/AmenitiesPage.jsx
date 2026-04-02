"use client";
import LeadModal from "@/components/LeadModal";
import PageHero from "@/components/PageHero";
import { useState } from "react";
import { FaDownload } from "react-icons/fa";
import { IoPricetagsOutline } from "react-icons/io5";

function AmenitiesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modelHeading, SetModelHeading] = useState("");

  return (
    <>
      <main className="w-full bg-white">
        <div>
          <PageHero title={"Amenities"} />
        </div>
        <div className="max-w-5xl mx-auto py-10 px-4 md:px-0">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
            Sattva Sanio Amenities
          </h1>
          <div className="flex justify-center items-center gap-6 mt-3">
            <button
              onClick={() => {
                SetModelHeading("Download Broucher");
                setIsModalOpen(true);
              }}
              className="border border-blue-900 px-5 py-2 text-lg rounded cursor-pointer flex justify-center items-center gap-2 text-primary font-medium"
            >
              <FaDownload /> Broucher
            </button>
            <button
              onClick={() => {
                SetModelHeading("Download Cost Sheet");
                setIsModalOpen(true);
              }}
              className="border border-blue-900 px-5 py-2 text-lg rounded cursor-pointer flex justify-center items-center gap-2 text-primary font-medium"
            >
              <IoPricetagsOutline /> Cost Sheet
            </button>
          </div>
          <div className="mt-5 space-y-6 text-gray-800 leading-relaxed">

  <p>
    The <a href="https://www.sattvasanio.in/amenities" className="font-semibold text-blue-600 hover:underline">Sattva Sanio Amenities</a> are thoughtfully curated to deliver a well-balanced lifestyle that blends comfort, recreation, and wellness. Located at <b>Budigere Cross on Old Madras Road (NH-75), East Bangalore</b>, this premium residential development spans across <b>over 10 acres</b> and offers a modern living experience for families and professionals.
  </p>

  <p>
    The project features <b>600+ well-designed apartments</b> spread across <b>4 iconic towers with G + 35 floors</b>. Every amenity is strategically placed within the community to ensure convenience, accessibility, and a seamless lifestyle for residents of all age groups.
  </p>

  <p>
    Designed as a self-sufficient residential enclave, <a href="https://www.sattvasanio.in/" className="font-semibold text-blue-600 hover:underline">Sattva Sanio East Bangalore</a> offers a mix of leisure, fitness, and social spaces that enhance everyday living while promoting community engagement.
  </p>

  <h2 className="text-2xl font-semibold mt-10">
    Premium Lifestyle Amenities at Sattva Sanio
  </h2>

  <div className="flex justify-center">
    <img 
      src="/images/amenities.jpeg"
      loading="lazy" 
      alt="Sattva Sanio Lifestyle Amenities in East Bangalore"
      className="rounded-xl shadow-md"
    />
  </div>

  <p>
    The project offers a wide range of lifestyle features that allow residents to relax, entertain, and connect within the comfort of their gated community.
  </p>

  <ul className="list-disc pl-6 space-y-2">
    <li>Grand clubhouse with modern interiors</li>
    <li>Swimming pool with leisure deck</li>
    <li>Multipurpose party hall for events</li>
    <li>Indoor games and recreation lounge</li>
    <li>Amphitheatre and landscaped event lawns</li>
    <li>Relaxation zones and seating areas</li>
  </ul>

  <h3 className="text-2xl font-semibold mt-10">
    Fitness & Wellness Facilities
  </h3>

  <div className="flex justify-center">
    <img 
      src="/images/fitness-and-wellness-amenities.jpeg"
      loading="lazy" 
      alt="Sattva Sanio Fitness and Wellness Amenities"
      className="rounded-xl shadow-md"
    />
  </div>

  <p>
    Health and wellness are key highlights of the <a href="https://www.sattvasanio.in/master-plan" className="font-semibold text-blue-600 hover:underline">Sattva Sanio master plan</a>. The project includes dedicated spaces for maintaining an active and balanced lifestyle.
  </p>

  <ul className="list-disc pl-6 space-y-2">
    <li>Fully equipped modern gymnasium</li>
    <li>Yoga and meditation zones</li>
    <li>Jogging and cycling tracks</li>
    <li>Outdoor fitness stations</li>
    <li>Aerobics and wellness studio</li>
  </ul>

  <h3 className="text-2xl font-semibold mt-10">
    Sports & Outdoor Activities
  </h3>

  <p>
    Residents can enjoy a variety of sports and recreational facilities within <b>Sattva Sanio</b>, making it an ideal choice for active lifestyles.
  </p>

  <ul className="list-disc pl-6 space-y-2">
    <li>Multi-purpose sports courts</li>
    <li>Badminton and basketball courts</li>
    <li>Indoor games and table tennis</li>
    <li>Cricket practice net</li>
    <li>Skating rink</li>
  </ul>

  <h3 className="text-2xl font-semibold mt-10">
    Kids & Family-Friendly Spaces
  </h3>

  <p>
    The community is designed with families in mind, offering safe and engaging zones for children to play and interact.
  </p>

  <ul className="list-disc pl-6 space-y-2">
    <li>Children’s play area with modern equipment</li>
    <li>Dedicated play lawn and sand pit</li>
    <li>Indoor gaming and activity room</li>
    <li>Safe and secure environment for kids</li>
  </ul>

  <h3 className="text-2xl font-semibold mt-10">
    Green Spaces & Relaxation Zones
  </h3>

  <p>
    One of the standout features of <b>Sattva Sanio</b> is its lush green environment that promotes peaceful and refreshing living.
  </p>

  <ul className="list-disc pl-6 space-y-2">
    <li>Landscaped gardens with seating areas</li>
    <li>Tree-lined walking pathways</li>
    <li>Senior citizen relaxation zones</li>
    <li>Meditation lawns and open spaces</li>
  </ul>

  <h3 className="text-2xl font-semibold mt-10">
    Clubhouse & Social Infrastructure
  </h3>

  <p>
    The clubhouse acts as the heart of the community, offering spaces for entertainment, relaxation, and social interaction.
  </p>

  <ul className="list-disc pl-6 space-y-2">
    <li>Indoor games and lounge areas</li>
    <li>Multipurpose hall for gatherings</li>
    <li>Reading and co-working spaces</li>
    <li>Café and social zones</li>
  </ul>

  <h3 className="text-2xl font-semibold mt-10">
    Security & Safety Features
  </h3>

  <p>
    The project ensures a secure living environment with advanced safety systems and round-the-clock monitoring.
  </p>

  <ul className="list-disc pl-6 space-y-2">
    <li>24/7 gated security</li>
    <li>CCTV surveillance across common areas</li>
    <li>Intercom facility</li>
    <li>Fire safety systems</li>
    <li>Well-lit internal roads</li>
  </ul>

  <h3 className="text-2xl font-semibold mt-10">
    Infrastructure & Convenience Features
  </h3>

  <p>
    In addition to lifestyle amenities, the project also offers essential infrastructure that ensures a smooth and sustainable living experience.
  </p>

  <ul className="list-disc pl-6 space-y-2">
    <li>Basement and visitor parking</li>
    <li>Wide internal roads</li>
    <li>Power backup for common areas</li>
    <li>Rainwater harvesting</li>
    <li>Sewage treatment plant</li>
    <li>Efficient waste management system</li>
  </ul>

  <h3 className="text-2xl font-semibold mt-10">
    Why Choose Sattva Sanio Amenities?
  </h3>

  <p>
    The amenities at <b>Sattva Sanio East Bangalore</b> are designed to offer a complete lifestyle within a single community. From leisure and wellness to security and infrastructure, every aspect is planned to provide residents with a comfortable and modern living experience.
  </p>

  <ul className="list-disc pl-6 space-y-2">
    <li>Modern clubhouse and lifestyle features</li>
    <li>Dedicated wellness and fitness zones</li>
    <li>Sports and recreation facilities</li>
    <li>Green landscapes and open spaces</li>
    <li>High-end security systems</li>
    <li>Strong community living environment</li>
  </ul>

  <p>
    Strategically located on <b>Old Madras Road near Budigere Cross</b>, <a href="https://www.sattvasanio.in/amenities" className="font-semibold text-blue-600 hover:underline">Sattva Sanio</a> offers a perfect combination of luxury, connectivity, and modern urban living in one of Bangalore’s fastest-growing residential corridors.
  </p>

</div>
        </div>
      </main>
      <LeadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        modelHeading={modelHeading}
      />
    </>
  );
}

export default AmenitiesPage;
