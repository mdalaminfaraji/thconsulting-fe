import ImageShowcase from "@/components/aboutus/ImageShowCase";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
export default function AboutUsPageEnglish() {
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
          <p className="text-4xl  text-[#023a51] my-4">About Us</p>
          <p className="text-5xl  text-[#023a51] font-bold my-4">
            An agency that takes care of your business.
          </p>
          <p className="text-xl  text-foreground-muted">
            Leave a reliable and safe solution for your business to our experts
          </p>
        </div>
      </div>
      <ImageShowcase />

      <section className="max-w-[600px] mx-auto my-12">
        <h1 className="text-3xl text-[#023a51] font-bold mb-4">
          Let&apos;s get to know each other.
        </h1>
        <p className="mb-4 text-[#59667d] text-lg">
          TH Consulting is an employment mediation agency that is registered and
          licensed by the Ministry of Labor of the Republic of Croatia.
        </p>
        <p className="text-[#59667d] mb-4 text-lg">
          As your reliable partner, we will help you find suitable staff to
          create and improve productivity and competitiveness on the labor
          market.
          <br />
          We cooperate with partners from Nepal, India, Bangladesh, Uzbekistan,
          Serbia, Vietnam and Kosovo to recruit the best candidates according to
          your wishes and needs.
        </p>
        <p className="text-[#59667d] mb-4 text-lg">
          <span>
            <MdKeyboardArrowRight className="inline-block w-4 h-4 text-red-600" />
          </span>{" "}
          We are experts in mediating employment and temporary employment of
          foreign workers with many years of experience.
        </p>
      </section>
    </div>
  );
}
