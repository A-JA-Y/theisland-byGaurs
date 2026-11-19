// Areas for three homes at The Islands by Gaurs, as given in the carpet-area guide.
// Saleable areas are indicative (site floor plans). Carpet for Tower A and Towers B & I
// is from the UP RERA record (297 and 244 sq. m) converted at 10.764 sq. ft. per sq. m.
// `factor` and `loading` are the rounded figures the guide quotes.
export const HOMES = [
  { key: "a", name: "Tower A", saleable: 5962, carpet: 3197, carpetPct: 54, loading: 86, factor: 1.86, balconies: 3 },
  { key: "bi", name: "Towers B and I", saleable: 4835, carpet: 2626, carpetPct: 54, loading: 84, factor: 1.84 },
  { key: "h01", name: "H-01 and I-01", saleable: 4359, carpet: 2473, carpetPct: 57, loading: 76, factor: 1.76, balconies: 3 },
];

export const NCR_AVERAGE_LOADING = 41;

export const fmt = (n) => Math.round(n).toLocaleString("en-IN");
