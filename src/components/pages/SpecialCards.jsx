import React from 'react';

const SpecialCards = ({ special }) => {
  return (
    <div 
      className="special-card" 
      role="article" 
      aria-labelledby={`special-${special.id}-name`} 
      aria-describedby={`special-${special.id}-description`}
    >
      <img 
        src={special.image} 
        alt={`Image of ${special.name}`} 
        className="special-image" 
        aria-labelledby={`special-${special.id}-name`}
      />
      <div className="top-card">
        <h3 id={`special-${special.id}-name`}>{special.name}</h3>
        <p className="price">{special.price}</p>
      </div>
      <p id={`special-${special.id}-description`} className="description">
        {special.description}
      </p>
      <div className="button-container">
        <button 
          className="order-button" 
          aria-label={`Order ${special.name} for delivery`}
        >
          Order a delivery!
        </button>
      </div>
    </div>
  );
};

export default SpecialCards;
