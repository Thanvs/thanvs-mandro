import React, { useState } from "react";
// this component handles the email functions.
// change according to your use.
const ContactForm = () => {
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email } = formData;

    if (!email) {
      const emailInput = document.getElementById("email");
      emailInput.classList.add("invalid");
      return false;
    }

    // Perform AJAX request here
    // Simulating success and failure responses
    const simulateSuccess = () => {
      setMessage("Your message was sent successfully.");
      setSuccessMessage("Your message was sent successfully.");
      setTimeout(() => {
        setMessage("");
      }, 3000);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    };

    const simulateFailure = () => {
      setMessage("Failed to send message. Please try again.");
      setErrorMessage("Failed to send message. Please try again.");
      setTimeout(() => {
        setMessage("");
      }, 3000);
    };

    // Simulating the AJAX request response
    // Replace this with your actual AJAX call
    const simulateAJAXRequest = () => {
      const isSuccess = Math.random() < 0.8; // 80% success rate
      if (isSuccess) {
        simulateSuccess();
      } else {
        simulateFailure();
      }
    };

    simulateAJAXRequest();
  };
  return (
    <div className="contact-form">
      <h3>GET IN TOUCH</h3>

      <form onSubmit={handleSubmit}>
        <div
          className={`alert ${
            successMessage ? "alert-success" : "alert-danger"
          } messenger-box-contact__msg`}
          style={{ display: message ? "block" : "none" }}
          role="alert"
        >
          {message}
        </div>

        <div className="input-group">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-group">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-group">
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-group">
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="input-group">
          <button className="theme-btn submit-btn" type="submit">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
