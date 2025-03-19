import React from "react";

const ReserveForm = ({ formData, setFormData, availableTimes, handleDateChange }) => {
  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agreeTerms) {
      alert("You must agree to the Terms and Conditions.");
      return;
    }
    console.log("Reservation Submitted:", formData);
    alert("Reservation Confirmed!");
  };

  // Handle form reset
  const handleReset = () => {
    setFormData({
      branch: "",
      date: "",
      time: "",
      guests: 1,
      occasion: "",
      name: "",
      email: "",
      phone: "",
      specialInstructions: "",
      agreeTerms: false,
    });
  };

  return (
    <form className="reserve-form" onSubmit={handleSubmit}>
      <label>
        Select Branch:
        <select name="branch" value={formData.branch} onChange={handleChange} required>
          <option value="">Select a branch</option>
          <option value="downtown">Downtown</option>
          <option value="uptown">Uptown</option>
          <option value="suburbs">Suburbs</option>
        </select>
      </label>

      <label>
        Choose Date:
        <input type="date" name="date" value={formData.date} onChange={handleDateChange} required />
      </label>

      <label>
        Choose Time:
        <select name="time" value={formData.time} onChange={handleChange} required>
          <option value="">Select a time</option>
          {availableTimes.map((time, index) => (
            <option key={index} value={time}>{time}</option>
          ))}
        </select>
      </label>

      <label>
        Number of Guests:
        <input type="number" name="guests" min="1" max="10" value={formData.guests} onChange={handleChange} required />
      </label>

      <label>
        Occasion:
        <select name="occasion" value={formData.occasion} onChange={handleChange}>
          <option value="">Select an occasion</option>
          <option value="birthday">Birthday</option>
          <option value="anniversary">Anniversary</option>
        </select>
      </label>

      <label>
        Full Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>

      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </label>

      <label>
        Phone Number:
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
      </label>

      <label>
        Special Instructions:
        <textarea name="specialInstructions" value={formData.specialInstructions} onChange={handleChange} />
      </label>

      <label className="checkbox-form">
        <input
          type="checkbox"
          name="agreeTerms"
          checked={formData.agreeTerms}
          onChange={handleChange}
          required
        />
        <span className="custom-checkbox"></span>
        I agree to the <a href="/terms">Terms and Conditions</a> & <a href="/privacy">Privacy Policy</a>.
      </label>

      <div className="button-form">
        <button type="submit">Reserve</button>
        <button type="button" onClick={handleReset}>Cancel</button>
      </div>
    </form>
  );
};

export default ReserveForm;
