import Image from "next/image";

export default function ImageShowcase() {
  return (
    <section className="bg-[#063556] relative z-10 min-h-[500px] md:h-[650px] py-16 md:py-0">
      <div className="max-w-[1250px] h-full mx-auto px-4 relative">
        <div className="flex flex-col md:flex-row items-center justify-center h-full relative">
          {/* Left Image */}
          <div className="relative w-48 h-48 md:w-48 md:h-48 rounded-xl overflow-hidden mb-8 md:mb-0 md:absolute md:bottom-16 md:left-10 transform transition-transform hover:scale-105">
            <Image
              src="/images/Velika-stavka-pexels-tima-miroshnichenko-6508835-400x267.jpeg"
              alt="Cleaning grid"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 192px, 192px"
            />
          </div>

          {/* Center Image */}
          <div className="relative w-full h-[300px] md:w-[500px] md:h-[500px] rounded-xl overflow-hidden transform transition-transform hover:scale-105">
            <Image
              src="/images/Velika-stavka-pexels-ketut-subiyanto.jpeg"
              alt="Person with coffee"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 500px"
              priority
            />
          </div>

          {/* Right Image */}
          <div className="relative w-48 h-48 md:w-48 md:h-48 rounded-xl overflow-hidden mt-8 md:mt-0 md:absolute md:top-16 md:right-10 transform transition-transform hover:scale-105">
            <Image
              src="/images/Velika-stavka-pexels-tima-miroshnichenko.jpeg"
              alt="Painting ceiling"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 192px, 192px"
            />
          </div>
        </div>
      </div>
      <div className="bg-red-500 w-full h-[130px] bottom-0 absolute -z-10"></div>
    </section>
  );
}
