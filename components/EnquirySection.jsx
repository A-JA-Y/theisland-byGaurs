"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import submitForm from "@/api/submitform";
import { theme } from "@/utils/theme";
import { InputField, TextareaField } from "@/components/form/InputFields";
import BrandLogo from "./BrandLogo";

export default function EnquirySection({
  logoAlt = "The Islands by Gaurs",
  heading = "27+ Years Of Unfaltering Commitment",
  body = "At The Islands by Gaurs, luxury isn't just built — it's beautifully lived. We don't just create structures; we craft timeless experiences that become cherished memories. With every heaven-piercing tower we design, our commitment to excellence climbs higher, delivering not just homes, but lifestyles defined by elegance and distinction. Only 506 condominiums, only two per floor — spaces shaped for those who choose to live apart. Step into a world where luxury knows no limits — step into the enduring legacy of Gaurs.",
}) {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "This field is required.";
    if (!form.phone.trim()) e.phone = "This field is required.";
    if (!form.email.trim()) e.email = "This field is required.";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Please enter a valid email.";
    return e;
  };

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  const e2 = validate();
  if (Object.keys(e2).length > 0) {
    setErrors(e2);
    return;
  }

  try {
    setLoading(true);
    setApiError("");

    await submitForm({ data: form });
    const link = document.createElement("a");
      link.href = "/brochure.pdf"; 
      link.setAttribute("download", "Brochure.pdf");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

    router.push('/thank-you');

  } catch (err) {
    setApiError("Something went wrong. Please try again.");
  } finally {
    setLoading(false);
  }
};
  return (
    <section id="book-site-visit" className={`${theme.bg} w-full md:px-[30px] md:py-[45px] px-[25px] py-5`}>
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row lg:gap-16">
        {/* Left: Brand info */}
        <div className="flex flex-col gap-5 md:w-1/2">
          {/* Logo */}
          <div data-reveal aria-label={logoAlt}>
            <BrandLogo size="lg" animated={false} />
          </div>

          {/* Heading */}
          <h4 className={`${theme.textPrimary} font-semibold`} data-reveal data-reveal-delay="1">{heading}</h4>

          {/* Body */}
          <p className={`${theme.fontBody} ${theme.textSecondary}`} data-reveal data-reveal-delay="2">{body}</p>

          <hr className="border-[#C8BFA0] w-[30%] mt-2 hidden lg:block" />
        </div>

        <hr className="border-[#C8BFA0] my-6 lg:hidden" />

        {/* Right: Enquiry form */}
        <div className="lg:w-1/2" data-reveal="right">
          {submitted ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 py-16 text-center">
              <svg className="w-12 h-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <p className={`${theme.fontHeading} ${theme.textPrimary}`}>Thank you!</p>
              <p className={`${theme.fontBody} ${theme.textMuted}`}>Our team will get back to you shortly.</p>
            </div>
          ) : (
            <>
              <h6 className={`${theme.fontLabel} uppercase ${theme.accent} mb-3`}>Enquire Now</h6>
              <h6 className={`${theme.fontSubheading} ${theme.textPrimary} mb-4`}>
                Wish to get a call back from our team? Fill in your details.
              </h6>

              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3">
                <InputField
                  id="gaurs-name"
                  type="text"
                  placeholder="Enter your name *"
                  value={form.name}
                  onChange={handleChange("name")}
                  error={errors.name}
                  maxLength={100}
                />

                <InputField
                  id="gaurs-phone"
                  type="tel"
                  placeholder="Phone number *"
                  value={form.phone}
                  onChange={handleChange("phone")}
                  error={errors.phone}
                  maxLength={15}
                />

                <InputField
                  id="gaurs-email"
                  type="email"
                  placeholder="Email ID *"
                  value={form.email}
                  onChange={handleChange("email")}
                  error={errors.email}
                />

                {apiError && <p className="text-red-500 text-sm">{apiError}</p>}

                <div className="pt-1">
                  <button
                    type="submit"
                    disabled={loading}
                    className={[
                      "btn-sheen px-7 py-2.5 rounded bg-[#DCA54A]",
                      theme.fontButton,
                      "text-white uppercase cursor-pointer",
                      loading ? "opacity-70 cursor-not-allowed" : ""
                    ].join(" ")}
                  >
                    {loading ? (
                      <span className="inline-flex items-center gap-2">
                        <span className="w-3.5 h-3.5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                        Submitting...
                      </span>
                    ) : (
                      "Submit"
                    )}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
