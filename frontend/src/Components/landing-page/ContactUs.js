import React from "react";
import "./ContactUs.css";
import customerCareAssistant from "./customerCareAssistant.png";

function ContactUs() {
  return (
    <div className="contact-us-container">
      <h1 className="title">CashFlow Customer Care</h1>
      <div className="content-container">
        <img
          className="customer-care-assistant"
          src={customerCareAssistant}
          alt="Customer Care Assistant"
        />
        <div className="text-container">
          <p>
            If you need help, have any questions, or would just like to provide
            feedback, there are a few ways that you can connect with our customer
            support team.
          </p>
          <button className="button">Find out More</button>
        </div>
      </div>
      <footer className="footer">
        <p>Terms and Conditions</p>
        <p>Copyright</p>
      </footer>
    </div>
  );
}

export default ContactUs;
