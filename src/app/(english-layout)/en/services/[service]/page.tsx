import ContactSection from "@/components/home-english/ContactSection";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
const servicesData = [
  {
    id: 1,
    title: "Mediation in employment",
    features: [
      "We handle the entire employment process for foreign workers",
      "The process of bringing in workers and subsequent administration is handled by the agency",
      "We provide a wide range of candidates for a large number of industries and industries",
      "Enables employment of qualified and motivated staff",
    ],
  },
  {
    id: 2,
    title: "Subletting",
    features: [
      "Rent a foreign worker for a specific period",
      "Provides flexibility and speed since workers already have residence and work permits",
      "Enables a simple employment process without complex administration",
      "Provides a wide range of candidates for a large number of industries and industries",
    ],
  },
  {
    id: 3,
    title: "Administrating employment",
    features: [
      "If you have already selected the ideal candidate, we provide support in employment administration",
      "The employment process is handled by the agency",
      "Facilitates employment of foreign workers",
      "Experienced professionals provide support in the entire process",
    ],
  },
];
export default function ServiceDetailsPageEnglish() {
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
            Mediation in employment
          </p>
          <p className="text-5xl  text-[#023a51] font-bold my-4">
            We handle the entire employment process for foreign workers.
          </p>
          <p className="text-xl  text-foreground-muted">
            We handle the entire employment process for foreign workers.
          </p>
        </div>
      </div>
      <section className="mb-12 py-20 px-4 md:px-8 lg:px-12 bg-[#063556]">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            When is mediation in employment the best option?
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
                    Agency for you handles the entire employment process for
                    foreign workers
                  </h3>
                  <p className="text-[#e9ecf1] text-lg">
                    We handle the entire employment process for foreign workers.
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
                    Agency handles the entire process of bringing in workers and
                    subsequent administration
                  </h3>
                  <p className="text-[#e9ecf1] text-lg">
                    We handle the entire process of bringing in workers and
                    subsequent administration.
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
                    We provide a wide range of candidates for a large number of
                    industries and industries
                  </p>
                  <p className="text-[#e9ecf1] text-lg">
                    We provide a wide range of candidates for a large number of
                    industries and industries.
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
                    Enables employment of qualified and motivated staff
                  </p>
                  <p className="text-[#e9ecf1] text-lg">
                    We handle the entire process of bringing in workers and
                    subsequent administration.
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
              Choose a service based on your business needs.
            </h2>
            <p className="text-xl text-[#59667d]">
              Learn about the benefits of our services.
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

      {/* Choose a service based on your business needs. */}
      <section className="my-12 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#023a51]">
              Explore our services.
            </h2>
            <button className="px-6 py-3 border border-[#023a51] text-[#023a51] rounded-xl hover:bg-[#023a51] hover:text-white transition-colors">
              View more
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Subletting */}
            <div className="bg-white p-8 rounded-xl shadow-sm space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-semibold text-[#023a51]">
                  Subletting
                </h3>
                <button className="p-3 rounded-full border border-[#023a51] text-[#023a51] hover:bg-[#023a51] hover:text-white transition-colors">
                  <MdKeyboardArrowRight className="w-6 h-6" />
                </button>
              </div>
              <p className="text-[#59667d] text-lg">
                Rent a worker for a specific period and for individual projects.
              </p>
              <button className="text-[#023a51] font-medium hover:text-red-600 transition-colors">
                Learn more
              </button>
            </div>

            {/* Administrating employment */}
            <div className="bg-white p-8 rounded-xl shadow-sm space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-semibold text-[#023a51]">
                  Administrating employment
                </h3>
                <button className="p-3 rounded-full border border-[#023a51] text-[#023a51] hover:bg-[#023a51] hover:text-white transition-colors">
                  <MdKeyboardArrowRight className="w-6 h-6" />
                </button>
              </div>
              <p className="text-[#59667d] text-lg">
                We provide complete documentation for foreign workers.
              </p>
              <button className="text-[#023a51] font-medium hover:text-red-600 transition-colors">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
