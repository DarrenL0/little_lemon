import { Link } from "react-router-dom";

const ConfirmedBooking = () => {
  return (
    <div className="confirmed-booking">
      <h1>Booking Confirmed!</h1>
      <p>Your reservation has been successfully booked.</p>
      <Link to="/">Return to Home</Link>
    </div>
  );
};

export default ConfirmedBooking;
