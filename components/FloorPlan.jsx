"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

import plan1 from "@/assets-islandbygaurs/images/1.webp";
import plan2 from "@/assets-islandbygaurs/images/2.webp";
import plan3 from "@/assets-islandbygaurs/images/3.webp";
import plan4 from "@/assets-islandbygaurs/images/4.webp";
import masterPlan from "@/assets-islandbygaurs/images/5.webp";

import { useModal } from "./ModalContext";

export default function PlansSection() {
  const { openModal, isLeadSubmitted } = useModal();
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [activePlan, setActivePlan] = useState(null);
  const [isMasterOpen, setIsMasterOpen] = useState(false);

  useEffect(() => {
    if (isLeadSubmitted) {
      setIsUnlocked(true);
      localStorage.setItem("plansUnlocked", "true");
    } else {
      const saved = localStorage.getItem("plansUnlocked");
      if (saved === "true") setIsUnlocked(true);
    }
  }, [isLeadSubmitted]);

  const plans = [plan1, plan2, plan3, plan4];

  return (
    <section  className="w-full  py-16 px-6" id="plans">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">

        {/* Heading */}
        <div className="text-center">
          <h6 className="uppercase text-xs tracking-widest text-[#DCA54A] mb-3">
            Floor Plans
          </h6>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Layouts Designed Around the Way You Live
          </h2>
        </div>

        {/* FLOOR PLAN GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {plans.map((img, i) => (
            <div
              key={i}
              className="relative rounded-md overflow-hidden shadow-md group cursor-pointer"
              onClick={() => {
                if (!isUnlocked) {
                  openModal();
                } else {
                  setActivePlan(img);
                }
              }}
            >
              <Image
                src={img}
                alt={`The Islands by Gaurs Floor Plan ${i + 1}`}
                className={`w-full h-[140px] object-cover transition duration-500 ${
                  !isUnlocked ? "blur-[1px] scale-105" : "group-hover:scale-105"
                }`}
              />

              {!isUnlocked && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-white text-xs">
                  Unlock
                </div>
              )}
            </div>
          ))}
        </div>

        {/*  MASTER PLAN SUBSECTION */}
        <div className="flex flex-col items-center text-center mt-6">

          {/* Sub heading */}
          <h6 className="text-xl md:text-2xl font-semibold  mb-2 text-[#dca54a]">
            Master Plan
          </h6>

          <p className="text-gray-600 text-sm mb-6 max-w-lg">
            Get a complete overview of the 9-tower boulevard layout including
            the golf course frontage, amenity zones, and infrastructure planning.
          </p>

          {/* Card */}
          <div
            className="relative w-full md:w-[70%] rounded-lg overflow-hidden shadow-lg cursor-pointer group"
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
              alt="The Islands by Gaurs Master Plan"
              className="w-full h-[260px] md:h-[320px] object-cover blur-[1px] scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 text-white">
              <p className="text-lg font-semibold">Master Plan</p>
              <p className="text-sm mt-1">
                {isUnlocked ? "Click to View & Download" : "Unlock to Access"}
              </p>

              <button className="mt-4 bg-[#DCA54A] text-white text-xs px-6 py-2 rounded uppercase">
                {isUnlocked ? "View Plan" : "Unlock Now"}
              </button>
            </div>

            {/* Premium badge */}
            <span className="absolute top-3 left-3 bg-[#DCA54A] text-white text-[10px] px-2 py-1 rounded">
              Premium
            </span>
          </div>
        </div>
      </div>

      {/* FLOOR PLAN MODAL */}
      {activePlan && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="relative bg-white p-3 rounded-lg max-w-3xl w-full">
            <button
              onClick={() => setActivePlan(null)}
              className="absolute top-2 right-2 text-black text-xl"
            >
              ✕
            </button>

            <Image
              src={activePlan}
              alt="Plan Preview"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      )}

      {/* MASTER PLAN MODAL */}
      {isMasterOpen && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
          <div className="relative bg-white p-4 rounded-lg max-w-4xl w-full text-center">

            <button
              onClick={() => setIsMasterOpen(false)}
              className="absolute top-2 right-2 text-black text-xl"
            >
              ✕
            </button>

            <Image
              src={masterPlan}
              alt="Master Plan"
              className="w-full h-auto object-contain mb-4"
            />

            <a
              href="/master-plan.pdf"
              download
              className="inline-block bg-[#DCA54A] text-white text-xs px-6 py-3 rounded uppercase"
            >
              Download Master Plan
            </a>
          </div>
        </div>
      )}
    </section>
  );
}