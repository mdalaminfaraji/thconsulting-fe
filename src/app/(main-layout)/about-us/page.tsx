import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import ImageShowcase from "@/components/aboutus/ImageShowCase";
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

      <section className="max-w-[600px] mx-auto my-12">
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
    </div>
  );
}
