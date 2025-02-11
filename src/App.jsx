import { useState } from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";

export default function FormPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
  });

  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  return (
    <div>
      {currentStep === 1 && <Section1 formData={formData} setFormData={setFormData} />}
      {currentStep === 2 && <Section2 formData={formData} setFormData={setFormData} />}
      {currentStep === 3 && <Section3 formData={formData} setFormData={setFormData} />}
      
      <div>
        {currentStep > 1 && <button onClick={prevStep}>Back</button>}
        {currentStep < 3 ? (
          <button onClick={nextStep}>Next</button>
        ) : (
          <button onClick={() => console.log(formData)}>Submit</button>
        )}
      </div>
    </div>
  );
}
