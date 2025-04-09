import FAQSection from "@/components/contact/Faq";
import ContactSection from "@/components/home/ContactSection";
import React from "react";

export default function FaqPage() {
  return (
    <div className="min-h-screen pt-5">
      {/* office content */}
      <section>
        <div className="max-w-[1000px] mx-auto py-16 px-6 md:px-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#023a51] mb-4 mt-10">
            Najčešća pitanja.
          </h1>
          <p className="max-w-[450px] mx-auto text-lg md:text-xl text-[#59667d]">
            Upoznajte proces i povjerite nam zadatak potrage, selekcije i
            novačenja radnika
          </p>
        </div>
      </section>
      <section className="my-12 ">
        <FAQSection />
      </section>
      <section className="my-12 ">
        <ContactSection />
      </section>
    </div>
  );
}
