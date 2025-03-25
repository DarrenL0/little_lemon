import React from 'react'
import SpecialCards from "./SpecialCards";
import lemonDessert from "../../assets/lemon dessert.jpg";
import greekSalad from "../../assets/greek salad.jpg";
import bruchetta from "../../assets/bruchetta.svg";

const specials = [
  {
    id: 1,
    image: lemonDessert,
    name: "Lemon Dessert",
    price: "$ 5.99",
    description: "A refreshing lemon-flavored dessert with a hint of sweetness.",
  },
  {
    id: 2,
    image: greekSalad,
    name: "Greek Salad",
    price: "$ 7.99",
    description: "A fresh mix of cucumbers, tomatoes, olives, and feta cheese.",
  },
  {
    id: 3,
    image: bruchetta,
    name: "Bruschetta",
    price: "$ 6.99",
    description: "Crispy toasted bread topped with fresh tomatoes, basil, and olive oil.",
  },
];


const Special = () => {
  return (
    <article className='special'>
      <div className='pageWidth'>
        <section >
          <div className='top-special'>
            <h2>This weeks specials!</h2>
            <button className='button-primary'>Online Menu</button>
          </div>
          <div className='specials-container'>
            {specials.map((item) => (
              <SpecialCards key={item.id} special={item} />
            ))}
          </div>
        </section>
      </div>
    </article>
  )
}

export default Special
