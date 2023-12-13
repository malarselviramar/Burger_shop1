import CheeseBurgerImage from './../../assets/burger2.png';
import React, { useState } from 'react';
import backgroundImage from '../../assets/bg.png';

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          background: `url(${CheeseBurgerImage}) no-repeat right center`, // Add the CheeseBurgerImage and position it at the right center
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          textAlign: 'center',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '93vh', paddingTop: '35px' }}>
          <div style={{ width: '100%', maxWidth: '400px', textAlign: 'center', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>

            <h2>Contact Us</h2>

            <form style={{ width: '100%', maxWidth: '300px', margin: '0 auto' }}>
              <div style={{ marginBottom: '15px' }}>
                <input type="text" placeholder="Name" style={inputStyle} />
              </div>
              <div style={{ marginBottom: '15px' }}>
                <input type="email" placeholder="Email" style={inputStyle} />
              </div>
              <div style={{ marginBottom: '15px' }}>
                <textarea placeholder="Feedback from Max" style={inputStyle}></textarea>
              </div>
              <button type="button" onClick={handleButtonClick} style={buttonStyle}>
                Send
              </button>

              {/* Popup message */}
              {showPopup && (
                <div
                  style={{
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: '#ffffff',
                    padding: '10px',
                    border: '1px solid #dddddd',
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                    zIndex: 1000,
                  }}
                >
                  Thanks for contacting us!
                  We will get back to you shortly.
                </div>
              )}

            </form>

          </div>
        </div>
      </div>
    </div>
  );
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  borderRadius: '5px',
  border: '1px solid #ccc',
};

const buttonStyle = {
  width: '100%',
  padding: '10px',
  borderRadius: '5px',
  backgroundColor: '#990000',
  color: '#fff',
  border: 'none',
  cursor: 'pointer',
};

export default Contact;
