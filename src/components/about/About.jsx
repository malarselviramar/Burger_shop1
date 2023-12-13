import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion";
import me from "../../assets/skj.jpg";

export function About() {
  const headingStyle = {
    backgroundColor: 'black',
    color: 'maroon',
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between', 
    alignItems: 'center',
    padding: '20px',
  };

  const leftColumnStyle = {
    flex: 1, 
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color:'white'
  };

  const rightColumnStyle = {
    flex: 1, 
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    fontSize: '25px'
  };
  const options = {
    initial: {
      y: "-100%",
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div>
      <h1 className='mt-5 pt-5 d-flex align-items-center justify-content-center' style={headingStyle}>About Us</h1>
      <div className='d-flex flex-column'>
        <h2 className='mt-5 pt-5 mb-5 d-flex align-items-center justify-content-center display-6 lead'>BurgerShop</h2>
        <div className='mb-5 text-center lead'>
        <p>
          This is the Burger Shop. The place for
          <br></br>
           more tasty burgers on the entire <br></br>earth.
        </p>
        <p>
          Explore the various types of food <br></br>and burgers. 
          Click below to see the<br></br> menu.
        </p>
        </div>
        <div className='d-flex align-items-center justify-content-center'>
          <button
            type="button"
            className="btn btn-lg btn-floating mx-2 mb-5"
            style={{ backgroundColor: '#fff' }}
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
        <div className='bg-dark'>
          <h2 className='d-flex flex-column align-items-center text-white display-6'>Founder</h2>
          <div style={containerStyle}>
            <div style={leftColumnStyle}>
              <motion.img src={me} alt="User" {...options} />
              <motion.h5 {...options} transition={{ delay: 0.3 }}>
                Nelson
              </motion.h5>
            </div>
       
            <div style={rightColumnStyle}>
              <p className='mt-5 mb-5 text-white'>
                I am Nelson, the founder of Burger Shop.
                <br></br> 
                Affiliated to God Taste.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
