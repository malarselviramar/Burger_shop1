import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function Footer() {
    const italicStyle = {
        fontStyle: 'italic',
      };
      return(    
<footer>
            
            <h3>Burger Shop</h3>
            {/* <p>Follow us</p> */}
            <button
        type="button"
        className="btn btn-lg btn-floating mx-2"
        style={{ backgroundColor: '#fff' }}
      >
        <i className="fab fa-youtube"></i>
      </button>
        <p>we are trying to give you the best taste possible</p>
      <button
        type="button"
        className="btn btn-lg btn-floating mx-2"
        style={{ backgroundColor: '#fff' }}
      >
        <i className="fab fa-instagram"></i>
      </button>
           <p><span style={italicStyle}>we give attention to genuine to feedback.</span>
            <span className='fw-bold' style={{ marginLeft: '10px' }}>All right received @burgershop</span></p>
            <button
        type="button"
        className="btn btn-lg btn-floating mx-2"
        style={{ backgroundColor: '#fff' }}
      >
        <i className="fab fa-github"></i>
      </button>
          </footer>
      )
}

export default Footer;
