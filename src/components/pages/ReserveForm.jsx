import { useState } from "react";


const ReserveForm = () => {
  const [formData, setFormData] = useState({
    branch: "",
    date: "",
    time: "",
    guests: 1,
    name: "",
    email: "",
    phone: "",
    specialInstructions: "",
    agreeTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agreeTerms) {
      alert("You must agree to the Terms and Conditions.");
      return;
    }
    console.log("Reservation Submitted:", formData);
    alert("Reservation Confirmed!");
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
        Date:
        <input type="date" name="date" value={formData.date} onChange={handleChange} required />
      </label>

      <fieldset>
        <legend>Time:</legend>
        <label>
          <input type="radio" name="time" value="lunch" checked={formData.time === "lunch"} onChange={handleChange} required />
          Lunch
        </label>
        <label>
          <input type="radio" name="time" value="dinner" checked={formData.time === "dinner"} onChange={handleChange} required />
          Dinner
        </label>
      </fieldset>

      <label>
        Number of Guests:
        <input type="number" name="guests" min="1" max="10" value={formData.guests} onChange={handleChange} required />
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

      <label>
        <input type="checkbox" name="agreeTerms" checked={formData.agreeTerms} onChange={handleChange} required />
        I agree to the <a href="/terms">Terms and Conditions</a> & <a href="/privacy">Privacy Policy</a>.
      </label>

      <button type="submit">Reserve</button>
    </form>
  );
};

export default ReserveForm;
