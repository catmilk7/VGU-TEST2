import React, { useRef, useState } from "react";

export default function Section3({ formData, setFormData }) {

  const nameRef = useRef();
  const departmentRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const inquiriesRef = useRef();
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const name = nameRef.current.value.trim();
    const email = emailRef.current.value.trim();

    if (!name || !email) {
      setError("Full name and email are required.");
      return;
    }

    const data = {
      fullName: name,
      department: departmentRef.current?.value || "",
      email: email,
      phone: phoneRef.current?.value || "",
      inquiries: inquiriesRef.current?.value || "",
    };

    console.log("Contact Person Information Submitted:", data);
  };

  return (
    <div className="container3">
      <h1>Contact Person Information</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Contact Person's Full Name *: </label>
          <input type="text" ref={nameRef} placeholder="Ex: Mr. Nguyễn Văn A" required />
        </div>
        <div>
          <label>Contact Person's Department: </label>
          <input type="text" ref={departmentRef} />
        </div>
        <div>
          <label>Contact Person's Email *: </label>
          <input type="email" ref={emailRef} required />
        </div>
        <div>
          <label>Contact Person's Phone Number: </label>
          <input type="tel" ref={phoneRef} />
        </div>
        <div>
          <label>Special Inquiries: </label>
          <textarea ref={inquiriesRef}></textarea>
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
};

  