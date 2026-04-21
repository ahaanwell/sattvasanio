

import { FaMapMarkerAlt } from "react-icons/fa";
import LeadForm from "./LeadForm";
import HeroSliderClient from "./HeroSliderClient";
import SmallHeroClient from "./SmallHeroClient";
import BHeroClient from "./BHeroClient";


export default function HeroSection() {
  

  
  return (
    <>
    
      <div className="lg:hidden flex flex-col bg-gray-100 min-h-screen">

        <div className="relative w-full h-[260px] overflow-hidden">
          <HeroSliderClient className="absolute inset-0 w-full h-full" />
        </div>

        <div className="bg-primary text-white text-center font-semibold py-2 text-sm tracking-wider">
          Booking Open
        </div>

        <div className="bg-white px-5 pt-7 pb-5 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-1">Sattva Sanio</h2>
          <p className="text-gray-800 text-xl mb-2 font-semiblod">By Sattva Group</p>
          <div className="flex items-center justify-center gap-1 font-medium text-gray-700 text-lg mb-6">
            <FaMapMarkerAlt />
            <span>Old Madras Main Road, Budigere Cross</span>
          </div>

          <button className="w-full bg-primary text-white font-bold py-3 rounded-lg mb-3 tracking-widest text-sm transition-colors">
            PRE LAUNCH
          </button>

          <button className="w-full bg-primary text-white font-bold py-3 rounded-lg mb-7 tracking-widest text-sm transition-colors">
            2, 3 & 4 BHK Apartment
          </button>

          <div className="flex gap-3 mb-6">
            <div className="flex-1 border border-gray-200 rounded-xl py-3 px-2 text-center">
              <p className="text-lg text-gray-700 mb-1">Land Area</p>
              <p className="text-2xl font-extrabold text-gray-800">10+ Acres</p>
            </div>
            <div className="flex-1 border border-gray-200 rounded-xl py-3 px-2 text-center">
              <p className="text-lg text-gray-700 mb-1">Total Units</p>
              <p className="text-2xl font-extrabold text-gray-800">600+</p>
            </div>
          </div>

          <p className="text-2xl font-extrabold text-gray-900 mb-5">₹ 1.2 Cr. Onwards</p>

          <SmallHeroClient/>

          <p className="text-[15px] text-gray-600 font-medium mt-2">
            <span className="font-semibold text-gray-700">RERA No:</span>{" "}
            Comming Soon
          </p>
        </div>
      </div>
      <section className="hidden lg:flex relative w-full h-[90vh] items-center overflow-hidden">

        <HeroSliderClient className="absolute inset-0 w-full h-full" />

        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 w-full max-w-5xl mx-auto py-12 flex flex-row items-center justify-between gap-10">

          <div className="flex-1 text-white">
            <div className="inline-block bg-black/20 px-6 py-3 rounded-md mb-5">
              <h2 className="text-2xl xl:text-3xl font-extrabold tracking-wide">
                Sattva Sanio
              </h2>
            </div>

            <div className="flex items-center gap-2 text-white text-lg mb-6 ml-1">
              <FaMapMarkerAlt className="text-xl" />
              <span>Old Madras Main Road, Budigere Cross</span>
            </div>

            <div className="flex gap-4 mb-6">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-5 py-3 text-center min-w-[120px]">
                <p className="text-sm text-white/70 mb-1">Land Area</p>
                <p className="text-xl font-extrabold">10+ Acres</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-5 py-3 text-center min-w-[120px]">
                <p className="text-sm text-white/70 mb-1">Total Units</p>
                <p className="text-xl font-extrabold">600+</p>
              </div>
            </div>

            <div className="mb-2">
              <span className="text-2xl xl:text-3xl font-extrabold bg-black/20 px-4 py-2 rounded-md inline-block">
                ₹ 1.2 Cr. Onwards
              </span>
            </div>
            <p className="text-xl font-bold mt-3 mb-7 ml-1">2, 3 & 4 BHK Apartment</p>

             <BHeroClient/>

            <p className="text-sm text-white/70">
              <span className="font-semibold text-white/90">RERA No:</span>{" "}
              Comming Soon
            </p>
          </div>

          <LeadForm/>
        </div>
      </section>

    </>
  );
}