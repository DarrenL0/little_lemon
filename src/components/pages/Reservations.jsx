import React, { useReducer, useState, useEffect } from "react";
import ReserveForm from "./ReserveForm";
import { fetchAPI } from "../utils/api.js";

// Reducer function to update available times
export const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return action.payload; // Update the available times state with fetched data
    default:
      return state;
  }
};

const Reservations = () => {
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
    // Fetch available times for today's date
    const times = fetchAPI(today); // Fetch times using fetchAPI
    dispatch({ type: "UPDATE_TIMES", payload: times }); // Dispatch to update available times state
  }, []);

  // Handle date selection (dispatch to update available times)
  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      date: selectedDate, // Update date in form data
    }));
    const times = fetchAPI(selectedDate); // Fetch available times based on selected date
    dispatch({ type: "UPDATE_TIMES", payload: times }); // Dispatch action to update available times based on selected date
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
        handleDateChange={handleDateChange} // Pass handleDateChange to ReserveForm
      />
    </div>
  );
};

export default Reservations;
