import React from 'react'


const SpecialCards = ({ special }) => {
    return (
      <div className='special-card'>
        <img src={special.image} alt={special.name} className='special-image' />
        <div className='top-card'>
            <h3>{special.name}</h3>
            <p className='price'>{special.price}</p>
        </div>
        <p className='description'>{special.description}</p>
        <div className='button-container'>
            <button className='order-button'>
            Order a delivery!
            </button>
        </div>
      </div>
    );
  };

export default SpecialCards
