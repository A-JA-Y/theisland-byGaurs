"use client";
import dynamic from "next/dynamic";
const LiteYT = dynamic(() => import("@/components/LiteYT"), {
  ssr: false,
});
export default function WalkthroughSection() {
  return (
    <section className="w-full bg-[#FAF8F4] py-16 px-6" id="walkthrough">
      <div className="max-w-5xl mx-auto flex flex-col gap-10">

        {/* Heading */}
        <div className="text-center">
          <h6 className="uppercase text-xs tracking-widest text-[#DCA54A] mb-3">
            Project Walkthrough
          </h6>

          <h2 className="text-3xl   md:text-4xl font-bold text-gray-900">
            Experience the Project Virtually
          </h2>

          <p className="text-gray-600 text-sm mt-3 max-w-xl mx-auto">
            Take a guided video tour of the township, amenities, and residences
            to get a real feel of the lifestyle and layout.
          </p>
        </div>

        
        <div className="relative w-full rounded-xl overflow-hidden shadow-lg max-w-[720px] mx-auto">
          <div className="aspect-video w-full h-full">
            <LiteYT />
          </div>
        </div>

  
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-3">
            Want complete details including pricing & plans?
          </p>

          <a
            href="#book-site-visit"
            className="inline-block bg-[#DCA54A] text-white text-xs px-6 py-3 rounded uppercase"
          >
            Get Full Details
          </a>
        </div>

      </div>
    </section>
  );
}