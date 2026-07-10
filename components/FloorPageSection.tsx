"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import plan1 from "@/assets/tower-1.webp";
import plan2 from "@/assets/tower-2.webp";
import plan3 from "@/assets/tower-3.webp";
import plan4 from "@/assets/tower-4.webp";
import plan5 from "@/assets/tower-5.webp";
import masterPlan from "@/assets/tower-6.webp";

import { useModal } from "./ModalContext";

// Condominium floor plan data — The Islands by Gaurs
const unitPlans = [
  {
    id: "tower-a",
    type: "Tower A — 4 BHK Premium",
    size: "553.94 sq.m. / approx. 5,962 sq.ft.",
    config: "4 BHK",
    floors: "Stilt + 35 floors",
    image: plan1,
    description:
      "4 Bedrooms + Living Room + Family Lounge + Dining + Kitchen + Store + 4 Toilets + Walk-in Closets + Yoga & Meditation Area + 3 Balconies + Utility Areas.",
    features: ["4 Bedrooms", "4 Toilets", "Family Lounge", "Yoga & Meditation Area"],
  },
  {
    id: "tower-b-i",
    type: "Tower B / I — 4 BHK Standard",
    size: "449.35 sq.m. / approx. 4,835 sq.ft.",
    config: "4 BHK",
    floors: "Stilt + 23 floors",
    image: plan2,
    description:
      "4 Bedrooms + Living Room + Family Lounge + Dining + Kitchen + 4 Toilets + Walk-in Closets + Balconies + Utility Areas.",
    features: ["4 Bedrooms", "4 Toilets", "Walk-in Closets", "Family Lounge"],
  },
  {
    id: "tower-c-h",
    type: "Tower C / H — 4 BHK Compact Luxury",
    size: "405.00 sq.m. / approx. 4,077 sq.ft.",
    config: "4 BHK",
    floors: "Stilt + 23 floors",
    image: plan3,
    description:
      "4 Bedrooms + Living Room + Family Lounge + Dining + Kitchen + 4 Toilets + Walk-in Closet + Balconies + Utility Areas.",
    features: ["4 Bedrooms", "4 Toilets", "Walk-in Closet", "Family Lounge"],
  },
  {
    id: "tower-e",
    type: "Tower E — 4 BHK Boutique",
    size: "342.17 sq.m. / approx. 3,595 sq.ft.",
    config: "4 BHK",
    floors: "Stilt + 34 floors",
    image: plan4,
    description:
      "4 Bedrooms + Living Room + Family Lounge + Dining + Kitchen + Store + 3 Toilets + Walk-in Closet + Balconies + Utility Areas.",
    features: ["4 Bedrooms", "3 Toilets", "Store", "Walk-in Closet"],
  },
  {
    id: "5bhk-h01-i01",
    type: "5 BHK — Blocks H-01, I-01",
    size: "Saleable 405.01 sq.m. / 4,359.48 sq.ft. (Carpet 229.77 sq.m. / 2,473.24 sq.ft.)",
    config: "5 BHK",
    floors: "Stilt + 23 floors",
    image: plan5,
    description:
      "Foyer + 4 Bedrooms + Living Room + Family Lounge & Dining + Store + Kitchen + 4 Toilets + Walk-in Closets + 2 Dress Rooms + 3 Balconies + Utility Areas.",
    features: ["4 Bedrooms", "Foyer", "2 Dress Rooms", "3 Balconies"],
  },
];

