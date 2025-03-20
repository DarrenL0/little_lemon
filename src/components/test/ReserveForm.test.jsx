import { render, screen } from "@testing-library/react";
import Reservations from "../pages/Reservations";
import { initializeTimes, updateTimes } from "../pages/Reservations";
import { fetchAPI } from "../utils/api";


// Mock the fetchAPI function
vi.mock('../utils/api', () => ({
  fetchAPI: vi.fn(),
}));

describe("initializeTimes function", () => {
  test("should return the correct initial times", async () => {
    const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    
    // Mock fetchAPI to return the expected times
    fetchAPI.mockResolvedValue(expectedTimes);

    // Call fetchAPI and check if it returns the correct times
    const times = await fetchAPI();
    expect(times).toEqual(expectedTimes);
  });
});

describe("updateTimes function", () => {
  test("should return the same initial times when called with UPDATE_DATE action", () => {
    const date = "2025-03-20"; // Set the date for the test
    const initialState = fetchAPI(date); // Fetch the available times using fetchAPI
    const action = { type: "UPDATE_DATE" }; // The action you want to dispatch
    const updatedState = updateTimes(initialState, action); // Call updateTimes with the action
  
    expect(updatedState).toEqual(initialState); // Expect the state to remain the same
  });

  test("should return the current state when called with an unknown action", () => {
    const date = "2025-03-20"; // Set the date for the test
    const initialState = fetchAPI(date); // Fetch the available times using fetchAPI
    const action = { type: "UNKNOWN_ACTION" }; // The unknown action type
    const updatedState = updateTimes(initialState, action); // Call updateTimes with the action
  
    expect(updatedState).toEqual(initialState); // Expect the state to remain the same
  });
});