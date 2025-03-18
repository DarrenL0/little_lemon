import { render, screen } from "@testing-library/react";
import Reservations from "../pages/Reservations";
import { initializeTimes, updateTimes } from "../pages/Reservations";


test("renders Reservations heading", () => {
  render(<Reservations />);
  const headingElement = screen.getByText("Reserve a Table"); // Ensure this text exists in your component
  expect(headingElement).toBeInTheDocument();
});

describe("initializeTimes function", () => {
  test("should return the correct initial times", () => {
    const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    expect(initializeTimes()).toEqual(expectedTimes);
  });
});

describe("updateTimes function", () => {
  test("should return the same initial times when called with UPDATE_DATE action", () => {
    const initialState = initializeTimes();
    const action = { type: "UPDATE_DATE" };
    const updatedState = updateTimes(initialState, action);

    expect(updatedState).toEqual(initialState);
  });

  test("should return the current state when called with an unknown action", () => {
    const initialState = initializeTimes();
    const action = { type: "UNKNOWN_ACTION" };
    const updatedState = updateTimes(initialState, action);

    expect(updatedState).toEqual(initialState);
  });
});