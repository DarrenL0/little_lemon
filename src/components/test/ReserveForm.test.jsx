import { render, fireEvent, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { updateTimes } from "../pages/Reservations";
import { fetchAPI } from "../utils/api";
import ReserveForm from '../pages/ReserveForm';
import { validateEmail } from "../utils/validateEmail";

// Mock the fetchAPI function
vi.mock('../utils/api', () => ({
  fetchAPI: vi.fn(),
}));

describe('Testing functionality', () => {
  let formData, setFormData, availableTimes, handleDateChange, submitForm;

  beforeEach(() => {
    formData = {
      name: '',
      email: '',
      phone: '',
      guests: 1,
      branch: '',
      date: '',
      time: '',
      occasion: '',
      specialInstructions: '',
      agreeTerms: false,
    };
    setFormData = vi.fn();
    availableTimes = [];
    handleDateChange = vi.fn();
    submitForm = vi.fn();
  });

  afterEach(() => {
    cleanup();  // Clean up after each test
    vi.resetAllMocks();  // Reset all mocks to avoid state leakage
  });

  // Testing initializeTimes with mock
  describe("initializeTimes function", () => {
    test("should return the correct initial times", async () => {
      const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
      fetchAPI.mockResolvedValue(expectedTimes);
  
      const times = await fetchAPI();
      expect(times).toEqual(expectedTimes);
    });

    test("should handle fetchAPI error gracefully", async () => {
      fetchAPI.mockRejectedValue(new Error("Failed to fetch times"));

      try {
        await fetchAPI();
      } catch (error) {
        expect(error.message).toBe("Failed to fetch times");
      }
    });
  });

  // Testing updateTimes function
  describe("updateTimes function", () => {
    test("should return the same initial times when called with UPDATE_DATE action", () => {
      const date = "2025-03-20";
      const initialState = fetchAPI(date);
      const action = { type: "UPDATE_DATE" };
      const updatedState = updateTimes(initialState, action);
      expect(updatedState).toEqual(initialState);
    });

    test("should return the current state when called with an unknown action", () => {
      const date = "2025-03-20";
      const initialState = fetchAPI(date);
      const action = { type: "UNKNOWN_ACTION" };
      const updatedState = updateTimes(initialState, action);
      expect(updatedState).toEqual(initialState);
    });
  });

  // Testing ReserveForm with Full Name validation
  describe('ReserveForm - Full Name Field', () => {
    it('should have name input with required and minLength attributes', () => {
      const { getByLabelText } = render(
        <MemoryRouter>
          <ReserveForm
            formData={formData}
            setFormData={setFormData}
            availableTimes={availableTimes}
            handleDateChange={handleDateChange}
            submitForm={submitForm}
          />
        </MemoryRouter>
      );

      const nameInput = getByLabelText(/Full Name:/i);
      expect(nameInput).toBeRequired();
      expect(nameInput).toHaveAttribute('minLength', '2');
    });

    it('should display an error message if the name is less than 2 characters', () => {
      const { getByLabelText, getByText } = render(
        <MemoryRouter>
          <ReserveForm
            formData={formData}
            setFormData={setFormData}
            availableTimes={availableTimes}
            handleDateChange={handleDateChange}
            submitForm={submitForm}
          />
        </MemoryRouter>
      );

      const nameInput = getByLabelText(/Full Name:/i);
      fireEvent.change(nameInput, { target: { value: 'A' } });
      expect(getByText(/Name must be at least 2 characters long/i)).toBeInTheDocument();
    });

    it('should not display an error message if the name is valid', () => {
      const { getByLabelText, queryByText } = render(
        <MemoryRouter>
          <ReserveForm
            formData={formData}
            setFormData={setFormData}
            availableTimes={availableTimes}
            handleDateChange={handleDateChange}
            submitForm={submitForm}
          />
        </MemoryRouter>
      );

      const nameInput = getByLabelText(/Full Name:/i);
      fireEvent.change(nameInput, { target: { value: 'Alice' } });
      expect(queryByText(/Name must be at least 2 characters long/i)).not.toBeInTheDocument();
    });
  });

  // Testing ReserveForm - Phone Number validation
  describe('ReserveForm - Phone Number Field', () => {
    it('should have phone input with required and pattern attributes', () => {
      const { getByLabelText } = render(
        <MemoryRouter>
          <ReserveForm
            formData={formData}
            setFormData={setFormData}
            availableTimes={availableTimes}
            handleDateChange={handleDateChange}
            submitForm={submitForm}
          />
        </MemoryRouter>
      );

      const phoneInput = getByLabelText(/Phone Number:/i);
      expect(phoneInput).toBeRequired();
      expect(phoneInput).toHaveAttribute('pattern', '^\\d{10}$');
    });

    it('should display an error message if the phone number is invalid', () => {
      const { getByLabelText, getByText } = render(
        <MemoryRouter>
          <ReserveForm
            formData={formData}
            setFormData={setFormData}
            availableTimes={availableTimes}
            handleDateChange={handleDateChange}
            submitForm={submitForm}
          />
        </MemoryRouter>
      );

      const phoneInput = getByLabelText(/Phone Number:/i);
      fireEvent.change(phoneInput, { target: { value: '12345' } });
      expect(getByText(/Please enter a 10-digit phone number/i)).toBeInTheDocument();
    });
  });

  // Email validation tests
  describe('validateEmail', () => {
    it('should return true for valid emails', () => {
      const validEmails = [
        'test@example.com',
        'user.name@domain.co',
        'user123@sub.domain.com',
        'test@domain.org'
      ];

      validEmails.forEach(email => {
        expect(validateEmail(email)).toBeTruthy();
      });
    });

    it('should return false for invalid emails', () => {
      const invalidEmails = [
        'plainaddress',
        '@missingusername.com',
        'user@.com',
        'user@domain..com',
        'user@domain',
        'user@domain,com',
        'user@domain@com.com'
      ];

      invalidEmails.forEach(email => {
        expect(validateEmail(email)).toBeFalsy();
      });
    });

    it('should return false for an empty or whitespace-only email string', () => {
      expect(validateEmail('')).toBeFalsy();
      expect(validateEmail('   ')).toBeFalsy();
    });
  });
});
