import { Button } from "@/components/ui/button";
import React from "react";

type ServiceFeature = {
  text: string;
};

type Service = {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: ServiceFeature[];
};

const servicesData: Service[] = [
  {
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    title: "Mediation in employment",
    description: "We manage the entire process of hiring foreign workers.",
    features: [
      { text: "We lead the process of bringing workers and administration" },
      {
        text: "Wide range of candidates for various activities and industries",
      },
      { text: "Employment of qualified personnel" },
    ],
  },
  {
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    title: "Assignment of workers",
    description: "Hire a foreign worker for a certain period.",
    features: [
      { text: "Flexibility and speed with pre-approved workers" },
      { text: "Simple employment process without complicated administration" },
      { text: "Wide range of candidates for various industries" },
    ],
  },
  {
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
    title: "Employment administration",
    description: "Complete documentation and work permits for foreign workers.",
    features: [
      { text: "Recruitment administration managed by our agency" },
      { text: "Facilitates employment of foreign workers" },
      { text: "Expert support throughout the entire process" },
    ],
  },
];

const ServiceCard: React.FC<Service> = ({
  icon,
  title,
  description,
  features,
}) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow relative">
      <div className="mb-6">
        <div className="w-12 h-12 bg-[#023a51] rounded-full flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-[#023a51] mb-4">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
      </div>
      <ul className="space-y-3 mb-10">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg
              className="w-5 h-5 text-[#023a51] mr-2 mt-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>{feature.text}</span>
          </li>
        ))}
      </ul>
      <Button
        variant="outline"
        className=" border-[#023a51] text-white bg-[#023a51] hover:bg-red-600 hover:text-white absolute bottom-4 left-1/2 -translate-x-1/2 px-10 py-2"
      >
        Learn more
      </Button>
    </div>
  );
};

export default function ServicesPageEnglish() {
  return (
    <div className="min-h-screen pt-4">
      {/* services content */}
      <section>
        <div
          style={{
            backgroundImage: "url('/images/contact-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="h-[400px] w-full flex items-center justify-center"
        >
          <div className="text-start max-w-[500px] h-[400px] mt-8 px-6">
            <p className="text-4xl text-[#023a51] my-4">Services</p>
            <p className="text-5xl text-[#023a51] font-bold my-4">
              All the services you need in one place.
            </p>
            <p className="text-xl text-foreground-muted">
              Entrust your business to our experts and, with their help,
              evaluate how to best organize the work of foreign workers in your
              company
            </p>
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </section>
    </div>
  );
}
