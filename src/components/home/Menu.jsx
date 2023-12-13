import React, { useState } from 'react';
import ClassicBurgerImage from './../../assets/burger1.png';
import CheeseBurgerImage from './../../assets/burger2.png';
import ClassicCheeseBurgerImage from './../../assets/burger3.png';
import { Card } from 'react-bootstrap';


const Menu = () => {
  const burgerMenu = [
    {
      id: 1,
      name: 'Classic Burger',
      image: ClassicBurgerImage,
      price: '$9.99',
    },
    {
      id: 2,
      name: 'Cheeseburger',
      image: CheeseBurgerImage,
      price: '$10.99',
    },
    {
      id: 3,
      name: 'Classic Cheeseburger',
      image: ClassicCheeseBurgerImage,
      price: '$10.99',
    },
  ];

  const [selectedBurger, setSelectedBurger] = useState(null);
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });

  const handleBuyNowClick = (burger, event) => {
    setSelectedBurger(burger);
    setPopupPosition({
      top: event.clientY + window.scrollY,
      left: event.clientX + window.scrollX,
    });
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2 style={{ paddingTop: '90px' }}>Our Menu</h2>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          alignItems: 'stretch',
        }}
      >
        {burgerMenu.map((burger) => (
        
          <Card
            key={burger.id}
            style={{
              textAlign: 'center',
              margin: '10px',
              maxWidth: '300px',
            }}
          >
            <Card.Img
              src={burger.image}
              alt={burger.name}
              style={{
                maxWidth: '100%',
                height: '150px', 
                objectFit: 'cover',
                borderRadius: '8px',
                cursor: 'pointer',
              }}
              onClick={(e) => handleBuyNowClick(burger, e)}
            />
            <Card.Body>
              <h3>{burger.name}</h3>
              <p>{burger.price}</p>
              <button
                onClick={(e) => handleBuyNowClick(burger, e)}
                style={{
                  backgroundColor: 'maroon',
                  color: 'white',
                  padding: '8px 16px',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                }}
              >
                Buy Now
              </button>
            </Card.Body>
          </Card>
         
        ))}
      </div>

      {selectedBurger && isPopupVisible && (
        <div
          style={{
            position: 'absolute',
            top: popupPosition.top - 100,
            left: popupPosition.left - 150,
            padding: '20px',
            backgroundColor: 'white',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
          }}
        >
          <p>{`Item added to cart: ${selectedBurger.name}`}</p>
          <button onClick={handleClosePopup}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Menu;
