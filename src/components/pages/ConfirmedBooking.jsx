import { Link } from "react-router-dom";

const ConfirmedBooking = () => {
  return (
    <div className="confirmed-booking" aria-live="assertive">
      <h1>Booking Confirmed!</h1>
      <p>Your reservation has been successfully booked.</p>
      <Link to="/" aria-label="Return to the homepage">Return to Home</Link>
    </div>
  );
};

export default ConfirmedBooking;
