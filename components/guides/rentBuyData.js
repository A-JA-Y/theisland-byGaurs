/**
 * Figures for the rent vs buy guide. One place so the table, the visuals and
 * the calculator always agree with the copy.
 */

export const EXAMPLE_PRICE = 9e7; // ₹9 crore, a round example in line with portal listings
export const MONTHLY_RENT = 1.3e5; // ₹1.3 lakh, a ~3,850 sq. ft. flat in Jaypee Greens
export const LOAN_RATE = 8; // % a year
export const LOAN_YEARS = 20;
export const RENT_RISE = 0.05; // 5% a year

export const GST_RATE = 0.05; // under-construction, outside the affordable bracket
export const STAMP_DUTY_RATE = 0.07; // UP sale deed, male buyer
export const REGISTRATION_RATE = 0.01;
export const MIN_DOWN_PCT = 25; // banks lend at most 75% on loans above ₹75 lakh
export const EMI_SHARE_OF_INCOME = 0.4; // EMI kept to 40% of take-home

/** Standard reducing-balance EMI. */
export function emi(principal, annualRatePct, years) {
  if (principal <= 0 || years <= 0) return 0;
  const n = Math.round(years * 12);
  const r = annualRatePct / 12 / 100;
  if (r === 0) return principal / n;
  const f = Math.pow(1 + r, n);
  return (principal * r * f) / (f - 1);
}

/** GST + stamp duty + registration: never part of the loan. */
export function buyingCosts(price) {
  const gst = price * GST_RATE;
  const stamp = price * (STAMP_DUTY_RATE + REGISTRATION_RATE);
  return { gst, stamp, total: gst + stamp };
}

export function plan(price, downPct, ratePct = LOAN_RATE, years = LOAN_YEARS) {
  const down = (price * downPct) / 100;
  const loan = Math.max(price - down, 0);
  const costs = buyingCosts(price);
  const monthly = emi(loan, ratePct, years);
  return {
    down,
    loan,
    costs,
    ownMoney: down + costs.total,
    emi: monthly,
    takeHome: monthly / EMI_SHARE_OF_INCOME,
  };
}

const trim = (s) => s.replace(/\.?0+$/, "");

/** ₹ in crore / lakh, the way Indian buyers read it. */
export function inr(v, { long = false, digits = 2 } = {}) {
  if (!Number.isFinite(v) || v <= 0) return "₹0";
  // tiny nudge so binary fractions like 1.365 round half-up, as people expect
  if (v >= 1e7) return `₹${trim((v / 1e7 + 1e-9).toFixed(digits))}${long ? " crore" : " Cr"}`;
  if (v >= 1e5) return `₹${trim((v / 1e5 + 1e-9).toFixed(digits))}${long ? " lakh" : " L"}`;
  return `₹${Math.round(v).toLocaleString("en-IN")}`;
}

/** The three ways to pay worked through in the guide (₹9 crore, 8%, 20 years). */
export const PLANS = [
  { key: "25", label: "25% down", downPct: 25, constructionInterest: "about ₹95 lakh" },
  { key: "50", label: "50% down", downPct: 50, constructionInterest: "about ₹63 lakh" },
  { key: "100", label: "Paid in full", downPct: 100, constructionInterest: "None" },
].map((p) => ({ ...p, ...plan(EXAMPLE_PRICE, p.downPct) }));

/** Rent paid between booking (Nov 2026) and possession (April 2030), rising 5% a year. */
export const WAIT_PERIODS = [
  { label: "Year 1", period: "Nov 2026 – Oct 2027", months: 12 },
  { label: "Year 2", period: "Nov 2027 – Oct 2028", months: 12 },
  { label: "Year 3", period: "Nov 2028 – Oct 2029", months: 12 },
  { label: "Last 5 months", period: "Nov 2029 – Mar 2030", months: 5 },
].map((p, i) => {
  const monthly = MONTHLY_RENT * Math.pow(1 + RENT_RISE, i);
  return { ...p, monthly, total: monthly * p.months };
});

export const WAIT_TOTAL = WAIT_PERIODS.reduce((s, p) => s + p.total, 0);

/** Break-even appreciation a year, over ten years from booking. */
export const BREAK_EVEN = {
  returns: [7, 9, 11],
  rows: [
    { label: "25% down", values: [7.2, 8.3, 9.4] },
    { label: "50% down", values: [7.3, 8.7, 10.2] },
    { label: "Paid in full at booking", values: [7.5, 9.6, 11.7] },
  ],
};
