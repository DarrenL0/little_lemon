import { Link } from "react-router-dom";


const ConfirmedBooking = () => {
  return (
    <section className="bookingConfirmed">
      <div className="Confirmedcard">
          <h2>Booking Confirmed!</h2>
          <p className="text-gray-600 mt-2">Your reservation has been successfully booked.</p>
          
          <div className="buttonContainer">
            <Link
              to="/"
              className="button-primary confirmedReturn"
              aria-label="Return to the homepage"
            >
              Return to Home
            </Link>
          </div>
        
      </div>
    </section>
  );
};

export default ConfirmedBooking;