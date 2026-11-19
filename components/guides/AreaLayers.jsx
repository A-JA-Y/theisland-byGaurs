/** Nested-rectangle diagram: what carpet area, outer walls + balconies and the common-area share add up to. */
export default function AreaLayers() {
  return (
    <figure className="my-10" data-reveal="zoom">
      <svg viewBox="0 0 640 380" className="h-auto w-full" role="img" aria-labelledby="area-layers-title">
        <title id="area-layers-title">
          Saleable area is carpet area plus outer walls and balconies, plus a share of the common areas
        </title>
        <defs>
          <pattern id="hatch" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="10" stroke="#e3d5ae" strokeWidth="4" />
          </pattern>
        </defs>
        {/* common share */}
        <rect x="8" y="8" width="624" height="364" rx="22" fill="url(#hatch)" stroke="#c9b27a" strokeDasharray="8 6" />
        <text x="30" y="42" fontSize="13" fill="#8a6b14" fontWeight="600" letterSpacing="1.5">SALEABLE / SUPER BUILT-UP AREA</text>
        <text x="30" y="62" fontSize="12" fill="#6b5a35">+ share of lobbies, lifts, staircases, club</text>
        {/* walls + balconies */}
        <rect x="58" y="82" width="524" height="262" rx="16" fill="#f1e3bd" stroke="#C49A2B" strokeWidth="2" />
        <text x="78" y="110" fontSize="12" fill="#6b5a35">+ outer walls and balconies</text>
        <rect x="430" y="94" width="138" height="34" rx="6" fill="#e3ecd8" stroke="#a9bf8f" />
        <text x="499" y="116" textAnchor="middle" fontSize="11" fill="#4f6b37">Balcony</text>
        {/* carpet */}
        <rect x="98" y="138" width="444" height="182" rx="10" fill="#1d1507" />
        <line x1="196" y1="138" x2="196" y2="320" stroke="#5a4520" strokeWidth="3" />
        <line x1="452" y1="138" x2="452" y2="252" stroke="#5a4520" strokeWidth="3" />
        <line x1="452" y1="252" x2="542" y2="252" stroke="#5a4520" strokeWidth="3" />
        <text x="320" y="222" textAnchor="middle" fontSize="22" fill="#F6E7C1" fontFamily="serif">Carpet area</text>
        <text x="320" y="248" textAnchor="middle" fontSize="12" fill="#DCA54A" letterSpacing="1.2">ROOMS + INTERNAL WALLS</text>
      </svg>
      <figcaption className="mt-3 text-center text-sm text-gray-500">
        Carpet sits inside the home. Saleable area wraps the walls, balconies and a share of the building around it.
      </figcaption>
    </figure>
  );
}
