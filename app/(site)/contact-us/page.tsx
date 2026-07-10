import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import EnquireForm from "@/components/EnquireForm";
import ModalWrapper from "@/components/ModalWrapper";
import StickyDownloadButton from "@/components/StickyButton";

export const metadata: Metadata = {
  title: "Contact Us | Enquire About The Islands by Gaurs",
  description:
    "Get in touch for current pricing, floor availability and site visits at The Islands by Gaurs. RERA-approved 4/5/6 BHK at Jaypee Greens, Greater Noida.",
  alternates: { canonical: "https://www.theislandsbygaurs.in/contact-us" },
};

export default function ContactUsPage() {
  return (
    <>
      <PageBanner
        eyebrow="Get in Touch"
        title="Speak to a Project Advisor"
        subtitle="For the latest pricing, floor availability, payment plans or to schedule a personal site visit, fill in your details below and one of our project advisors will reach out within 24 hours."
      />
      <ModalWrapper />

      <section className="w-full px-6 py-12 bg-white">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-[1.3fr_1fr] gap-10">
          {/* LEFT: Form */}
          <div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Your information is shared only with our authorised sales team and never sold to third parties.
            </p>
            <EnquireForm />
          </div>

          {/* RIGHT: Sidebar */}
          <div className="flex flex-col gap-6">
            <div className="bg-[#FAF8F4] rounded-xl p-6 border border-[#e5dcc5]">
              <p className="text-[11px] font-semibold tracking-widest uppercase text-[#c8922a] mb-2">
                Project Address
              </p>
              <p className="text-gray-800 text-sm leading-relaxed">
                The Islands by Gaurs<br />
                Jaypee Greens, Pari Chowk<br />
                Greater Noida, Uttar Pradesh
              </p>
            </div>

            <div className="bg-[#FAF8F4] rounded-xl p-6 border border-[#e5dcc5]">
              <p className="text-[11px] font-semibold tracking-widest uppercase text-[#c8922a] mb-2">
                Sales Office
              </p>
              <p className="text-gray-800 text-sm leading-relaxed">
                601, SL Tower, 6th Floor, Alpha Commercial Belt<br />
                Greater Noida 201310, Uttar Pradesh, India
              </p>
            </div>

            <div className="bg-[#FAF8F4] rounded-xl p-6 border border-[#e5dcc5] flex flex-col gap-2">
              <p className="text-sm text-gray-800">
                <strong className="text-[#c8922a]">Phone:</strong> +91 9810890353
              </p>
              <p className="text-sm text-gray-800">
                <strong className="text-[#c8922a]">Site Visit Hours:</strong> Mon–Sun, 10 AM – 7 PM
              </p>
              <a
                href="https://wa.me/919810890353"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 mt-2 bg-[#25D366] hover:bg-[#1ebe57] text-white text-xs font-semibold tracking-widest uppercase px-5 py-3 rounded-md transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>

            <div className="w-full h-[220px] rounded-lg overflow-hidden shadow-md border border-[#e5dcc5]">
              <iframe
                src="https://maps.google.com/maps?q=Jaypee+Greens+Pari+Chowk+Greater+Noida&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                title="The Islands by Gaurs Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* RERA Disclosure */}
      <section className="w-full bg-[#141004] px-6 py-10">
        <div className="max-w-5xl mx-auto text-center text-white/80 text-xs leading-relaxed space-y-2">
          <p>
            <strong className="tracking-widest text-white">RERA Registration Number:</strong> UPRERAPRJ734569
            {" "}&middot;{" "}
            <a
              href="https://up-rera.in/projects"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white"
            >
              https://up-rera.in/projects
            </a>
          </p>
          <p className="max-w-3xl mx-auto">
            This is an authorised channel partner / marketing partner website. All details, plans,
            specifications and images are indicative and subject to the RERA-approved sanctioned plans and
            the Builder-Buyer Agreement. Prices are subject to change without notice.
          </p>
        </div>
      </section>

      <div className="relative">
        <StickyDownloadButton />
      </div>
    </>
  );
}
