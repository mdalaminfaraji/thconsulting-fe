import LogoGallery from "@/components/home/LogoGallary";
import { Button } from "@/components/ui/button";
import React from "react";
import { FaPhone } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function ReferencePage() {
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
          <p className="text-2xl  text-[#023a51] my-4">Reference</p>
          <p className="text-5xl  text-[#023a51] font-bold my-4">
            Samo neke od kompanija koje su nam povjerile svoje povjerenje.
          </p>
          <p className="text-xl  text-foreground-muted">
            Suradnja s agencijom za zapošljavanje nudi jednostavan i brz put do
            kvalitetnog kadra, uštedu vremena i resursa te bazu kandidata raznih
            profila
          </p>
        </div>
      </div>
      <LogoGallery />
      {/* Experiences of our clients. */}
      <section className="my-12 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#023a51]">
              Iskustva naših klijenata.
            </h2>
            <div className="bg-[#eef1f6] px-8 py-4 rounded-xl flex items-center justify-between gap-4">
              <p className="text-xl text-[#023a51]">
                Postanite i vi jedan od zadovoljnih poslodavaca.
              </p>
              <button className="bg-[#023a51] text-white px-6 py-2 rounded-lg hover:bg-[#034b6a] transition-colors">
                Javite nam se!
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-xl shadow space-y-4">
              <p className="text-[#59667d] italic">
                &quot;Svojim profesionalnim pristupom i iskustvom pružili su nam
                sigurnost da je odluka o zaposlenju stranih radnika dobra za
                naše poslovanje. Vjerujemo da je to bio tek početak dobre
                suradnje.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#023a51] rounded-full flex items-center justify-center text-white text-xl">
                  M
                </div>
                <div>
                  <p className="text-[#023a51] font-semibold">
                    Mario Mareković
                  </p>
                  <p className="text-[#59667d] text-sm">DAM d.o.o.</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-xl shadow space-y-4">
              <p className="text-[#59667d] italic">
                &quot;S suradnjom s tim tim iz TH Consulting smo surađali u
                zaposlenju radnika iz Nepala, točno oko 200 od njih koji su
                radili na našim groždarijima u 2022. Suradnja bila je odlično i
                profesionalno, a specijalnost agencije je odličan znanost svih
                koraka zaposlenja stranih.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#023a51] rounded-full flex items-center justify-center text-white text-xl">
                  I
                </div>
                <div>
                  <p className="text-[#023a51] font-semibold">Ivana Tupek</p>
                  <p className="text-[#59667d] text-sm">Moslavina voće</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-xl shadow space-y-4">
              <p className="text-[#59667d] italic">
                &quot;Dankon od suradnje s tim tim iz TH Consulting smo surađali
                u zaposlenju radnika iz Nepala, točno oko 200 od njih koji su
                radili na našim groždarijima u 2022. Suradnja bila je odlično i
                profesionalno, a specijalnost agencije je odličan znanost svih
                koraka zaposlenja stranih.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#023a51] rounded-full flex items-center justify-center text-white text-xl">
                  I
                </div>
                <div>
                  <p className="text-[#023a51] font-semibold">Ivana Sarajlić</p>
                  <p className="text-[#59667d] text-sm">OPG Jure</p>
                </div>
              </div>
            </div>

            {/* Testimonial 4 */}
            <div className="bg-white p-6 rounded-xl shadow space-y-4">
              <p className="text-[#59667d] italic">
                &quot;Nakon suradnje s agencijom TH Consulting jasno nam je da
                se radi o stručnjacima s iskustvom na terenu zbog čega je proces
                zapošljavanja jednostavan za poslodavca.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#023a51] rounded-full flex items-center justify-center text-white text-xl">
                  H
                </div>
                <div>
                  <p className="text-[#023a51] font-semibold">
                    Hrvoje Stanešić
                  </p>
                  <p className="text-[#59667d] text-sm">OPG Stanešić</p>
                </div>
              </div>
            </div>

            {/* Testimonial 5 */}
            <div className="bg-white p-6 rounded-xl shadow space-y-4">
              <p className="text-[#59667d] italic">
                &quot;Radnici koji su imali priliku da ih zaposlime su odlično i
                odlično. TH Consulting, koja je vodila proces od početka do
                kraja, je pružila ključnu pomoć nam.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#023a51] rounded-full flex items-center justify-center text-white text-xl">
                  Z
                </div>
                <div>
                  <p className="text-[#023a51] font-semibold">Zoran Kovač</p>
                  <p className="text-[#59667d] text-sm">OPG Kovač</p>
                </div>
              </div>
            </div>

            {/* Testimonial 6 */}
            <div className="bg-white p-6 rounded-xl shadow space-y-4">
              <p className="text-[#59667d] italic">
                &quot;Oni su nam pružili podršku u nekoliko područja - odabir
                kandidata, dokumentacija koja je potrebna za uzimanje strane
                radnika, i bili su s nami i nakon što su stigli radnici. Kada
                smo videli odlične partneri u TH Consulting, nastavili smo
                suradnju.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#023a51] rounded-full flex items-center justify-center text-white text-xl">
                  F
                </div>
                <div>
                  <p className="text-[#023a51] font-semibold">
                    Filip Topličanec
                  </p>
                  <p className="text-[#59667d] text-sm">Prehrana Varaždin</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* We find the ideal staff for your business. */}
      <section className="my-12 py-16 px-4 md:px-8 lg:px-12 bg-[#f9fafb]">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#023a51] text-center mb-16">
            Pronalazimo idealan kadar za vašu djelatnost.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Agriculture */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center">
                  <MdKeyboardArrowRight className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-semibold text-[#023a51]">
                  Poljoprivreda.
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
                  Strojna industrija.
                </h3>
              </div>
              <p className="text-[#59667d] text-lg">
                S suradnjom s agencijom TH Consulting smo surađali u zaposlenju
                radnika iz Nepala, oko 200 od njih koji su radili na našim
                groždarijima u 2022. Suradnja bila je odlično i profesionalno, a
                specijalnost agencije je odličan znanost svih koraka zaposlenja
                stranih.
              </p>
            </div>

            {/* Construction and industry */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center">
                  <MdKeyboardArrowRight className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-semibold text-[#023a51]">
                  Gradnja i industrija.
                </h3>
              </div>
              <p className="text-[#59667d] text-lg">
                Pronalazimo rebar-čiše, stakarice, fasade, masonice,
                vodopadnike, ceramice, otključnike, vodopadnike i vodopadnike of
                all categories.
              </p>
            </div>

            {/* Shipbuilding */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center">
                  <MdKeyboardArrowRight className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-semibold text-[#023a51]">
                  Gradnja i industrija.
                </h3>
              </div>
              <p className="text-[#59667d] text-lg">
                Pronalazimo rebar-čiše, stakarice, fasade, masonice,
                vodopadnike, ceramice, otključnike, vodopadnike i vodopadnike of
                all categories.
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <button className="border border-[#023a51] text-[#023a51] px-8 py-3 rounded-xl hover:bg-[#023a51] hover:text-white transition-colors text-lg">
              Pogledajte sve industrije
            </button>
          </div>
        </div>
      </section>
      <section className="my-12 ">
        <div className="max-w-[1000px] mx-auto flex items-center justify-between bg-[#023a51] p-12 rounded-xl">
          <div className="space-y-4">
            <p className="text-5xl  text-[#fff]">Javite nam se za suradnju.</p>
            <p className="text-[#fff] text-2xl">
              Prijatno nam je suratovati i suratovati.
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
