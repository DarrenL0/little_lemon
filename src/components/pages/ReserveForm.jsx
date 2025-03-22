import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateEmail } from "../utils/validateEmail";  // Your email validation function

const ReserveForm = ({ formData, setFormData, availableTimes, handleDateChange, submitForm }) => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
    
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validateInput(name, value),  // Validate input on every change
    }));
  };

  const validateInput = (name, value) => {
    switch (name) {
      case "email":
        return validateEmail(value) ? "" : "Please enter a valid email address";
      case "phone":
        return /^\d{10}$/.test(value) ? "" : "Please enter a 10-digit phone number";
      case "guests":
        return value >= 1 && value <= 10 ? "" : "Number of guests should be between 1 and 10";
      case "name":
        return value.length >= 2 ? "" : "Name must be at least 2 characters long";
      default:
        return "";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.agreeTerms) {
      alert("You must agree to the Terms and Conditions.");
      return;
    }

    console.log("Submitting form data:", formData);
    submitForm(formData);
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <form className="reserve-form" aria-label="Reservation Form" onSubmit={handleSubmit}>
  <h2>Reserve Your Table</h2>

  <label htmlFor="branch">
    Select Branch: <sup>*</sup>
    <select id="branch" name="branch" value={formData.branch} onChange={handleChange} required>
      <option value="">Select a branch</option>
      <option value="downtown">Downtown</option>
      <option value="uptown">Uptown</option>
      <option value="suburbs">Suburbs</option>
    </select>
  </label>

  <label htmlFor="date">
    Choose Date: <sup>*</sup>
    <input
      id="date"
      type="date"
      name="date"
      value={formData.date}
      onChange={handleDateChange}
      required
      min={new Date().toISOString().split("T")[0]}
      aria-describedby="date-info"
    />
  </label>

  <label htmlFor="time">
    Choose Time: <sup>*</sup>
    <select id="time" name="time" value={formData.time} onChange={handleChange} required>
      <option value="">Select a time</option>
      {availableTimes.map((time, index) => (
        <option key={index} value={time}>{time}</option>
      ))}
    </select>
  </label>

  <label htmlFor="guests">
    Number of Guests: <sup>*</sup>
    <input
      id="guests"
      type="number"
      name="guests"
      min="1"
      max="10"
      value={formData.guests}
      onChange={handleChange}
      required
      aria-describedby={errors.guests ? "guests-error" : ""}
    />
    {errors.guests && <p id="guests-error" className="FieldError">{errors.guests}</p>}
  </label>

  <label htmlFor="occasion">
    Occasion: <sup>*</sup>
    <select id="occasion" name="occasion" value={formData.occasion} onChange={handleChange} required>
      <option value="">Select an occasion</option>
      <option value="birthday">Birthday</option>
      <option value="anniversary">Anniversary</option>
    </select>
  </label>

  <label htmlFor="name">
    Full Name: <sup>*</sup>
    <input
      id="name"
      type="text"
      name="name"
      value={formData.name}
      onChange={handleChange}
      required
      minLength="2"
      title="Name must be at least 2 characters long"
    />
    {errors.name && <p id="name-error" className="FieldError">{errors.name}</p>}
  </label>

  <label htmlFor="email">
    Email: <sup>*</sup>
    <input
      id="email"
      type="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      required
      pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
      title="Please enter a valid email address"
    />
    {errors.email && <p id="email-error" className="FieldError">{errors.email}</p>}
  </label>

  <label htmlFor="phone">
    Phone Number: <sup>*</sup>
    <input
      id="phone"
      type="tel"
      name="phone"
      value={formData.phone}
      onChange={handleChange}
      required
      pattern="^\d{10}$"
      title="Please enter a 10-digit phone number"
    />
    {errors.phone && <p id="phone-error" className="FieldError">{errors.phone}</p>}
  </label>

  <label htmlFor="specialInstructions">
    Special Instructions:
    <textarea
      id="specialInstructions"
      name="specialInstructions"
      value={formData.specialInstructions}
      onChange={handleChange}
      maxLength="250"
    />
  </label>

  <label htmlFor="agreeTerms" className="checkbox-form">
    <input
      id="agreeTerms"
      type="checkbox"
      name="agreeTerms"
      checked={formData.agreeTerms}
      onChange={handleChange}
      required
    />
    <span className="custom-checkbox"></span>
    I agree to the <a href="/terms" aria-label="View Terms and Conditions">Terms and Conditions</a> & 
    <a href="/privacy" aria-label="View Privacy Policy">Privacy Policy</a>.
  </label>

  <div className="button-form">
    <button type="submit" aria-label="Submit the reservation form">Reserve</button>
    <button type="button" onClick={handleCancel} aria-label="Cancel the reservation">Cancel</button>
  </div>
</form>
  );
};

export default ReserveForm;
