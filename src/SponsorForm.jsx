import React, { useRef } from "react";

export default function SponsorForm() {

      const sponsorTypeRef = useRef();
      const giftDescriptionRef = useRef();
      const giftVerificationLinkRef = useRef();
      const receiptRef = useRef();
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        const data = {
          sponsorType: sponsorTypeRef.current.value,
          giftDescription: giftDescriptionRef.current?.value || "",
          giftVerificationLink: giftVerificationLinkRef.current?.value || "",
          receipt: receiptRef.current?.files || null,
        };
    
        console.log("Sponsorship submitted:", data);
      };
    
      return (
        <div className="container">
          <h1>Event Sponsor</h1>
          <h2>Sponsorship Form</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Please choose the form of sponsor: </label>
              <select ref={sponsorTypeRef} defaultValue="">
                <option value="">Select</option>
                <option value="Gifts">Gifts</option>
                <option value="Cash">Cash</option>
                <option value="Both">Both</option>
              </select>
            </div>
            <div>
              <label>Describe the gifts: </label>
              <textarea ref={giftDescriptionRef}></textarea>
              <label>Verification link for the gifts: </label>
              <input type="url" ref={giftVerificationLinkRef} />
            </div>
            <div>
              <h3>Bank Transfer Details:</h3>
              <p>Account Holder: TRUONG DAI HOC VIET DUC</p>
              <p>Account Number: 0371000402081</p>
              <p>Bank: JSC Bank for Foreign Trade of Viet Nam</p>
              <p>Address: 72 Pham Ngoc Thach Street, District 3, HCMC</p>
              <p>SWIFT/BIC: BFTV VNVX</p>
              <p>Remark: CFIED 2025_Company Name_Sponsorship Agreement request</p>
              <label>Upload payment receipt (Max 10MB per file, up to 5 files): </label>
              <input type="file" ref={receiptRef} accept="image/*" multiple />
            </div>
          </form>
        </div>
      );
};
    
  