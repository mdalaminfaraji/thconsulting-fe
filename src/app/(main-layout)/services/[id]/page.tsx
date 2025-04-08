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

export default function ServicesIdPage() {
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
      {/* Odaberite uslugu po mjeri vašeg poslovanja. */}
      <section className="my-12 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#023a51] mb-4">
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
                <h3 className="text-2xl font-semibold text-[#023a51]">
                  {service.title}
                </h3>
                <div className="space-y-4">
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
    </div>
  );
}
