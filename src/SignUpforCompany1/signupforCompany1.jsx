import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUpForCompany1 = () => {
  const navigate = useNavigate();  // هنا بنجيب useNavigate

  const [formData, setFormData] = useState({
    representativeId: "",
    taxCertificate: null,
    commercialRegistration: "",
    companyWebsite: "",
    industry: "",
    companyLogo: null,
  });

  const [errors, setErrors] = useState({});

  const [taxFileName, setTaxFileName] = useState("");
  const [logoFileName, setLogoFileName] = useState("");

  const handleChange = (e) => {
    const { name, value, files, type } = e.target;
    if (type === "file") {
      setFormData((prev) => ({
        ...prev,
        [name]: files[0] || null,
      }));
      if (files[0]) {
        if (name === "taxCertificate") setTaxFileName(files[0].name);
        if (name === "companyLogo") setLogoFileName(files[0].name);
      } else {
        if (name === "taxCertificate") setTaxFileName("");
        if (name === "companyLogo") setLogoFileName("");
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.representativeId.trim()) {
      newErrors.representativeId = "Representative ID is required";
    }
    if (!formData.taxCertificate) {
      newErrors.taxCertificate = "Tax Certificate is required";
    }
    if (!formData.commercialRegistration.trim()) {
      newErrors.commercialRegistration = "Commercial Registration Number is required";
    }
    if (formData.companyWebsite && !/^https?:\/\/.+\..+/.test(formData.companyWebsite)) {
      newErrors.companyWebsite = "Company Website must be a valid URL";
    }
    if (!formData.industry.trim()) {
      newErrors.industry = "Industry is required";
    }
    if (!formData.companyLogo) {
      newErrors.companyLogo = "Company Logo is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // ممكن هنا تعمل API call أو تخزن بيانات
      console.log("Form submitted", formData);

      // بعد النجاح نوجه المستخدم على الصفحة الرئيسية مثلاً
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen bg-no-repeat bg-cover flex items-center justify-center bgLogin pb-10">
      <form
        onSubmit={handleSubmit}
        className="bg-[#f6f4f0] w-11/12 px-8 py-8 w-[620px] rounded-md shadow-md mt-20"
      >
        <h2 className="text-center text-[#4c3f35] text-2xl font-semibold mb-6">
          Create your account
        </h2>

        <div className="flex gap-4 mb-4">
          <div className="w-1/2">
            <label className="block text-sm text-[#4c3f35] mb-1">
              ID of Representative
            </label>
            <input
              type="text"
              name="representativeId"
              value={formData.representativeId}
              onChange={handleChange}
              className={`w-full border rounded-md p-3 text-sm bg-white outline-none ${
                errors.representativeId ? "border-red-500" : ""
              }`}
            />
            {errors.representativeId && (
              <p className="text-red-500 text-xs mt-1">{errors.representativeId}</p>
            )}
          </div>

          <div className="w-1/2">
            <label className="block text-sm text-[#4c3f35] mb-1">
              Tax Certificate or Official Document
            </label>
            <div className="relative">
              <input
                type="file"
                name="taxCertificate"
                onChange={handleChange}
                className="absolute inset-0 opacity-0 cursor-pointer z-10"
              />
              <div
                className={`w-full border rounded-md p-3 text-sm bg-white pointer-events-none ${
                  errors.taxCertificate ? "border-red-500" : ""
                }`}
              >
                {taxFileName || "Choose a file..."}
              </div>
            </div>
            {errors.taxCertificate && (
              <p className="text-red-500 text-xs mt-1">{errors.taxCertificate}</p>
            )}
          </div>
        </div>

        <div className="flex gap-4 mb-4">
          <div className="w-1/2">
            <label className="block text-sm text-[#4c3f35] mb-1">
              Commercial Registration Number
            </label>
            <input
              type="text"
              name="commercialRegistration"
              value={formData.commercialRegistration}
              onChange={handleChange}
              className={`w-full border rounded-md p-3 text-sm bg-white outline-none ${
                errors.commercialRegistration ? "border-red-500" : ""
              }`}
            />
            {errors.commercialRegistration && (
              <p className="text-red-500 text-xs mt-1">{errors.commercialRegistration}</p>
            )}
          </div>

          <div className="w-1/2">
            <label className="block text-sm text-[#4c3f35] mb-1">Company Website</label>
            <input
              type="url"
              name="companyWebsite"
              value={formData.companyWebsite}
              onChange={handleChange}
              placeholder="URL"
              className={`w-full border rounded-md p-3 text-sm bg-white outline-none ${
                errors.companyWebsite ? "border-red-500" : ""
              }`}
            />
            {errors.companyWebsite && (
              <p className="text-red-500 text-xs mt-1">{errors.companyWebsite}</p>
            )}
          </div>
        </div>

        <div className="flex gap-4 mb-6">
          <div className="w-1/2">
            <label className="block text-sm text-[#4c3f35] mb-1">Industry</label>
            <input
              type="text"
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              className={`w-full border rounded-md p-3 text-sm bg-white outline-none ${
                errors.industry ? "border-red-500" : ""
              }`}
            />
            {errors.industry && (
              <p className="text-red-500 text-xs mt-1">{errors.industry}</p>
            )}
          </div>

          <div className="w-1/2">
            <label className="block text-sm text-[#4c3f35] mb-1">Company Logo</label>
            <div className="relative">
              <input
                type="file"
                name="companyLogo"
                onChange={handleChange}
                className="absolute inset-0 opacity-0 cursor-pointer z-10"
              />
              <div
                className={`flex items-center justify-end w-full h-12 bg-[#F6F6F6] rounded-md px-4 border border-gray-200 pointer-events-none ${
                  errors.companyLogo ? "border-red-500" : ""
                }`}
              >
                {logoFileName || ""}
                <svg
                  width="24"
                  height="28"
                  viewBox="0 0 24 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.9827 19.3333C23.9827 19.1933 23.9773 19.052 23.9307 18.912L21.264 10.912C21.0827 10.3667 20.5747 10 20 10H14.6667V12.6667H19.0387L21.2613 19.3333H2.73867L4.96133 12.6667H9.33333V10H4C3.42533 10 2.91733 10.3667 2.736 10.912L0.0693334 18.912C0.0226667 19.052 0.0173333 19.1933 0.0173333 19.3333C1.49012e-08 19.3333 0 26 0 26C0 26.7373 0.596 27.3333 1.33333 27.3333H22.6667C23.404 27.3333 24 26.7373 24 26C24 26 24 19.3333 23.9827 19.3333Z"
                    fill="#A8A3A3"
                  />
                  <path
                    d="M17.3353 8.53867C17.6806 8.53867 18.0259 8.412 18.2779 8.16133C18.7979 7.64133 18.7979 6.796 18.2779 6.276L12.0019 0L5.72594 6.276C5.20594 6.796 5.20594 7.64133 5.72594 8.16133C5.97794 8.41333 6.32327 8.53867 6.6686 8.53867C7.01394 8.53867 7.35927 8.41333 7.61127 8.16133L10.6686 5.104V14C10.6686 14.736 11.2659 15.3333 12.0019 15.3333C12.7379 15.3333 13.3353 14.736 13.3353 14V5.104L16.3926 8.16133C16.6446 8.41333 16.9899 8.53867 17.3353 8.53867Z"
                    fill="#A8A3A3"
                  />
                </svg>
              </div>
            </div>
            {errors.companyLogo && (
              <p className="text-red-500 text-xs mt-1">{errors.companyLogo}</p>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-[#6f5e51] text-white py-3 rounded-md text-sm font-medium mb-4"
        >
          Sign Up
        </button>

        <p className="text-center text-sm text-[#4c3f35]">
          Already Have An Account?{" "}
          <Link to={"/login"}>
            <span className="underline cursor-pointer">Sign In</span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUpForCompany1;
