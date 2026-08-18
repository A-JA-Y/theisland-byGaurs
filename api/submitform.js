import API from "./api";

const REQUIRED_FIELDS = ["name", "email", "phone"];

const submitForm = async ({ data }) => {
  try {
    const missing = REQUIRED_FIELDS.filter(
      (field) => !String(data?.[field] ?? "").trim()
    );

    if (missing.length > 0) {
      throw new Error(`Missing required field(s): ${missing.join(", ")}`);
    }

    const response = await API.post("/godrejgolf/submit-lead", {...data, site:"islandbygaurs"});

    
    console.log("Form submitted successfully:", response);

    return response;
  } catch (error) {
    console.error("Error submitting form:", error);
    throw error; 
  }
};

export default submitForm;
