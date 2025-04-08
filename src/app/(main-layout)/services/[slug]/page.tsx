import ContactSection from "@/components/home/ContactSection";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const servicesData = [
  {
    id: 1,
    title: "Posredovanje pri zapošljavanju",
    features: [
      "Vodimo cjelokupni proces zapošljavanja stranih radnika",
      "Proces dovođenja radnika i popratne administracije vodi agencija",
      "Daje širok raspon kandidata za velik broj djelatnosti i industrija",
      "Omogućuje zapošljavanje kvalificiranog i motiviranog kadra",
    ],
  },
  {
    id: 2,
    title: "Ustupanje radnika",
    features: [
      "Unajmite stranog radnika za određeno razdoblje",
      "Pruža fleksibilnost i brzinu jer radnici već posjeduju dozvole za boravak i rad",
      "Omogućuje jednostavan proces zaposlenja bez komplicirane administracije",
      "Daje širok raspon kandidata za velik broj djelatnosti i industrija",
    ],
  },
  {
    id: 3,
    title: "Administracija zapošljavanja",
    features: [
      "Ako ste već sami odabrali idealan kadar, pružamo vam potporu u administraciji zapošljavanja",
      "Proces administracije zapošljavanja vodi agencija",
      "Olakšava zapošljavanje stranih radnika",
      "Iskusni stručnjaci pružaju podršku u cjelokupnom procesu",
    ],
  },
];

interface Props {
  params: {
    slug: string;
  };
}

export default function ServicesIdPage({ params }: Props) {
  console.log(params.slug);
  return (
    <div className=" min-h-screen pt-5">
      <div
        style={{
          backgroundImage: "url('/images/contact-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="h-[500px] w-full flex items-center justify-center"
      >
        <div className="text-start max-w-[500px] h-[400px] mt-8">
          <p className="text-2xl  text-[#023a51] my-4">
            Posredovanje pri zapošljavanju
          </p>
          <p className="text-5xl  text-[#023a51] font-bold my-4">
            Vodimo cjelokupni proces zapošljavanja stranih radnika.
          </p>
          <p className="text-xl  text-foreground-muted">
            Povjerite nam zadatak potrage, selekcije i novačenja motiviranog i
            kvalitetnog kadra prema vašim potrebama i željama.
          </p>
        </div>
      </div>
      {/* We find the ideal staff for your business. */}
      <section className="mb-12 py-20 px-4 md:px-8 lg:px-12 bg-[#063556]">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Kad je posredovanje pri zapošljavanju najbolja opcija?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Agriculture */}
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="w-8 h-8 ">
                  <MdKeyboardArrowRight className="w-8 h-8 text-red-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">
                    Agencija za vas vodi cjelokupni proces zapošljavanja stranih
                    radnika
                  </h3>
                  <p className="text-[#e9ecf1] text-lg">
                    Povjerite nam zadatak potrage, selekcije i novačenja
                    motiviranog i kvalitetnog kadra prema vašim potrebama i
                    željama.
                  </p>
                </div>
              </div>
            </div>

            {/* Wood industry */}
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="w-8 h-8 ">
                  <MdKeyboardArrowRight className="w-8 h-8 text-red-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">
                    Proces dovođenja radnika i popratne administracije vodi
                    agencija
                  </h3>
                  <p className="text-[#e9ecf1] text-lg">
                    Rješavamo cjelokupnu administraciju i logistiku
                    zapošljavanja stranog radnika – od selekcije preko dozvola
                    za rad do transporta.
                  </p>
                </div>
              </div>
            </div>

            {/* Construction and industry */}
            <div className="space-y-4">
              <div className="flex  gap-3">
                <div className="w-8 h-8 ">
                  <MdKeyboardArrowRight className="w-8 h-8 text-red-600" />
                </div>
                <div>
                  <p className="text-2xl font-semibold text-white">
                    Dobivate širok raspon kandidata za velik broj djelatnosti i
                  </p>
                  <p className="text-[#e9ecf1] text-lg">
                    Detaljan proces selekcije u suradnji s našim lokalnim
                    partnerima osigurava pronalazak radnika koji odgovaraju
                    vašim potrebama i posjeduju potrebne kvalifikacije i
                    vještine.
                  </p>
                </div>
              </div>
            </div>

            {/* Shipbuilding */}
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="w-8 h-8">
                  <MdKeyboardArrowRight className="w-8 h-8 text-red-600" />
                </div>
                <div>
                  <p className="text-2xl font-semibold text-white">
                    Omogućuje zapošljavanje kvalificiranog i motiviranog kadra
                  </p>
                  <p className="text-[#e9ecf1] text-lg">
                    Pouzdano, brzo i odgovorno pronalazimo kadar koji je odgovor
                    na vaše izazove.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="my-12 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl max-w-[600px] mx-auto md:text-5xl font-bold text-[#023a51] mb-4">
              Odaberite uslugu po mjeri vašeg poslovanja.
            </h2>
            <p className="text-xl text-[#59667d]">
              Upoznajte prednosti naših usluga.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <div
                key={service.id}
                className="bg-white p-8 rounded-xl shadow-sm space-y-6"
              >
                <h3 className="text-2xl font-semibold text-[#023a51] mb-4">
                  {service.title}
                </h3>
                <div className="border-b border-[#023a51]" />
                <div className="space-y-8">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="mt-1">
                        <MdKeyboardArrowRight className="w-5 h-5 text-red-600" />
                      </div>
                      <p className="text-[#59667d]">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <ContactSection />
      </section>

      {/* Odaberite uslugu po mjeri vašeg poslovanja. */}
      <section className="my-12 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#023a51]">
              Istražite naše usluge.
            </h2>
            <button className="px-6 py-3 border border-[#023a51] text-[#023a51] rounded-xl hover:bg-[#023a51] hover:text-white transition-colors">
              Pogledajte više
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Ustupanje radnika */}
            <div className="bg-white p-8 rounded-xl shadow-sm space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-semibold text-[#023a51]">
                  Ustupanje radnika
                </h3>
                <button className="p-3 rounded-full border border-[#023a51] text-[#023a51] hover:bg-[#023a51] hover:text-white transition-colors">
                  <MdKeyboardArrowRight className="w-6 h-6" />
                </button>
              </div>
              <p className="text-[#59667d] text-lg">
                Unajmite radnika na određeno razdoblje i za pojedine projekte.
              </p>
              <button className="text-[#023a51] font-medium hover:text-red-600 transition-colors">
                Saznajte više
              </button>
            </div>

            {/* Administracija zapošljavanja */}
            <div className="bg-white p-8 rounded-xl shadow-sm space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-semibold text-[#023a51]">
                  Administracija zapošljavanja
                </h3>
                <button className="p-3 rounded-full border border-[#023a51] text-[#023a51] hover:bg-[#023a51] hover:text-white transition-colors">
                  <MdKeyboardArrowRight className="w-6 h-6" />
                </button>
              </div>
              <p className="text-[#59667d] text-lg">
                Ishodimo potpunu dokumentaciju za strane radnike.
              </p>
              <button className="text-[#023a51] font-medium hover:text-red-600 transition-colors">
                Saznajte više
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
