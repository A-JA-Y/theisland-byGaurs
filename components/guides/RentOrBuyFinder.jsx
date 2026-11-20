"use client";

import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { useModal } from "@/components/ModalContext";

const RENT = [
  "You may leave Greater Noida within ten years",
  "You want to live in Jaypee Greens now, not in 2030",
  "Your money reliably earns more elsewhere than a home is likely to gain",
  "You’d rather not have ₹3.4 crore or more locked in one asset",
];

const BUY = [
  "This is your family’s home for the long term",
  "With a loan, your household takes home about ₹14 lakh a month or more at 25% down, or about ₹9.4 lakh at 50% down",
  "You want this particular home: two to a floor, with the golf course on one side",
  "You can leave your reserves untouched after paying",
];

function Statement({ text, checked, onToggle }) {
  return (
    <li>
      <button
        type="button"
        role="checkbox"
        aria-checked={checked}
        onClick={onToggle}
        className={`group flex w-full cursor-pointer items-start gap-3 rounded-xl border px-4 py-3.5 text-left text-[15px] leading-snug transition-all duration-300 ${
          checked
            ? "border-[#C49A2B] bg-[#FBF3DC] text-[#1a1a1a] shadow-[0_10px_24px_-16px_rgba(196,154,43,0.9)]"
            : "border-[#e5dcc5] bg-white text-gray-700 hover:border-[#C49A2B]/60"
        }`}
      >
        <span
          className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-colors ${
            checked ? "border-[#C49A2B] bg-[#C49A2B] text-white" : "border-[#cdb578] text-transparent group-hover:text-[#cdb578]"
          }`}
          aria-hidden="true"
        >
          <FaCheck size={10} />
        </span>
        {text}
      </button>
    </li>
  );
}

/**
 * The guide's "renting suits you if / buying suits you if" lists, made
 * tappable: the reader picks what sounds like them and sees which way they lean.
 */
export default function RentOrBuyFinder() {
  const { openModal } = useModal();
  const [picked, setPicked] = useState(() => new Set());
  const toggle = (key) =>
    setPicked((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });

  const rentScore = RENT.filter((_, i) => picked.has(`r${i}`)).length;
  const buyScore = BUY.filter((_, i) => picked.has(`b${i}`)).length;
  const total = rentScore + buyScore;
  // 0% = all rent, 100% = all buy
  const lean = total ? (buyScore / total) * 100 : 50;

  let verdict;
  if (!total) {
    verdict = { title: "Tap the statements that sound like you.", text: "Your answers will lean towards renting or buying." };
  } else if (rentScore > buyScore) {
    verdict = {
      title: "Your answers lean towards renting.",
      text: "Renting in Jaypee Greens keeps your options and your capital free. If your plans firm up, the break-even table shows what a home would need to gain.",
      action: { href: "#break-even", label: "See the break-even table" },
    };
  } else if (buyScore > rentScore) {
    verdict = {
      title: "Your answers lean towards buying.",
      text: "Decide the loan size with the long term in mind, and ask for the payment schedule in writing before you book.",
      action: { href: "#emi-calculator", label: "Run the EMI numbers" },
      modal: "Get the Payment Plan",
    };
  } else {
    verdict = {
      title: "You’re split down the middle.",
      text: "A bigger down payment lowers the EMI but raises the bar for breaking even. Run your own numbers before you decide.",
      action: { href: "#emi-calculator", label: "Try the calculator" },
      modal: "Talk It Through",
    };
  }

  return (
    <div className="mt-8">
      <div className="grid gap-8 md:grid-cols-2">
        <div data-reveal="left">
          <h3 className="font-display mb-4 text-2xl text-[#1a1a1a] md:text-[1.75rem]">Renting Usually Suits You If</h3>
          <ul className="space-y-3">
            {RENT.map((t, i) => (
              <Statement key={t} text={t} checked={picked.has(`r${i}`)} onToggle={() => toggle(`r${i}`)} />
            ))}
          </ul>
        </div>
        <div data-reveal="right">
          <h3 className="font-display mb-4 text-2xl text-[#1a1a1a] md:text-[1.75rem]">Buying Usually Suits You If</h3>
          <ul className="space-y-3">
            {BUY.map((t, i) => (
              <Statement key={t} text={t} checked={picked.has(`b${i}`)} onToggle={() => toggle(`b${i}`)} />
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 rounded-2xl bg-[#1d1507] p-6 text-white md:p-8" aria-live="polite">
        <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.25em] text-white/60">
          <span>Rent</span>
          <span>Buy</span>
        </div>
        <div className="relative mt-3 h-2 rounded-full bg-gradient-to-r from-[#6a9c4a] via-[#DCA54A] to-[#C49A2B]">
          <span
            className="absolute top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-[#1d1507] bg-[#F6E7C1] shadow-[0_0_0_4px_rgba(246,231,193,0.25)] transition-[left] duration-700 ease-[cubic-bezier(0.22,0.61,0.36,1)]"
            style={{ left: `${lean}%` }}
            aria-hidden="true"
          />
        </div>
        <div className="mt-6 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="font-display text-xl text-[#F6E7C1] md:text-2xl">{verdict.title}</p>
            <p className="mt-2 text-sm leading-relaxed text-white/70">{verdict.text}</p>
          </div>
          {verdict.action || verdict.modal ? (
            <div className="flex shrink-0 flex-wrap gap-3">
              {verdict.modal ? (
                <button
                  type="button"
                  onClick={() => openModal()}
                  className="btn-sheen cursor-pointer rounded-sm bg-[#C49A2B] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-white"
                >
                  {verdict.modal}
                </button>
              ) : null}
              {verdict.action ? (
                <a
                  href={verdict.action.href}
                  className="rounded-sm border border-white/40 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-white hover:text-[#1d1507]"
                >
                  {verdict.action.label}
                </a>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
      <p className="mt-3 text-xs italic text-gray-500">A prompt for your own thinking, not a recommendation.</p>
    </div>
  );
}
