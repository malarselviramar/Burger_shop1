
import React from 'react';
import { MenuBtn } from '../MenuBtn';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


function Header()
{
   
    return(
      
        <div className='home-page'style={{ paddingTop:'80px' }}>
         <header className='h-100 min-vh-100 d-flex align-items-center text-light shadow'>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-6 d-flex d-sm-block flex-column align-items-center'>
                        <h1 className='mb-0 fw-bold text-black display-1'>BURGER SHOP</h1>
                        <h6 className='mb-5 text-black
                        text-center text-sm-start display-6'>Give yourself a tasty burger</h6>
                        <MenuBtn></MenuBtn>
                    </div>
                </div>
            </div>

          </header>
        
             </div>
          
          

                      
    )
}

export default Header;

