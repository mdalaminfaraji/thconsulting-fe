import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { FaPhone } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";

type ServiceFeature = {
  text: string;
};

type Service = {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: ServiceFeature[];
};

const servicesData: Service[] = [
  {
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    title: "Posredovanje pri zapošljavanju",
    description: "Upravljamo cijelom postupkom zaposlenja strane radnika.",
    features: [
      { text: "Vodimo postupak uzimanja radnika i administracije" },
      {
        text: "Široki raspon kandidata za različite djelatnosti i industrije",
      },
      { text: "Zaposlenje kvalificiranih ljudi" },
    ],
  },
  {
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    title: "Ustupanje radnika",
    description: "Upravljamo cijelom postupkom zaposlenja strane radnika.",
    features: [
      { text: "Flexibilnost i brzina s pre-odobrenim radnicima" },
      {
        text: "Jednostavan postupak zaposlenja bez komplikovane administracije",
      },
      { text: "Široki raspon kandidata za različite djelatnosti i industrije" },
    ],
  },
  {
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
    title: "Upravljanje zaposlenjem",
    description: "Upravljamo cijelom postupkom zaposlenja strane radnika.",
    features: [
      { text: "Upravljanje zaposlenjem strane radnika" },
      { text: "Uklanjanje brzine i brzine" },
      { text: "Uklanjanje brzine i brzine" },
    ],
  },
];

const ServiceCard: React.FC<Service> = ({
  icon,
  title,
  description,
  features,
}) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow relative">
      <div className="mb-6">
        <div className="w-12 h-12 bg-[#023a51] rounded-full flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-[#023a51] mb-4">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
      </div>
      <ul className="space-y-3 mb-10">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg
              className="w-5 h-5 text-[#023a51] mr-2 mt-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>{feature.text}</span>
          </li>
        ))}
      </ul>
      <Button
        variant="outline"
        className=" border-[#023a51] text-white bg-[#023a51] hover:bg-red-600 hover:text-white absolute bottom-4 left-1/2 -translate-x-1/2 px-10 py-2"
      >
        Learn more
      </Button>
    </div>
  );
};

export default function ServicesPageEnglish() {
  return (
    <div className="min-h-screen pt-4">
      {/* services content */}
      <section>
        <div
          style={{
            backgroundImage: "url('/images/contact-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="h-[400px] w-full flex items-center justify-center"
        >
          <div className="text-start max-w-[500px] h-[400px] mt-8 px-6">
            <p className="text-4xl text-[#023a51] my-4">Usluge</p>
            <p className="text-5xl text-[#023a51] font-bold my-4">
              Sve usluge koje trebate na jednom mjestu.
            </p>
            <p className="text-xl text-foreground-muted">
              Povjerite svoje poslovanje našim stručnjacima te uz njihovu pomoć
              procijenite kako na najbolji način organizirati rad stranih
              radnika u vašoj firmi
            </p>
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </section>
      <section>
        <div
          style={{
            backgroundImage: "url('/images/maskath.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="h-[450px] w-full flex items-center justify-center"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 h-full max-w-6xl mx-auto px-6 py-12">
            <div className="relative w-[280px] h-[280px] md:w-[300px] md:h-[300px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/Velika-stavka-pexels-vlad-chetan.jpeg"
                alt="Quality Staff Services"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="max-w-xl text-center md:text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#023a51] mb-6">
                Jednostavan i brz put do kvalitetnog kadra.
              </h2>
              <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg">
                Upoznajte proces i povjerite nam zadatak potrage, selekcije i
                novačenja radnika.
              </p>
              <Button
                variant="outline"
                className="border-2 border-[#023a51] text-white bg-[#023a51] hover:bg-red-600 hover:border-red-600 hover:text-white transition-colors duration-300 text-lg px-8 py-3 rounded-lg shadow-md"
              >
                Pitanja i odgovori
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="my-12 py-16 px-4 md:px-8 lg:px-12 bg-[#f9fafb]">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#023a51] text-center mb-16">
            Pronalazimo idealan kadar za vašu djelatnost.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Agriculture */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center">
                  <MdKeyboardArrowRight className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-semibold text-[#023a51]">
                  Poljoprivredne djelatnosti
                </h3>
              </div>
              <p className="text-[#59667d] text-lg">
                Za rad u poljoprivredi, ratarstvu i stočarstvu OPG-ovima i
                gospodarstvenicima osiguravamo pouzdane radnike.
              </p>
            </div>

            {/* Wood industry */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center">
                  <MdKeyboardArrowRight className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-semibold text-[#023a51]">
                  Drvna industrija
                </h3>
              </div>
              <p className="text-[#59667d] text-lg">
                Uz našu pomoć mnogi prerađivački i proizvodni pogoni drvne
                industrije pronašli su pouzdane radnike.
              </p>
            </div>

            {/* Construction and industry */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center">
                  <MdKeyboardArrowRight className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-semibold text-[#023a51]">
                  Građevina i industrija
                </h3>
              </div>
              <p className="text-[#59667d] text-lg">
                Pronalazimo armirače, tesare, fasadere, zidare, hidroizolatere,
                keramičare, bravare, cjevare i vozače svih kategorija.
              </p>
            </div>

            {/* 
Tourism sector*/}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center">
                  <MdKeyboardArrowRight className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-semibold text-[#023a51]">
                  Brodogradnja
                </h3>
              </div>
              <p className="text-[#59667d] text-lg">
                Pronalazimo zavarivače i motivirane radnike u brodogradnji
                kvalificirane za zadatke koji su im povjereni.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center">
                  <MdKeyboardArrowRight className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-semibold text-[#023a51]">
                  Turistički sektor
                </h3>
              </div>
              <p className="text-[#59667d] text-lg">
                Regrutiramo kvalificirane radnike za bilo koju poziciju u
                turizmu i ugostiteljstvu.
              </p>
            </div>

            {/* 
Production */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center">
                  <MdKeyboardArrowRight className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-semibold text-[#023a51]">
                  Proizvodni sektor
                </h3>
              </div>
              <p className="text-[#59667d] text-lg">
                Pronalazimo radnike u prehrambenoj i prerađivačkoj industriji iz
                svih zemalja s kojima surađujemo.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div
          style={{
            backgroundImage: "url('/images/maskath.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="h-[450px] w-full flex items-center justify-center"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 h-full max-w-6xl mx-auto px-6 py-12">
            <div className="max-w-xl text-center md:text-left">
              <p className="text-lg md:text-xl text-[#023a51] mb-4 max-w-lg">
                References
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#023a51] mb-6">
                Pročitajte iskustva naših klijenata.
              </h2>

              <p className="text-lg md:text-xl text-[#59667d] mb-8 max-w-lg">
                Upoznajte samo neke od kompanija koje su nam povjerile svoje
                povjerenje.
              </p>
              <Button
                variant="outline"
                className="border-2 border-[#023a51] text-white bg-[#023a51] hover:bg-red-600 hover:border-red-600 hover:text-white transition-colors duration-300 text-lg px-8 py-3 rounded-lg shadow-md"
              >
                Saznajte više
              </Button>
            </div>
            <div className="relative w-[280px] h-[280px] md:w-[300px] md:h-[300px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/Velika-stavka-pexels-ivan.jpeg"
                alt="Quality Staff Services"
                fill
                className="object-cover"
                priority
              />
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
