import React from 'react';
import '../Css/Cards.css';

const Cards = () => {
  const cardData = [
    {
      title: 'Card 1',
      description: 'This is the description for Card 1.',
    },
    {
      title: 'Card 2',
      description: 'This is the description for Card 2.',
    },
    {
      title: 'Card 3',
      description: 'This is the description for Card 3.',
    },
  ];

  const handleCardClick = (index) => {
    console.log(`Card ${index + 1} clicked`);
  };

  return (
    <div className="cards">
      {cardData.map((card, index) => (
        <div className="card" key={index} onClick={() => handleCardClick(index)}>
          <h3>{card.title}</h3>
          <p>{card.description}</p>
          <button>View Details</button>
        </div>
      ))}
    </div>
  );
};

export default Cards;
