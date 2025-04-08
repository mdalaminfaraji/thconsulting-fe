import LogoGallery from "@/components/home/LogoGallary";
import { Button } from "@/components/ui/button";
import React from "react";
import { FaPhone } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function ReferencePageEnglish() {
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
            Just some of the companies that have entrusted us with their trust.
          </p>
          <p className="text-xl  text-foreground-muted">
            Partnering with our agency provides a simple and quick way to access
            a quality workforce, saving time and resources, and providing a
            database of candidates with diverse profiles.
          </p>
        </div>
      </div>

      <LogoGallery />
      {/* Experiences of our clients. */}
      <section className="my-12 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#023a51]">
              Experiences of our clients.
            </h2>
            <div className="bg-[#eef1f6] px-8 py-4 rounded-xl flex items-center justify-between gap-4">
              <p className="text-xl text-[#023a51]">
                Become one of the satisfied employers.
              </p>
              <button className="bg-[#023a51] text-white px-6 py-2 rounded-lg hover:bg-[#034b6a] transition-colors">
                Contact us!
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-xl shadow space-y-4">
              <p className="text-[#59667d] italic">
                &quot;With their professional approach and experience, they gave
                us the assurance that the decision to employ foreign workers is
                good for our business. We believe that this was only the
                beginning of a good cooperation.&quot;
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
                &quot;We cooperated with the TH Consulting team in the
                recruitment of workers from Nepal, more precisely about 200 of
                them who worked in our orchards in 2022. The cooperation was
                very pleasant and professional, and the specialty of the agency
                is excellent knowledge of all the steps of hiring
                foreigners.&quot;
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
                &quot;Thanks to the help of the TH Consulting team, after one
                season of hiring foreign workers, we are sure that we have found
                a solution to the challenges with staff that we are having a
                hard time finding.&quot;
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
                &quot;After cooperation with the agency TH Consulting, it is
                clear to us that they are experts with experience in the field,
                which makes the recruitment process simple for the
                employer.&quot;
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
                &quot;The workers we had the opportunity to hire were diligent,
                motivated and reliable. TH Consulting, which guided the process
                step by step from beginning to end, provided crucial help to
                us.&quot;
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
                &quot;They provided us with support in several areas - the
                selection of candidates, the documentation needed to bring the
                workers to Croatia, and they were with us even after the arrival
                of the workers. Since we recognized excellent partners in TH
                Consulting, we continue our successful cooperation.&quot;
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
            We find the ideal staff for your business.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Agriculture */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center">
                  <MdKeyboardArrowRight className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-semibold text-[#023a51]">
                  Agriculture.
                </h3>
              </div>
              <p className="text-[#59667d] text-lg">
                We provide reliable workers to agricultural farms for work in
                agriculture, farming and livestock.
              </p>
            </div>

            {/* Wood industry */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center">
                  <MdKeyboardArrowRight className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-semibold text-[#023a51]">
                  Wood industry.
                </h3>
              </div>
              <p className="text-[#59667d] text-lg">
                With our help, many processing and production plants of the wood
                industry have found reliable workers.
              </p>
            </div>

            {/* Construction and industry */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center">
                  <MdKeyboardArrowRight className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-semibold text-[#023a51]">
                  Construction and industry.
                </h3>
              </div>
              <p className="text-[#59667d] text-lg">
                We find rebar workers, carpenters, facade workers, masons,
                waterproofers, ceramists, locksmiths, pipe fitters and drivers
                of all categories.
              </p>
            </div>

            {/* Shipbuilding */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center">
                  <MdKeyboardArrowRight className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-semibold text-[#023a51]">
                  Shipbuilding.
                </h3>
              </div>
              <p className="text-[#59667d] text-lg">
                We find welders and motivated shipbuilding workers qualified for
                the tasks entrusted to them.
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <button className="border border-[#023a51] text-[#023a51] px-8 py-3 rounded-xl hover:bg-[#023a51] hover:text-white transition-colors text-lg">
              See all industries
            </button>
          </div>
        </div>
      </section>
      <section className="my-12 ">
        <div className="max-w-[1000px] mx-auto flex items-center justify-between bg-[#023a51] p-12 rounded-xl">
          <div className="space-y-4">
            <p className="text-5xl  text-[#fff]">
              Contact us for collaboration.
            </p>
            <p className="text-[#fff] text-2xl">
              Are you looking for quality workers and a long-term solution, in
              the right place.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <Button
              className="border border-[#023a51] rounded-xl text-lg px-8 hover:bg-red-600 hover:text-white"
              variant="outline"
              size="lg"
            >
              Contact
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
