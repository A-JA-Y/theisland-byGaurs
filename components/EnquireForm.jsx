"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import submitForm from "@/api/submitform";
import { InputField } from "@/components/form/InputFields";

export default function EnquireForm() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
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
    return e;
  };

  const handleChange = (field) => (e) => {
    const value = e.target.value;
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

  return (
    <form onSubmit={handleSubmit} noValidate className="bg-white rounded-xl shadow-lg p-6 md:p-8 flex flex-col gap-4">
      <InputField
        id="enquire-name"
        type="text"
        placeholder="Your Name *"
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
          placeholder="Email ID *"
          value={form.email}
          onChange={handleChange("email")}
          error={errors.email}
        />
      </div>

      {apiError && <p className="text-red-500 text-sm">{apiError}</p>}

      <button
        type="submit"
        disabled={loading}
        className={`px-7 py-3 rounded-md bg-[#DCA54A] text-white text-sm font-semibold tracking-widest uppercase transition-colors duration-200 hover:bg-[#C49A2B] ${
          loading ? "opacity-70 cursor-not-allowed" : ""
        }`}
      >
        {loading ? "Submitting..." : "Book Site Visit"}
      </button>
    </form>
  );
}
