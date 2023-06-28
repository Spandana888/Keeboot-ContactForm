import React, { useState } from "react";
import "./ContactForm.css";
import ThanksCard from "../ThanksCard/ThanksCard";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    organization: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation
    const validationErrors = {};

    if (!formData.name.trim()) {
      validationErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      validationErrors.email = "Invalid Email format";
    }

    if (!formData.number.trim()) {
      validationErrors.number = "Number is required";
    } else if (formData.number.length > 10) {
      validationErrors.number = "Invalid Mobile Number";
    }

    if (!formData.organization.trim()) {
      validationErrors.organization = "Organization Name is required";
    }

    // Set the validation errors, if any
    setErrors(validationErrors);

    // Submit the form if no validation errors
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitted(true);
      // Reset the form
      setFormData({
        name: "",
        email: "",
        password: "",
        organization: "",
      });
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <React.Fragment>
      {!isSubmitted ? (
        <React.Fragment>
          <h2>Send us a message</h2>
          <p>Send us a message and we'll respond within 24 hours.</p>
          <form onSubmit={handleSubmit}>
            <div className="form-container">
              <div>
                <label htmlFor="name">
                  <strong>Full Name</strong>
                </label>
                <br />
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Type full name here"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <p className="errors">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email">
                  <strong>Email</strong>
                </label>
                <br />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Type email here"
                />
                {errors.email && <p className="errors">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="number">
                  <strong>Phone</strong>
                </label>
                <br />
                <input
                  type="number"
                  id="number"
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                  placeholder="Phone number"
                />
                {errors.number && <p className="errors">{errors.number}</p>}
              </div>
              <div>
                <label htmlFor="organization">
                  <strong>Organization</strong>
                </label>
                <br />
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  placeholder="Organization name"
                />
                {errors.organization && (
                  <p className="errors">{errors.organization}</p>
                )}
              </div>
            </div>
            <textarea placeholder="Type your message here"></textarea>
            <br />
            <button type="submit" className="submit-button">
              SUBMIT
            </button>
          </form>
        </React.Fragment>
      ) : (
        <ThanksCard />
      )}
    </React.Fragment>
  );
};

export default ContactForm;
