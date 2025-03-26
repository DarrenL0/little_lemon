import React from 'react'


const StarRating = ({ rating }) => {
    return (
      <div className="stars">
        {Array.from({ length: 5 }).map((_, index) => (
          <span key={index} className={index < rating ? 'filled' : 'empty'}>
            ★
          </span>
        ))}
      </div>
    );
  };


const TestimonialCard  = ({ testimonial }) => {
  return (
    <div className="testimonial-card">
      <div className="profile">
        <img src={testimonial.profileImg} alt={testimonial.name} />
        <h3>{testimonial.name}</h3>
      </div>
      <StarRating rating={testimonial.rating} />
      <p>{testimonial.review}</p>
    </div>
  );
};

export default TestimonialCard;
