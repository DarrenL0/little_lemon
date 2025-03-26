import React from 'react'
import TestimonialCard from './testimonialCard';
import profile1 from '../../assets/profile1.jpg';
import profile2 from '../../assets/profile2.jpg';
import profile3 from '../../assets/profile3.jpg';

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    profileImg: profile1,
    rating: 5,
    review: 'Amazing service! Highly recommended. The team was incredibly professional and attentive to every detail. I felt valued as a customer, and the end product far exceeded my expectations. Definitely going to use them again for future needs!',
  },
  {
    id: 2,
    name: 'James Smith',
    profileImg: profile2,
    rating: 4,
    review: 'Great experience, will come again! From start to finish, everything went smoothly. The product quality was fantastic, and I was particularly impressed by the customer service team. If anything, I think the delivery time could be improved, but overall, I’m very satisfied.',
  },
  {
    id: 3,
    name: 'Nella Johnson',
    profileImg: profile3, 
    rating: 3,
    review: 'Good, but can improve in some areas. The service was decent, but there were a few hiccups along the way. The product quality was okay, though I expected a bit more. Some minor communication issues were present, but nothing that would stop me from considering them again in the future.',
  },
];


const Testimonials = () => {
  return (
    <article className="testimonials">
      <div className="pageWidth">
        <div className="testimonial-subheading">
          <h2>What our customers say!</h2>
        </div>
        <div className="testimonial-container">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </article>
  );
};

export default Testimonials
