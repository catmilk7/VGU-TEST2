import React, { useState } from "react";

export default function Section3({ formData, setFormData }) {
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!formData.fullName || !formData.email) {
      setError("Full name and email are required.");
      return;
    }

    console.log("Contact Person Information Submitted:", formData);
  };

  return (
    <div className="container3">
      <h1>Contact Person Information</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Contact Person's Full Name *: </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName || ""}
            onChange={handleChange}
            placeholder="Ex: Mr. Nguyễn Văn A"
            required
          />
        </div>
        <div>
          <label>Contact Person's Department: </label>
          <input
            type="text"
            name="department"
            value={formData.department || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Contact Person's Email *: </label>
          <input
            type="email"
            name="email"
            value={formData.email || ""}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Contact Person's Phone Number: </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Special Inquiries: </label>
          <textarea
            name="inquiries"
            value={formData.inquiries || ""}
            onChange={handleChange}
          ></textarea>
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
}
