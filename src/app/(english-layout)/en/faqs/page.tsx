import React from "react";
import FAQSection from "@/components/contact-english/Faq";
import ContactSection from "@/components/home-english/ContactSection";
export default function FAQPage() {
  return (
    <div className="min-h-screen pt-5">
      {/* office content */}
      <section>
        <div className="max-w-[1000px] mx-auto py-16 px-6 md:px-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#023a51] mb-4 mt-10">
            FAQ
          </h1>
          <p className="max-w-[450px] mx-auto text-lg md:text-xl text-[#59667d]">
            Get to know the process and entrust us with the task of searching,
            selecting and recruiting workers
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
