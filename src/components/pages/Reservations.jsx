import React, { useReducer, useState } from "react";
import ReserveForm from "./ReserveForm";

// Function to initialize available times
const initializeTimes = () => [
  "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"
];

// Reducer function to update available times (static for now)
const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE_DATE":
      return initializeTimes(); // Future update: return different times based on date
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
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  return (
    <div className="reservation-container">
      <h1 className="heading">Reserve a Table</h1>
      <p className="subheading">Book your table at Little Lemon now!</p>
      <ReserveForm 
        formData={formData} 
        setFormData={setFormData} 
        availableTimes={availableTimes} 
        dispatch={dispatch} 
      />
    </div>
  );
};

export default Reservations;
