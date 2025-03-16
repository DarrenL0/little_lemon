import React from 'react'
import ReserveForm from "./ReserveForm";

const Reservations = () => {
  return (
    <div className='reservation-container'>
      <h1 className='heading'>Reserve a Table</h1>
      <p className='subheading'>Book your table at Little Lemon now!</p>
      <ReserveForm />
    </div>
  )
}

export default Reservations
