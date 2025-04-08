import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import ImageShowcase from "@/components/aboutus/ImageShowCase";
import Image from "next/image";
export default function AboutUsPage() {
  return (
    <div className=" min-h-screen pt-4">
      <div
        style={{
          backgroundImage: "url('/images/contact-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="h-[400px] w-full flex items-center justify-center"
      >
        <div className="text-start max-w-[500px] h-[400px] mt-8">
          <p className="text-4xl  text-[#023a51] my-4">O nama</p>
          <p className="text-5xl  text-[#023a51] font-bold my-4">
            Agencija koja brine za vaše poslovanje.
          </p>
          <p className="text-xl  text-foreground-muted">
            Pouzdano i sigurno rješenje za svoje poslovanje prepustite našim
            stručnjacima
          </p>
        </div>
      </div>
      <section>
        <ImageShowcase />
      </section>

      <section className="max-w-[600px] mx-auto my-12 px-8 bg-[#fff]">
        <h1 className="text-3xl text-[#023a51] font-bold mb-4">
          Upoznajmo se.
        </h1>
        <p className="mb-4 text-[#59667d] text-lg">
          TH Consulting je agencija za posredovanje u zapošljavanju koja je
          registrirana i licencirana pri Ministarstvu rada Republike Hrvatske.
        </p>
        <p className="text-[#59667d] mb-4 text-lg">
          Kao vaš pouzdan partner pomoći ćemo vam pronaći odgovarajući kadar za
          stvaranje i unaprjeđenje produktivnosti i konkurentnosti na tržištu
          rada.
          <br />
          Surađujemo sa partnerima iz Nepala, Indije, Bangladeša, Uzbekistana,
          Srbije, Vijetnama i Kosova za regrutiranje najboljih kandidata prema
          vašim željama i potrebama.
        </p>
        <p className="text-[#59667d] my-4 text-lg">
          <span>
            <MdKeyboardArrowRight className="inline-block w-4 h-4 text-red-600" />
          </span>{" "}
          Mi smo stručnjaci za posredovanje pri zapošljavanju i privremenom
          zapošljavanju stranih radnika s višegodišnjim iskustvom.
        </p>
      </section>
      {/* our mission section */}
      <section className="py-16 px-4 md:px-8 lg:px-12 bg-[#f9fafb]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/images/pexels-khwanchai-phanthong.jpg"
                alt="Our Mission"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-[#023a51]">
                Naša misija
              </h2>
              <p className="text-[#023a51] text-lg">
                Misija naše agencije je kvalitetom usluga, profesionalnim
                pristupom i povoljnim cijenama pružiti klijentima što bolju
                uslugu i ugodno poslovno iskustvo.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <span className="mt-1">
                    <MdKeyboardArrowRight className="w-5 h-5 text-red-600" />
                  </span>
                  <p className="text-[#59667d]">
                    Želja nam je pomoći u unaprjeđenju konkurentnosti i
                    povećanju produktivnosti na tržištu
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-1">
                    <MdKeyboardArrowRight className="w-5 h-5 text-red-600" />
                  </span>
                  <p className="text-[#59667d]">
                    Naš najvažniji zadatak je identificirati i privući najbolje
                    kandidate koji odgovaraju potrebama i željama naših
                    klijenata
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-1">
                    <MdKeyboardArrowRight className="w-5 h-5 text-red-600" />
                  </span>
                  <p className="text-[#59667d]">
                    Želimo da naši klijenti, radnici i ostali zainteresirani u
                    TH Consultingu prepoznaju pouzdanog partnera, kojemu je cilj
                    ne samo zadovoljiti, već i nadići vaša očekivanja
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="my-12 py-16 px-4 md:px-8 lg:px-12 bg-[#f9fafb]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-[#023a51]">
                Naša vizija
              </h2>
              <p className="text-[#023a51] text-lg">
                Vizija naše agencije je postati jedna od najznačajnijih
                hrvatskih agencija koja pruža usluge posredovanja pri
                zapošljavanju.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <span className="mt-1">
                    <MdKeyboardArrowRight className="w-5 h-5 text-red-600" />
                  </span>
                  <p className="text-[#59667d]">
                    Naš je cilj biti odgovoran društveni partner razvijajući
                    uzajamno korisne odnose s našim klijentima, poslovnim
                    partnerima, radnicima i ostalim zainteresiranima
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-1">
                    <MdKeyboardArrowRight className="w-5 h-5 text-red-600" />
                  </span>
                  <p className="text-[#59667d]">
                    Cilj nam nije jednokratni posao već dugogodišnja poslovna
                    suradnja
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-1">
                    <MdKeyboardArrowRight className="w-5 h-5 text-red-600" />
                  </span>
                  <p className="text-[#59667d]">
                    Nastojat ćemo održati kontinuirani napredak, najviše
                    standarde u pružanju naših usluga i proširivanje usluga koje
                    pružamo
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/images/Velika-stavka-pexels-fauxels.jpeg"
                alt="Our Mission"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
