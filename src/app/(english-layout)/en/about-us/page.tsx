import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import ImageShowcase from "@/components/aboutus/ImageShowCase";
import Image from "next/image";
import LogoGallery from "@/components/home-english/LogoGallary";
import { Button } from "@/components/ui/button";
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
                Our Mission
              </h2>
              <p className="text-[#023a51] text-lg">
                The mission of our agency is to provide clients with the best
                possible service and a pleasant business experience with the
                quality of services, professional approach and favorable prices.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <span className="mt-1">
                    <MdKeyboardArrowRight className="w-5 h-5 text-red-600" />
                  </span>
                  <p className="text-[#59667d]">
                    Our desire is to help improve competitiveness and increase
                    productivity in the market
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-1">
                    <MdKeyboardArrowRight className="w-5 h-5 text-red-600" />
                  </span>
                  <p className="text-[#59667d]">
                    Our most important task is to identify and attract the best
                    candidates who match the needs and wishes of our clients
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-1">
                    <MdKeyboardArrowRight className="w-5 h-5 text-red-600" />
                  </span>
                  <p className="text-[#59667d]">
                    We want our clients, employees and other interested parties
                    to recognize TH Consulting as a reliable partner whose goal
                    is not only to satisfy, but also to exceed your expectations
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
                Our Vision
              </h2>
              <p className="text-[#023a51] text-lg">
                The vision of our agency is to become one of the most important
                Croatian agencies that provides employment mediation services.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <span className="mt-1">
                    <MdKeyboardArrowRight className="w-5 h-5 text-red-600" />
                  </span>
                  <p className="text-[#59667d]">
                    Our goal is to be a responsible social partner by developing
                    mutually beneficial relationships with our clients, business
                    partners, workers and other interested parties
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-1">
                    <MdKeyboardArrowRight className="w-5 h-5 text-red-600" />
                  </span>
                  <p className="text-[#59667d]">
                    Our goal is not a one-time job, but long-term business
                    cooperation
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-1">
                    <MdKeyboardArrowRight className="w-5 h-5 text-red-600" />
                  </span>
                  <p className="text-[#59667d]">
                    We will strive to maintain continuous progress, the highest
                    standards in the provision of our services and the expansion
                    of the services we provide
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
      <section className="my-12">
        <div
          style={{
            backgroundImage: "url('/images/contact-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="lg:h-[500px] w-full py-4 px-4 md:px-8 flex items-center justify-center"
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#023a51] mb-12 text-center">
              Meet our team.
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {/* Ivan Suhanek */}
              <div className="flex flex-col items-center text-center relative z-10">
                <div className="w-[228px] h-[200px] relative rounded-xl overflow-hidden">
                  <Image
                    src="/images/men/Ivan-suhanek.jpeg"
                    alt="Ivan-suhanek"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
                <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg mt-4">
                  <p className="text-2xl text-[#023a51]">Ivan Suhanek</p>
                  <p className="text-lg text-foreground-muted">
                    Chief Executive Officer
                  </p>
                </div>
              </div>

              {/* Ivan Šemper */}
              <div className="flex flex-col items-center text-center relative z-10">
                <div className="w-[228px] h-[200px] relative rounded-xl overflow-hidden">
                  <Image
                    src="/images/men/Ivan_semper.jpg"
                    alt="Ivan_semper"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
                <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg mt-4">
                  <p className="text-2xl text-[#023a51]">Ivan Šemper</p>
                  <p className="text-lg text-foreground-muted">Manager</p>
                </div>
              </div>

              {/* Nataša Kaselj */}
              <div className="flex flex-col items-center text-center relative z-10">
                <div className="w-[228px] h-[200px] relative rounded-xl overflow-hidden">
                  <Image
                    src="/images/men/women1.jpg"
                    alt="women1"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
                <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg mt-4">
                  <p className="text-2xl text-[#023a51]">Nataša Kaselj</p>
                  <p className="text-lg text-foreground-muted">
                    Recrutment Specialist
                  </p>
                </div>
              </div>

              {/* Kornelija Eljuga */}
              <div className="flex flex-col items-center text-center relative z-10">
                <div className="w-[228px] h-[200px] relative rounded-xl overflow-hidden">
                  <Image
                    src="/images/men/women2.jpg"
                    alt="women2"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
                <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg mt-4">
                  <p className="text-2xl text-[#023a51]">Kornelija Eljuga</p>
                  <p className="text-lg text-foreground-muted">
                    Key Account Manager
                  </p>
                </div>
              </div>

              {/* Ramesh Godar */}
              <div className="flex flex-col items-center text-center relative z-10">
                <div className="w-[228px] h-[200px] relative rounded-xl overflow-hidden">
                  <Image
                    src="/images/men/Ramesh_Godar.jpg"
                    alt="Ramesh_Godar"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
                <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg mt-4">
                  <p className="text-2xl text-[#023a51]">Ramesh Godar</p>
                  <p className="text-lg text-foreground-muted">
                    Recruitment Agent
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <LogoGallery />
      <section className="my-12">
        <div
          style={{
            backgroundImage: "url('/images/contact-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="h-[600px] md:h-[450px] w-full "
        >
          <div className=" mt-8 text-center">
            <p className="text-5xl  text-[#023a51] pt-8 text-center mb-8">
              Our offices.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-evenly gap-8">
              <div className="space-y-2 text-start">
                <p className="text-xl text-[#023a51]">Virovitica, Hrvatska</p>
                <p className="text-base text-[#59667d]">Stjepana Radića 38</p>
                <p className="text-base text-[#59667d]">33000 Virovitica</p>
                <p className="text-base text-[#59667d]">Contact us</p>
              </div>
              <div className="space-y-2 text-start">
                <p className="text-xl text-[#023a51]">Dubai, U.A.E.</p>
                <p className="text-base text-[#59667d]">
                  The Meydan Hotel, Grandstand, 6th floor
                </p>
                <p className="text-base text-[#59667d]">
                  Meydan Road, Nad Al Sheba, Dubai, U.A.E
                </p>
                <p className="text-base text-[#59667d]">Contact us</p>
              </div>
            </div>
            <Button
              className="mt-16 border border-[#023a51] rounded-xl text-lg px-8 hover:bg-red-600 hover:text-white"
              variant="outline"
              size="lg"
            >
              Learn more
            </Button>
          </div>
        </div>
      </section>
      <section className="my-12 ">
        <div className="max-w-[900px] mx-auto py-12 px-4 md:px-8 flex items-center justify-between bg-[#023a51] p-12 rounded-xl">
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