export default function FloorPlanSection() {
  const { openModal, isLeadSubmitted } = useModal();
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [activePlan, setActivePlan] = useState<(typeof unitPlans)[0] | null>(null);
  const [isMasterOpen, setIsMasterOpen] = useState(false);
  const [selectedConfig, setSelectedConfig] = useState("");

  useEffect(() => {
    if (isLeadSubmitted) {
      setIsUnlocked(true);
      localStorage.setItem("plansUnlocked", "true");
    } else {
      const saved = localStorage.getItem("plansUnlocked");
      if (saved === "true") setIsUnlocked(true);
    }
  }, [isLeadSubmitted]);

  const overviewData = [
    { type: "4 BHK", tower: "E", size: "~3,595 sq.ft.", floors: "Stilt + 34" },
    { type: "4 BHK", tower: "C / H", size: "~4,077 sq.ft.", floors: "Stilt + 23" },
    { type: "4 BHK", tower: "B / I", size: "~4,835 sq.ft.", floors: "Stilt + 23" },
    { type: "5 BHK", tower: "H-01 / I-01", size: "~4,359 sq.ft. (carpet 2,473)", floors: "Stilt + 23" },
    { type: "4 BHK Premium", tower: "A", size: "~5,962 sq.ft.", floors: "Stilt + 35" },
    { type: "6 BHK / Duplex / Penthouse", tower: "Select", size: "6,000+ sq.ft.", floors: "Top floors" },
  ];

  return (
    <section className="w-full py-16 px-6" id="floor-plans" aria-label="The Islands by Gaurs Floor Plans">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {/* H1 Heading */}
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            The Islands by Gaurs Floor Plans — 4, 5 & 6 BHK Layouts
          </h1>
          <p className="text-gray-600 max-w-4xl mx-auto text-sm md:text-base leading-relaxed">
            Every residence at The Islands is designed with only one neighbour per floor — your unit and
            one other. The layouts are built around expansive living and dining halls, dedicated family
            lounges, walk-in closets and triple-aspect balconies. Choose your tower and configuration below.
          </p>
          <button
            onClick={() => openModal()}
            className="mt-6 bg-[#DCA54A] text-white text-sm px-8 py-3 rounded uppercase font-semibold hover:bg-[#c9943a] transition"
            aria-label="Request Detailed Floor Plan PDF"
          >
            Request Detailed Floor Plan PDF
          </button>
        </div>

        {/* H2 - Configuration Overview */}
        <div className="mt-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-6">
            Configuration Overview
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto text-sm mb-8">
            506 condominiums across 9 towers — only 2 per floor. Use the table below to compare every
            configuration at a glance:
          </p>

          <div className="overflow-x-auto shadow-md rounded-lg">
            <table className="w-full text-sm md:text-base border-collapse">
              <thead>
                <tr className="bg-[#DCA54A] text-white">
                  <th className="px-4 py-3 text-left">Type</th>
                  <th className="px-4 py-3 text-left">Tower</th>
                  <th className="px-4 py-3 text-left">Saleable Area</th>
                  <th className="px-4 py-3 text-left">Floors</th>
                </tr>
              </thead>
              <tbody>
                {overviewData.map((item, idx) => (
                  <tr
                    key={item.type + item.tower}
                    className={`${
                      idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                    } hover:bg-gray-100 transition`}
                  >
                    <td className="px-4 py-3 font-semibold">{item.type}</td>
                    <td className="px-4 py-3">{item.tower}</td>
                    <td className="px-4 py-3">{item.size}</td>
                    <td className="px-4 py-3">{item.floors}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3 text-center">
            Pricing is shared on a one-to-one basis — see the{" "}
            <Link href="/price" className="text-[#DCA54A] hover:underline">Price &amp; Configurations page</Link>.
          </p>
        </div>

        {/* H2 - Floor Plan Configurations */}
        <div className="mt-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-6">
            Layouts by Tower
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto text-sm mb-10">
            Every residence opens to the golf course on one side and the Pari Chowk skyline on the other.
            Only two condominiums per floor — never more.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {unitPlans.map((plan) => (
              <div
                key={plan.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer border border-gray-100"
                onClick={() => {
                  if (!isUnlocked) {
                    openModal();
                  } else {
                    setActivePlan(plan);
                  }
                }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={plan.image}
                    alt={`${plan.type} Floor Plan - ${plan.size}`}
                    className={`w-full h-full object-cover transition duration-500 ${
                      !isUnlocked ? "blur-[2px] scale-105" : "hover:scale-105"
                    }`}
                    loading="lazy"
                  />
                  {!isUnlocked && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-white text-sm font-semibold">
                      🔒 Unlock to View
                    </div>
                  )}
                  <span className="absolute top-3 left-3 bg-[#DCA54A] text-white text-xs px-3 py-1 rounded">
                    {plan.config}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900">
                    {plan.type}
                  </h3>
                  <p className="text-sm text-[#DCA54A] font-semibold">{plan.size}</p>
                  <p className="text-xs text-gray-500">{plan.floors}</p>
                  <p className="text-xs text-gray-600 mt-2 line-clamp-2">{plan.description}</p>
                  <div className="flex flex-wrap gap-1 mt-3">
                    {plan.features.slice(0, 3).map((feature) => (
                      <span
                        key={feature}
                        className="text-[10px] bg-gray-100 text-gray-700 px-2 py-1 rounded"
                      >
                        {feature}
                      </span>
                    ))}
                    {plan.features.length > 3 && (
                      <span className="text-[10px] text-gray-500">+{plan.features.length - 3} more</span>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* 6 BHK / Duplex / Penthouse card */}
            <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden border border-dashed border-[#DCA54A] flex flex-col items-center justify-center text-center p-6">
              <span className="text-[#DCA54A] text-xs font-semibold uppercase tracking-widest mb-2">
                By Invitation
              </span>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                6 BHK / Duplex / Penthouse
              </h3>
              <p className="text-xs text-gray-600 mb-4">
                Curated on request — exquisite duplexes, penthouse suites and large terrace homes for the
                elite few.
              </p>
              <Link
                href="/contact-us"
                className="text-xs bg-[#DCA54A] text-white px-4 py-2 rounded uppercase hover:bg-[#c9943a] transition"
              >
                Speak to an Advisor
              </Link>
            </div>
          </div>
        </div>

        {/* H2 - Selection Guide Table */}
        <div className="mt-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-6">
            Choose the Right Residence for You
          </h2>

          <div className="overflow-x-auto shadow-md rounded-lg">
            <table className="w-full text-sm md:text-base border-collapse">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="px-4 py-3 text-left">If You Are...</th>
                  <th className="px-4 py-3 text-left">Recommended</th>
                  <th className="px-4 py-3 text-left">Why</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { buyer: "Seeking a boutique golf-view residence", villa: "Tower E (4 BHK · ~3,595 sq.ft.)", why: "Most compact 4 BHK, full access to every amenity zone" },
                  { buyer: "A family wanting a compact luxury layout", villa: "Tower C / H (4 BHK · ~4,077 sq.ft.)", why: "Balanced size with walk-in closet and family lounge" },
                  { buyer: "A larger family needing more space", villa: "Tower B / I (4 BHK · ~4,835 sq.ft.)", why: "Bigger family lounge, more balcony frontage" },
                  { buyer: "A multi-generational household", villa: "5 BHK · Blocks H-01 / I-01 (~4,359 sq.ft.)", why: "Extra bedroom, foyer and two dress rooms" },
                  { buyer: "Wanting the flagship signature address", villa: "Tower A · 4 BHK Premium (~5,962 sq.ft.)", why: "Largest 4 BHK, yoga & meditation area, tallest tower at 35 floors" },
                  { buyer: "Seeking ultimate exclusivity", villa: "6 BHK / Duplex / Penthouse", why: "Curated on request for the elite few" },
                ].map((item, idx) => (
                  <tr
                    key={idx}
                    className={`${
                      idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                    } hover:bg-gray-100 transition`}
                  >
                    <td className="px-4 py-3 font-medium">{item.buyer}</td>
                    <td className="px-4 py-3 font-semibold text-[#DCA54A]">{item.villa}</td>
                    <td className="px-4 py-3 text-sm">{item.why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* H2 - Master Plan Section */}
        <div className="mt-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
            The Islands by Gaurs Master Plan
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto text-sm mb-6">
            Alongside the individual tower layouts, the master plan is the boulevard blueprint that
            surrounds every residence at The Islands. It covers the 9-tower boulevard, the 18-hole golf
            course frontage, The Ivory Coast open-air zone, The Gold Coast clubhouse, The Orbit skywalk 90m
            above ground, and the gated perimeter. No residence sits in isolation — every home, from Tower
            E to Tower A, is part of one integrated address.
          </p>

          <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto text-sm mb-6">
            <ul className="space-y-1 list-disc list-inside text-gray-600">
              <li>9 Towers in a Single Sweeping Boulevard</li>
              <li>18-Hole Greg Norman Golf Course Frontage</li>
              <li>The Gold Coast — 30,000 sq.ft. Clubhouse</li>
            </ul>
            <ul className="space-y-1 list-disc list-inside text-gray-600">
              <li>The Orbit — Skywalk 90m Above Ground</li>
              <li>Double-height tower lobbies</li>
              <li>Multi-tier gated security with 24×7 surveillance</li>
            </ul>
          </div>

          <div
            className="relative w-full md:w-[70%] rounded-lg overflow-hidden shadow-lg cursor-pointer group max-w-4xl mx-auto"
            onClick={() => {
              if (!isUnlocked) {
                openModal();
              } else {
                setIsMasterOpen(true);
              }
            }}
          >
            <Image
              src={masterPlan}
              alt="The Islands by Gaurs Master Plan - 9 Tower Boulevard Layout"
              className="w-full h-[260px] md:h-[320px] object-cover blur-[1px] scale-105"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 text-white">
              <p className="text-lg font-semibold">Master Plan</p>
              <p className="text-sm mt-1">
                {isUnlocked ? "Click to View & Download" : "Unlock to Access"}
              </p>
              <button
                className="mt-4 bg-[#DCA54A] text-white text-xs px-6 py-2 rounded uppercase hover:bg-[#c9943a] transition"
                aria-label="View Master Plan"
              >
                {isUnlocked ? "View Master Plan" : "Unlock Now"}
              </button>
            </div>
            <span className="absolute top-3 left-3 bg-[#DCA54A] text-white text-[10px] px-2 py-1 rounded">
              Premium
            </span>
          </div>
        </div>

        {/* H2 - PDF Download Section */}
        <div className="mt-8 bg-gray-50 rounded-lg p-6 md:p-8 text-center border border-gray-200">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Detailed Floor Plan PDF — Download
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm mb-6">
            The official floor plan PDF includes detailed layout drawings for every 4, 5 & 6 BHK
            configuration, the master plan, dimensions, room sizes and orientation references. The PDF is
            shared directly with verified buyers to maintain accurate, RERA-aligned distribution.
          </p>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto mb-6">
            To download the floor plan PDF, share your name, phone and preferred configuration via the
            enquiry form below. Our project advisory team will email the latest PDF along with the current
            price sheet within a few hours.
          </p>

          <div className="max-w-md mx-auto">
            <div className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Your Name"
                className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#DCA54A]"
                aria-label="Your Name"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#DCA54A]"
                aria-label="Phone Number"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#DCA54A]"
                aria-label="Email Address"
              />
              <select
                value={selectedConfig}
                onChange={(e) => setSelectedConfig(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#DCA54A]"
                aria-label="Preferred Configuration"
              >
                <option value="">Preferred Configuration</option>
                <option value="Tower E">Tower E — 4 BHK (~3,595 sq.ft.)</option>
                <option value="Tower C/H">Tower C / H — 4 BHK (~4,077 sq.ft.)</option>
                <option value="Tower B/I">Tower B / I — 4 BHK (~4,835 sq.ft.)</option>
                <option value="5 BHK">5 BHK — H-01 / I-01 (~4,359 sq.ft.)</option>
                <option value="Tower A">Tower A — 4 BHK Premium (~5,962 sq.ft.)</option>
                <option value="6BHK">6 BHK / Duplex / Penthouse</option>
              </select>
              <button
                onClick={() => openModal()}
                className="bg-[#DCA54A] text-white font-semibold px-6 py-3 rounded uppercase hover:bg-[#c9943a] transition"
              >
                Email Me the Floor Plan PDF
              </button>
            </div>
          </div>
        </div>

        {/* H2 - Price Info */}
        <div className="text-center text-sm text-gray-500 mt-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Floor Plan Pricing
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Pricing for every configuration — from the boutique 4 BHK in Tower E to the flagship 4 BHK
            Premium in Tower A, the 5 BHK in Blocks H-01/I-01, and the curated 6 BHK / Duplex / Penthouse —
            is shared on a one-to-one basis to ensure you receive the most current offer for your tower and
            floor of choice.
          </p>
          <p className="mt-3">
            For the latest price for any configuration, visit the{" "}
            <Link href="/price" className="text-[#DCA54A] hover:underline">
              Price &amp; Configurations page
            </Link>{" "}
            or request a callback through the{" "}
            <Link href="/contact-us" className="text-[#DCA54A] hover:underline">
              Contact form
            </Link>.
          </p>
        </div>
      </div>

      {/* FLOOR PLAN MODAL */}
      {activePlan && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`${activePlan.type} Floor Plan`}
          onClick={() => setActivePlan(null)}
        >
          <div className="relative bg-white p-3 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setActivePlan(null)}
              className="absolute top-2 right-2 text-black text-xl hover:text-gray-600 z-10 bg-white/80 rounded-full w-8 h-8 flex items-center justify-center"
              aria-label="Close plan preview"
            >
              ✕
            </button>

            <div className="mb-3">
              <h3 className="text-lg font-bold text-gray-900">
                {activePlan.type}
              </h3>
              <p className="text-sm text-gray-600">
                {activePlan.size} · {activePlan.floors}
              </p>
            </div>

            <Image
              src={activePlan.image}
              alt={`${activePlan.type} Floor Plan - ${activePlan.size}`}
              className="w-full h-auto object-contain"
            />

            <div className="mt-3 flex flex-wrap gap-2">
              {activePlan.features.map((feature) => (
                <span key={feature} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* MASTER PLAN MODAL */}
      {isMasterOpen && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="The Islands by Gaurs Master Plan"
          onClick={() => setIsMasterOpen(false)}
        >
          <div className="relative bg-white p-4 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setIsMasterOpen(false)}
              className="absolute top-2 right-2 text-black text-xl hover:text-gray-600 z-10 bg-white/80 rounded-full w-8 h-8 flex items-center justify-center"
              aria-label="Close master plan"
            >
              ✕
            </button>

            <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">
              The Islands by Gaurs Master Plan
            </h3>

            <Image
              src={masterPlan}
              alt="The Islands by Gaurs Master Plan - Complete Boulevard Layout"
              className="w-full h-auto object-contain mb-4"
            />

            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="/master-plan.pdf"
                download
                className="bg-[#DCA54A] text-white text-sm px-6 py-3 rounded uppercase hover:bg-[#c9943a] transition"
                aria-label="Download Master Plan PDF"
              >
                📥 Download Master Plan PDF
              </a>
              <button
                onClick={() => {
                  setIsMasterOpen(false);
                  openModal();
                }}
                className="bg-gray-200 text-gray-700 text-sm px-6 py-3 rounded uppercase hover:bg-gray-300 transition"
              >
                Request Full Brochure
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
