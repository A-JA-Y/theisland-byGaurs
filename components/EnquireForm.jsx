"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import submitForm from "@/api/submitform";
import { InputField, TextareaField } from "@/components/form/InputFields";

const configurationOptions = ["4 BHK", "5 BHK", "6 BHK", "Duplex", "Penthouse", "Just Exploring"];
const towerOptions = ["Tower A", "Tower B", "Tower C", "Tower E", "Tower H", "Tower I", "No Preference"];
const timelineOptions = ["Immediately", "Within 3 months", "3–6 months", "Just exploring"];

export default function EnquireForm() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    configuration: "",
    tower: "",
    timeline: "",
    message: "",
    consent: false,
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "This field is required.";
    if (!form.phone.trim()) e.phone = "This field is required.";
    if (!form.email.trim()) e.email = "This field is required.";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Please enter a valid email.";
    if (!form.consent) e.consent = "Please provide consent to be contacted.";
    return e;
  };

  const handleChange = (field) => (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setForm((prev) => ({ ...prev, [field]: value }));
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

      router.push("/thank-you");
    } catch (err) {
      setApiError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const selectClass =
    "w-full rounded-md px-3 py-2.5 bg-[#EDE8D8] border border-[#C8BFA0] focus:outline-none focus:ring-2 focus:ring-[#B8892A]/40 focus:border-[#B8892A] text-[#1A1A1A] text-sm transition-colors duration-200";

  return (
    <form onSubmit={handleSubmit} noValidate className="bg-white rounded-xl shadow-lg p-6 md:p-8 flex flex-col gap-4">
      <InputField
        id="enquire-name"
        type="text"
        placeholder="Full Name *"
        value={form.name}
        onChange={handleChange("name")}
        error={errors.name}
        maxLength={100}
      />

      <div className="grid sm:grid-cols-2 gap-4">
        <InputField
          id="enquire-phone"
          type="tel"
          placeholder="Phone Number *"
          value={form.phone}
          onChange={handleChange("phone")}
          error={errors.phone}
          maxLength={15}
        />
        <InputField
          id="enquire-email"
          type="email"
          placeholder="Email Address *"
          value={form.email}
          onChange={handleChange("email")}
          error={errors.email}
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <select
            value={form.configuration}
            onChange={handleChange("configuration")}
            className={selectClass}
            aria-label="Preferred Configuration"
          >
            <option value="">Preferred Configuration</option>
            {configurationOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <select
            value={form.tower}
            onChange={handleChange("tower")}
            className={selectClass}
            aria-label="Preferred Tower"
          >
            <option value="">Preferred Tower (optional)</option>
            {towerOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <select
          value={form.timeline}
          onChange={handleChange("timeline")}
          className={selectClass}
          aria-label="When are you planning to buy?"
        >
          <option value="">When are you planning to buy?</option>
          {timelineOptions.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>

      <TextareaField
        id="enquire-message"
        placeholder="Message / Specific Requirements (optional)"
        value={form.message}
        onChange={handleChange("message")}
        rows={3}
      />

      <label className="flex items-start gap-2 text-xs text-gray-600 leading-relaxed">
        <input
          type="checkbox"
          checked={form.consent}
          onChange={handleChange("consent")}
          className="mt-0.5"
        />
        I authorise the Gaurs project team to contact me via call / SMS / WhatsApp / email.
      </label>
      {errors.consent && <p className="text-red-500 text-xs -mt-2">{errors.consent}</p>}

      {apiError && <p className="text-red-500 text-sm">{apiError}</p>}

      <button
        type="submit"
        disabled={loading}
        className={`px-7 py-3 rounded-md bg-[#DCA54A] text-white text-sm font-semibold tracking-widest uppercase transition-colors duration-200 hover:bg-[#C49A2B] ${
          loading ? "opacity-70 cursor-not-allowed" : ""
        }`}
      >
        {loading ? "Submitting..." : "Request a Call Back"}
      </button>
    </form>
  );
}
