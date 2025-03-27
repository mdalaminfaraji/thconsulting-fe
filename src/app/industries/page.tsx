import React from "react";

export default function IndustriesPage() {
  return (
    <div className=" min-h-screen pt-5">
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
          <p className="text-2xl  text-[#023a51] my-4">Područja rada</p>
          <p className="text-5xl  text-[#023a51] font-bold my-4">
            Pronalazimo idealan kadar za vašu djelatnost.
          </p>
          <p className="text-xl  text-foreground-muted">
            Povjerite nam zadatak potrage, selekcije i novačenja radnika
            kvalificiranih za rad u vašoj industriji
          </p>
        </div>
      </div>
    </div>
  );
}
