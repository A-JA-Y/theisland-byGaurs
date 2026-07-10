import { FaMapMarkerAlt, FaPlane, FaRoad, FaGolfBall, FaBuilding, FaConciergeBell, FaCouch, FaShieldAlt } from "react-icons/fa";

export default function ReasonsToInvest() {
  return (
    <section className="w-full bg-[#FAF8F4] py-16 px-6" id="investment">
      <div className="max-w-5xl mx-auto flex flex-col gap-10">

        {/* Heading */}
        <div className="text-center">
          <p className="uppercase text-xs tracking-widest text-[#DCA54A] mb-3">
            Reasons to Invest
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            A Smart Investment Opportunity in Greater Noida
          </h2>

          <p className="text-gray-600 text-sm mt-4 max-w-2xl mx-auto">
            This project offers a perfect blend of location advantage, premium lifestyle,
            and long-term appreciation potential.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-10 md:px-[8rem]">

          {/* Left: Key Reasons */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              Key Reasons
            </h4>

            <ul className="space-y-4">
              {[
                { icon: <FaMapMarkerAlt />, text: "Prime location in Greater Noida" },
                { icon: <FaPlane />, text: "Close to upcoming Noida International Airport" },
                { icon: <FaRoad />, text: "Strong road and metro connectivity" },
                { icon: <FaGolfBall />, text: "Premium golf course lifestyle" },
                { icon: <FaBuilding />, text: "High-quality construction" },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="text-[#DCA54A] text-lg">{item.icon}</span>
                  <span className="text-gray-800 text-sm">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Additional Value */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              Additional Value
            </h4>

            <ul className="space-y-4">
              {[
                { icon: <FaConciergeBell />, text: "Concierge services" },
                { icon: <FaCouch />, text: "Fully furnished options" },
                { icon: <FaShieldAlt />, text: "Trusted developer brand" },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="text-[#DCA54A] text-lg">{item.icon}</span>
                  <span className="text-gray-800 text-sm">{item.text}</span>
                </li>
              ))}
            </ul>

            {/* Closing */}
         
          </div>
               
        </div>
          <p className="text-gray-600 text-sm mt-6 leading-relaxed text-center">
              For buyers, this means comfort and a premium lifestyle. For investors,
              it offers strong long-term growth and appreciation potential.
            </p>
      </div>
    </section>
  );
}