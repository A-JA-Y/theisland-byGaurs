"use client";
import { FaDownload, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

import { useModal } from "./ModalContext";

export default function StickyDownloadButton() {
  const { openModal } = useModal();

  const handleClick = (e) => {
    e.preventDefault();
    const unlocked = localStorage.getItem("plansUnlocked") === "true";
    if (unlocked) {
      const link = document.createElement("a");
      link.href = "/brochure.pdf";
      link.download = "brochure.pdf";
      link.click();
    } else {
      openModal();
    }
  };

  return (
    <>
      {/* Side brochure tab — raised above the mobile CTA bar on small screens */}
      <button
        onClick={handleClick}
        className="
          fixed bottom-[130px] md:bottom-16 right-0
          flex flex-col items-center justify-center
          bg-[#c8952a] text-white font-semibold
          shadow-lg transition-all duration-300
          hover:bg-[#a8841e] hover:pr-[10px]
          px-[7px] py-[10px] z-[1000]
          rounded-l-md rounded-r-none
          cursor-pointer
        "
        aria-label="Download brochure"
      >
        <FaDownload size={16} className="rotate-90" />

        <div className="mt-[6px] flex flex-col items-center text-[11px] font-semibold leading-[1.1]">
          {"Brochure".split("").map((char, index) => (
            <span key={index}>{char}</span>
          ))}
        </div>
      </button>

      {/* Mobile sticky CTA bar */}
      <div
        className="fixed bottom-0 left-0 right-0 z-[1000] md:hidden grid grid-cols-3 shadow-[0_-6px_20px_rgba(0,0,0,0.18)]"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <a
          href="tel:+919810890353"
          className="flex flex-col items-center justify-center gap-1 py-2.5 bg-[#1d1507] text-[#F6E7C1] text-[11px] font-semibold uppercase tracking-wider active:bg-[#2c1f0e] transition-colors"
        >
          <FaPhoneAlt size={14} className="text-[#DCA54A]" />
          Call Now
        </a>
        <a
          href="https://wa.me/919810890353?text=Hi%2C%20I%27m%20interested%20in%20The%20Islands%20by%20Gaurs.%20Please%20share%20details."
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 py-2.5 bg-[#128C4A] text-white text-[11px] font-semibold uppercase tracking-wider active:bg-[#0d6e3a] transition-colors"
        >
          <FaWhatsapp size={16} />
          WhatsApp
        </a>
        <button
          onClick={() => openModal()}
          className="flex flex-col items-center justify-center gap-1 py-2.5 bg-[#C49A2B] text-white text-[11px] font-semibold uppercase tracking-wider active:bg-[#A8841E] transition-colors"
        >
          <span className="pulse-gold w-4 h-4 rounded-full bg-white/25 flex items-center justify-center text-[9px]">✦</span>
          Enquire
        </button>
      </div>
    </>
  );
}
