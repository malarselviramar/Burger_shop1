import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';
const Login = () => {
    const [loginClicked, setLoginClicked] = useState(false);
  const [registerClicked, setRegisterClicked] = useState(false);

  const handleLoginClick = () => {
    setLoginClicked(true);
    setRegisterClicked(false);
  };

  const handleRegisterClick = () => {
    setLoginClicked(false);
    setRegisterClicked(true);
  };
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ width: '400px', textAlign: 'center' }}>
      <div style={{ marginBottom: '20px' }}>
      <button
            onClick={handleLoginClick}
            style={{
              padding: '10px',
              backgroundColor: loginClicked ? '#3385ff' : '#e6f0ff',
              color: loginClicked ? '#fff' : '#3385ff',
              border: loginClicked ? '2px solid  #3385ff' : '2px solid #fff', 
              marginRight: '10px',
              width: '48%',
            }}
          >
            Login
          </button>
          <button
            onClick={handleRegisterClick}
            style={{
              padding: '10px',
              backgroundColor: registerClicked ? '#3385ff' : ' #e6f0ff',
              color: registerClicked ? '#fff' : '#3385ff',
              border: registerClicked ? '2px solid #3385ff' : '2px solid #fff', 
              width: '48%',
            }}
          >
            Register
            <FontAwesomeIcon icon={faUserPlus} style={{ marginLeft: '5px' }} />
          </button>
        </div>
        
        <div className='pt-5'>
        <button
            type="button"
            className="btn btn-lg btn-floating mx-2"
            style={{ backgroundColor: '#fff',color:'#3385ff' }}  
            >
            <i className="fab fa-facebook"></i>
            </button>
            
          <button
            type="button"
            className="btn btn-lg btn-floating mx-2"
            style={{ backgroundColor: '#fff', color:'#3385ff' }}  
            >
            <i className="fab fa-twitter"></i>
            </button>
            <button
                type="button"
                className="btn btn-lg btn-floating mx-2"
                style={{ backgroundColor: '#fff', color:'#3385ff'}}                  >
                <i className="fab fa-google"></i>
                </button>

                <button
                type="button"
                className="btn btn-lg btn-floating mx-2"
                style={{ backgroundColor: '#fff', color:'#3385ff' }} 
                >
                <i className="fab fa-github"></i>
                </button>

        </div>

        {/* Or Separator */}
        <div style={{ margin: '20px 0', position: 'relative' }}>
          <span style={{ backgroundColor: '#fff', padding: '0 10px' }}>Or</span>
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '0',
              right: '0',
              height: '1px',
              backgroundColor: '#ccc',
            }}
          />
        </div>

        {/* Email and Password */}
        <div style={{ marginBottom: '15px', borderRadius: '10px' }}>
          <input type="email" placeholder="Email" style={{border:'2px solid black' }}
          className='py-2 ps-1'></input>
        </div>
        <div style={{ marginBottom: '15px' }}>
          <input type="password" placeholder="Password" style={{border:'2px solid black'}}
          className='py-2 ps-1'></input>
        </div>

        {/* Remember Me and Forgot Password */}
        <div className ='mb-3'style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
          <div>
            <input type="checkbox" id="rememberMe" />
            <label htmlFor="rememberMe">Remember me</label>
          </div>
          <div>
            <a href="/forgot-password" style={{color:'#3385ff'}}>Forgot Password</a>
          </div>
        </div>

        {/* Sign In Button */}
        <button style={{ width: '100%', padding: '10px', backgroundColor: ' #3385ff', color: '#fff', border: '2px solid  #3385ff' }}>
          Sign In
        </button>

        <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <p style={{ margin: '0', marginRight: '5px' }}>Not a member?</p>
          <button style={{ padding: '10px', backgroundColor: '#fff', color: '#3385ff', border: 'none', borderRadius: '5px' }}>
            Register
            <FontAwesomeIcon icon={faUserPlus} style={{ marginLeft: '5px' }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
