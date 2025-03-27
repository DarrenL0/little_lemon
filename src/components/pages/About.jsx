import React from 'react'
import { Link } from "react-router-dom";
import foodImage from '../../assets/restauranfood.jpg'
import Special from './Special';
import Testimonials from './Testimonials';
import Branch from './Branch';

const About = () => {
  return (
    <>
      <article className="call-to-action">
      <div className='pageWidth hero-page'>
        <section className="hero-text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p className="subsection">
          Welcome to Little Lemon, where fresh, locally sourced ingredients meet bold, 
          unforgettable flavors. Nestled in the heart of the city, our cozy and inviting space provides 
          the perfect backdrop for enjoying mouthwatering dishes crafted with passion and care. Whether you’re gathering 
          with family and friends for a relaxed meal, celebrating a milestone, or enjoying a quiet dinner for two, we take pride 
          in making every occasion special. Our chefs combine timeless culinary traditions with a modern twist, creating dishes that 
          delight the senses and bring people together. At Little Lemon, we’re more than just a meal – we’re creating lasting memories 
          and experiences that will keep you coming back for more.
          </p>
          <br />
          <Link className="button-primary" to="/reservations">Reserve a table</Link>
        </section>

        <section className="hero-image">
          <img src={foodImage} alt="Little Lemon restaurant cuisine" />
        </section>
      </div>
    </article>
    <Special/>
    <Testimonials/>
    <Branch/>
    </>
  )
}

export default About
