import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import EmiCalculator from "@/components/EmiCalculator";
import ReasonsToInvest from "@/components/ReasonToInvest";
import StickyDownloadButton from "@/components/StickyButton";

export const metadata: Metadata = {
  title: "Price & Configurations | The Islands by Gaurs, Greater Noida",
  description:
    "Get the latest price list and configurations for The Islands by Gaurs at Jaypee Greens. 4, 5 & 6 BHK luxury condominiums starting from 3,595 sq.ft.",
  alternates: { canonical: "https://www.theislandsbygaurs.in/price" },
  keywords: "The Islands by Gaurs price, The Islands by Gaurs configurations, Jaypee Greens condominium price, The Islands by Gaurs Pari Chowk",
};

const priceTable = [
  { type: "4 BHK", tower: "E", size: "~3,595 sq.ft.", floors: "Stilt + 34", price: "On Request" },
  { type: "4 BHK", tower: "C / H", size: "~4,077 sq.ft.", floors: "Stilt + 23", price: "On Request" },
  { type: "4 BHK", tower: "B / I", size: "~4,835 sq.ft.", floors: "Stilt + 23", price: "On Request" },
  { type: "5 BHK", tower: "H-01 / I-01", size: "~4,359 sq.ft. (carpet 2,473)", floors: "Stilt + 23", price: "On Request" },
  { type: "4 BHK Premium", tower: "A", size: "~5,962 sq.ft.", floors: "Stilt + 35", price: "On Request" },
  { type: "6 BHK / Duplex / Penthouse", tower: "Select", size: "6,000+ sq.ft.", floors: "Top floors", price: "On Request" },
];

export default function PricePage() {
  return (
    <>
      <PageBanner
        eyebrow="Investment"
        title="Configurations & Pricing"
        subtitle="The Islands by Gaurs — 4, 5 & 6 BHK Luxury Condominiums at Jaypee Greens, Greater Noida"
      />

      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-12">

          <div className="prose max-w-none text-gray-700">
            <h1 className="text-3xl font-semibold text-gray-900 mb-6 border-b pb-4">The Islands by Gaurs — Configurations &amp; Pricing</h1>
            <p className="text-lg leading-relaxed mb-6">
              The Islands by Gaurs offers four core configurations — from a <strong>3,595 sq.ft.</strong>{" "}
              four-bedroom residence to a <strong>5,962 sq.ft.</strong> signature home, plus curated
              duplexes and penthouses for those who want even more. The project is a RERA-registered
              development under <strong>UPRERAPRJ734569</strong>, set across 9 towers with only 506
              condominiums in total. Pricing is shared on a one-to-one basis to ensure you get the most
              current offer applicable to your floor and tower of choice.
            </p>
            <Link
              href="/contact-us"
              className="inline-block text-[#c8922a] hover:underline font-semibold"
            >
              Get the Latest Price Sheet &rarr;
            </Link>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Configuration Table</h2>
            <p className="mb-6 text-gray-700">The table below covers every configuration at The Islands by Gaurs, with tower, saleable area, floor range and pricing status.</p>
            <div className="overflow-x-auto rounded-lg border border-[#e5dcc5] shadow-sm mb-4">
              <table className="w-full text-sm text-left">
                <thead className="bg-[#FAF8F4] text-[#c8922a] uppercase text-xs tracking-wider">
                  <tr>
                    <th className="px-5 py-4">Type</th>
                    <th className="px-5 py-4">Tower</th>
                    <th className="px-5 py-4">Saleable Area</th>
                    <th className="px-5 py-4">Floors</th>
                    <th className="px-5 py-4">Pricing</th>
                  </tr>
                </thead>
                <tbody>
                  {priceTable.map((row) => (
                    <tr key={row.type + row.tower} className="border-t border-[#e5dcc5]">
                      <td className="px-5 py-4 font-semibold text-gray-900">{row.type}</td>
                      <td className="px-5 py-4 text-gray-600">{row.tower}</td>
                      <td className="px-5 py-4 text-gray-600">{row.size}</td>
                      <td className="px-5 py-4 text-gray-600">{row.floors}</td>
                      <td className="px-5 py-4 text-gray-800 font-semibold">{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed mb-6 italic">
              *Areas are indicative and subject to change. Please contact our team for the latest
              availability, payment plans, and the official price list.
            </p>
            <Link
              href="/contact-us"
              className="inline-block text-[#c8922a] hover:underline font-semibold"
            >
              Request the Official Price List &rarr;
            </Link>
          </div>

          <div className="prose max-w-none text-gray-700">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">What&apos;s Included in Every Residence</h2>
            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li>Two condominiums per floor — never more</li>
              <li>Golf-course-facing on one side, Pari Chowk-facing on the other</li>
              <li>Large family lounge in addition to the formal living room</li>
              <li>Walk-in closets in master suites</li>
              <li>Utility balcony separate from leisure balconies</li>
              <li>Premium imported sanitaryware and fittings</li>
              <li>Modular kitchen provisions</li>
            </ul>
            <Link href="/floor-plans" className="text-[#c8922a] hover:underline font-semibold">Check floor plans</Link>
          </div>

          <div className="prose max-w-none text-gray-700">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Payment Plan</h2>
            <p className="mb-4">
              Multiple flexible payment plans are available — Down Payment Plan, Construction-Linked Plan
              and Subvention Schemes. Bank tie-ups with leading lenders are in place for instant home loan
              eligibility.
            </p>
            <p className="mb-4">Use the EMI calculator below to estimate your monthly outflow based on loan amount, down payment, tenure, and interest rate.</p>
            <p className="italic text-sm text-gray-500 mb-6">(EMI figures are indicative and for planning purposes only; actual rates depend on your lender and profile.)</p>
          </div>

          <div className="bg-[#FAF8F4] p-6 rounded-lg border border-[#e5dcc5] text-sm text-gray-600 space-y-2">
            <p><strong>Project:</strong> The Islands by Gaurs, Jaypee Greens, Pari Chowk, Greater Noida, Uttar Pradesh</p>
            <p><strong>Developer:</strong> Gaurs Group</p>
            <p><strong>RERA:</strong> UPRERAPRJ734569 — verify at up-rera.in/projects</p>
            <p><strong>Contact:</strong> +91 9810890353</p>
          </div>

          <div className="text-center pt-4 border-t border-[#e5dcc5]">
            <Link
              href="/contact-us"
              className="inline-block bg-[#DCA54A] hover:bg-[#C49A2B] text-white text-base font-semibold tracking-widest uppercase px-10 py-4 rounded-md transition-colors shadow-md"
            >
              Get the Latest Price Sheet
            </Link>
          </div>
        </div>
      </section>

      <EmiCalculator />
      <ReasonsToInvest />
      <div className="relative">
        <StickyDownloadButton />
      </div>
    </>
  );
}
