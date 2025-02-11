import { useState } from "react";
import SponsorForm from "./SponsorForm.jsx";
import ExhibitorForm from "./ExhibitorForm.jsx";
import ExhibitorNSponsorForm from "./ExhibitorNSponsorForm.jsx";

export default function Page2() {
  const [formData, setFormData] = useState({
    companyName: "",
    companyAddress: "",
    companyPhone: "",
    companyWebsite: "",
    companyLinkedin: "",
    companyFanpage: "",
    companyCareerPage: "",
    companyLogo: null,
    videoLink: "",
    companyIntroduction: "",
    registrationType: "Exhibitor",
    sponsorLevel: "",
    boothSize: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      companyLogo: file,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="container2">
      <h2>Industry Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Company's Name:</label>
          <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} required />
        </div>
        <div>
          <label>Company's Address:</label>
          <input type="text" name="companyAddress" value={formData.companyAddress} onChange={handleChange} required />
        </div>
        <div>
          <label>Company's Phone Number:</label>
          <input type="tel" name="companyPhone" value={formData.companyPhone} onChange={handleChange} required />
        </div>
        <div>
          <label>Company's Website:</label>
          <input type="url" name="companyWebsite" value={formData.companyWebsite} onChange={handleChange} />
        </div>
        <div>
          <label>Company's Linkedin:</label>
          <input type="url" name="companyLinkedin" value={formData.companyLinkedin} onChange={handleChange} />
        </div>
        <div>
          <label>Company's Fanpage:</label>
          <input type="url" name="companyFanpage" value={formData.companyFanpage} onChange={handleChange} />
        </div>
        <div>
          <label>Company Career Pages:</label>
          <input type="url" name="companyCareerPage" value={formData.companyCareerPage} onChange={handleChange} />
        </div>
        <div>
          <label>Company's Logo:</label>
          <input type="file" name="companyLogo" accept="image/*" onChange={handleFileChange} required />
        </div>
        <div>
          <label>Video Link:</label>
          <input type="url" name="videoLink" value={formData.videoLink} onChange={handleChange} required />
        </div>
        <div>
          <label>30-60 second video introducing your company:</label>
          <textarea name="companyIntroduction" value={formData.companyIntroduction} onChange={handleChange} required />
        </div>
        <div>
          <label>Register as:</label>
          <select name="registrationType" value={formData.registrationType} onChange={handleChange}>
            <option value="Exhibitor">Exhibitor</option>
            <option value="Sponsor">Sponsor</option>
            <option value="Booth Exhibitor and Sponsor">Booth Exhibitor and Sponsor</option>
            <option value="Visitor">Visitor</option>
          </select>
        </div>

        {/* Conditional Fields */}
        {formData.registrationType === "Exhibitor" && <ExhibitorForm formData={formData} handleChange={handleChange} />}
        {formData.registrationType === "Sponsor" && <SponsorForm formData={formData} handleChange={handleChange} />}
        {formData.registrationType === "Booth Exhibitor and Sponsor" && <ExhibitorNSponsorForm formData={formData} handleChange={handleChange} />}
        {formData.registrationType === "Visitor" && <ExhibitorForm formData={formData} handleChange={handleChange} />}
      </form>
    </div>
  );
}
