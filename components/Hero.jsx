
import Image from "next/image";
import heroDesktop from "../assets-islandbygaurs/images/anim-5.jpg";
import heroMobile from "../assets-islandbygaurs/images/theislandsbygaurs.jpg";

const Hero = () => {
  return (
    <section className="w-full">
      {/* Mobile & Tablet */}
      <div className="block md:hidden">
        <Image
          src={heroMobile}
          alt="The Islands by Gaurs Mobile Banner"
          width={1536}


          priority

          sizes="100vw"
          quality={80}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Desktop Background */}
      <div
        className="
          hidden md:flex
          w-full md:h-[70vh]
          items-center
          relative
          overflow-hidden
        "
      >
        <Image
          src={heroDesktop}
          alt="The Islands by Gaurs Desktop Banner"
          fill

          className="object-cover object-[right_top]"
          sizes="100vw"
          quality={80}
        />

        {/* Overlay to mimic background-blend-mode: lighten if needed, 
            though usually object-cover is enough if the design allows */}
        <div className="absolute inset-0 bg-white/10 mix-blend-lighten pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto w-full px-6">
          {/* Content can be added here if needed */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
