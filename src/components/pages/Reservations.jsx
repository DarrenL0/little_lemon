import React, { useReducer, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReserveForm from "./ReserveForm";
import { fetchAPI, submitAPI } from "../utils/api.js";

// Reducer function to update available times
export const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return action.payload; // Update available times with fetched data
    default:
      return state;
  }
};

const Reservations = () => {
  const navigate = useNavigate(); // Hook for navigation

  const [formData, setFormData] = useState({
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

  // useReducer for availableTimes
  const [availableTimes, dispatch] = useReducer(updateTimes, []);

  // Fetch available times when the component mounts (for today)
  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setFormData((prevData) => ({
      ...prevData,
      date: today, // Set today's date as default
    }));
    const times = fetchAPI(today); // Fetch times using fetchAPI
    dispatch({ type: "UPDATE_TIMES", payload: times });
  }, []);

  // Handle date selection
  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      date: selectedDate,
    }));
    const times = fetchAPI(selectedDate);
    dispatch({ type: "UPDATE_TIMES", payload: times });
  };

  // Function to submit the form
  const submitForm = async (formData) => {
    const isSuccessful = await submitAPI(formData); // Call API function
    if (isSuccessful) {
      navigate("/confirmed"); // Navigate if submission is successful
    } else {
      alert("Submission failed. Please try again.");
    }
  };

  return (
    <div className="reservation-container">
      <h1 className="heading">Reserve a Table</h1>
      <p className="subheading">Book your table at Little Lemon now!</p>
      <ReserveForm
        formData={formData}
        setFormData={setFormData}
        availableTimes={availableTimes}
        dispatch={dispatch}
        handleDateChange={handleDateChange}
        submitForm={submitForm} // Pass submitForm to ReserveForm
      />
    </div>
  );
};

export default Reservations;
