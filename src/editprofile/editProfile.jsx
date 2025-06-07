import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // ← الخطوة 1

const EditProfile = () => {
  const navigate = useNavigate(); // ← الخطوة 2

  const [formData, setFormData] = useState({
    name: "SELINA",
    email: "Farahatarek8988@gmail.com",
    phone: "5432123467654",
    address: "New Cairo, Cairo, Egypt",
  });

  useEffect(() => {
    const savedData = localStorage.getItem("profileData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("profileData", JSON.stringify(formData));

    navigate("/UserProfile"); 
  };

  return (
    <div className="min-h-screen bg-[#f2f2f0] flex justify-center items-center px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-md shadow-md w-full max-w-md"
      >
        <h2 className="text-xl font-bold mb-6 text-[#514232]">Edit Profile</h2>

        <label className="block mb-2 text-sm">Name</label>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border p-2 mb-4 rounded"
        />

        <label className="block mb-2 text-sm">Email</label>
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border p-2 mb-4 rounded"
        />

        <label className="block mb-2 text-sm">Phone</label>
        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border p-2 mb-4 rounded"
        />

        <label className="block mb-2 text-sm">Address</label>
        <input
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="w-full border p-2 mb-6 rounded"
        />

        <button
          type="submit"
          className="bg-[#514232] text-white px-4 py-2 rounded w-full"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
