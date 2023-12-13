import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHamburger, faCocktail } from '@fortawesome/free-solid-svg-icons';


function DropdownMenu() {
  const [navLinks, setNavLinks] = useState([]);

  useEffect(() => {
    const navs = [
      { name: "Login", path: "/login" },
      {name:"Orders", path:"/myorders"},
      {name:"Logout", path:"/login"}
      
    ];
    setNavLinks(navs);
  }, []);


  return (
    <div>
      <Navbar expand="lg" className='fixed-top bg-body-tertiary shadow'>  
      <Container>
   
        <Navbar.Brand>
        
    <Link to="/" >
    <div>
        <FontAwesomeIcon icon={faHamburger} size="1x" style={{ color: 'black' }}/>
        <FontAwesomeIcon icon={faCocktail} size="1x" style={{ color: 'black' }}/>
      </div>
    </Link>

  </Navbar.Brand>
  

  <Navbar.Toggle aria-controls='basic-navbar-nav' />
  <Navbar.Collapse id='basic-navbar-nav'>
    <Nav className='me-auto justify-content-end w-100'>
      <Nav.Link as={Link} to="/" className='active text-uppercase'>Home</Nav.Link>
      <Nav.Link as={Link} to="/contact" className='text-uppercase'>Contact</Nav.Link>
      <Nav.Link as={Link} to="/cart" className='text-uppercase'>Cart</Nav.Link>
      <Nav.Link as={Link} to="/menu" className='text-uppercase'>Menu</Nav.Link>
      <Nav.Link as={Link} to="/login" className='text-uppercase'>Login</Nav.Link>
      <Nav.Link as={Link} to="/profile" className='text-uppercase'>Profile</Nav.Link>
      <Nav.Link as={Link} to="/about" className='text-uppercase'>About</Nav.Link>
      <div class="btn-group">
            <button
              type="button"
              class="btn btn-secondary dropdown-toggle"
              data-bs-toggle="dropdown"
              data-bs-display="static"
              aria-expanded="false"
            >
              Menu
            </button>
            <ul class="dropdown-menu dropdown-menu-end">
              {navLinks.map((d, i) => (
                <li key={i}>
                  <Link to={d.path}>
                    <button class="dropdown-item" type="button">
                      {d.name}
                    </button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
    </Nav>
  </Navbar.Collapse>

         
       
      </Container>
</Navbar>
               
     
    </div>
  )
}

export default DropdownMenu;
