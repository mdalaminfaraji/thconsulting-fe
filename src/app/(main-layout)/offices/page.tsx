import { Button } from "@/components/ui/button";
import React from "react";
import { FaPhone } from "react-icons/fa";

export default function OfficesPage() {
  return (
    <div className="min-h-screen pt-5">
      {/* office content */}
      <section>
        <div className="max-w-[1000px] mx-auto py-16 px-6 md:px-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#023a51] mb-4 mt-10">
            Uredi.
          </h1>
          <p className="max-w-[450px] mx-auto text-lg md:text-xl text-[#59667d]">
            Mi smo stručnjaci za posredovanje pri zapošljavanju i privremeno
            zapošljavanje stranih radnika
          </p>
        </div>

        {/* Office locations */}
        <div className="max-w-[1000px] mx-auto px-6 md:px-12 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Virovitica Office */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-[300px] relative">
                <iframe
                  src="https://www.openstreetmap.org/export/embed.html?bbox=17.384033203125%2C45.831870201079755%2C17.386436462402344%2C45.83321557306435&amp;layer=mapnik"
                  className="w-full h-full border-0"
                  title="Virovitica Office Location"
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#023a51] mb-2">
                  Virovitica, Hrvatska - Glavni ured
                </h3>
                <p className="text-[#59667d] mb-1">Stjepana Radića 38</p>
                <p className="text-[#59667d] mb-4">33000 Virovitica</p>
                <button className="text-[#023a51] font-semibold hover:text-[#0056b3] transition-colors">
                  Contact us
                </button>
              </div>
            </div>

            {/* Dubai Office */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-[300px] relative">
                <iframe
                  src="https://www.openstreetmap.org/export/embed.html?bbox=55.2734375%2C25.0390625%2C55.3125%2C25.0781250&amp;layer=mapnik"
                  className="w-full h-full border-0"
                  title="Dubai Office Location"
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#023a51] mb-2">
                  Dubai, U.A.E. - Ured partnera
                </h3>
                <p className="text-[#59667d] mb-1">
                  The Meydan Hotel, Grandstand, 6th floor, Meydan Road, Nad Al
                </p>
                <p className="text-[#59667d] mb-4">Sheba, Dubai, U.A.E</p>
                <button className="text-[#023a51] font-semibold hover:text-[#0056b3] transition-colors">
                  Contact us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="my-12 ">
        <div className="max-w-[900px] mx-auto py-12 px-4 md:px-8 flex items-center justify-between bg-[#023a51] p-12 rounded-xl">
          <div className="space-y-4">
            <p className="text-5xl  text-[#fff]">Javite nam se za suradnju.</p>
            <p className="text-[#fff] text-2xl">
              Tražite li kvalitetne radnike i dugoročno rješenje, na pravom ste
              mjestu.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <Button
              className="border border-[#023a51] rounded-xl text-lg px-8 hover:bg-red-600 hover:text-white"
              variant="outline"
              size="lg"
            >
              Kontakt
            </Button>
            <Button
              className="border border-[#023a51] rounded-xl text-lg px-8 hover:bg-red-600 hover:text-white"
              variant="outline"
              size="lg"
            >
              <FaPhone /> 033 621 441
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
