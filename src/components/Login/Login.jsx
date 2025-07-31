// import React,{useState} from 'react'
// import './Login.css'
// import { assets } from '../../assets/assets'

// const Login = ({setShowLogin}) => {

//    const[currState,setCurrState]=useState("Login")

//   return (
//     <div className="login-popup">
//       <form action="" className="login-popup-container">
//        <div className="login-popup-title">
     
//     <h2>{currState}</h2>

//     <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt=""/> 
//        </div>
//        <div className="login-popup-inputs">
//         {currState==='Login'?<></>:<input type="text" placeholder='Your Name' required/>}
//         <input type="email" placeholder='Your email' required/>
//         <input type="password" placeholder='Your password' required/>
//        </div>
//        <button>{currState==='Sign Up'?"Create Account":"Login"}</button>
//         <div className="login-popup-condition">
//             <input type="checkbox" required/>
//             <p>By continuing, i agree to the terms of use & privacy policy.</p>
//         </div>
//         {currState==='Login'? <p>Create a new Account ?<span onClick={()=>setCurrState("Sign Up")}>Click Here</span> </p>:
//         <p>Already have an Account ? <span onClick={()=>setCurrState("Login")}>Login Here</span></p>
//         }
       
        
//       </form>
//     </div>
//   )
// }

// export default Login

import React, { useState } from 'react';
import './Login.css';
import { assets } from '../../assets/assets';

const Login = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState('Login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agree, setAgree] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agree) {
      alert('You must agree to the terms and conditions.');
      return;
    }

    if (currState === 'Login') {
      console.log('Logging in with:', { email, password });
      // Add your login logic here
    } else {
      console.log('Signing up with:', { name, email, password });
      // Add your signup logic here
    }

    // Optional: Close the popup after action
    setShowLogin(false);
  };

  return (
    <div className="login-popup">
      <form className="login-popup-container" onSubmit={handleSubmit}>
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt="Close"
          />
        </div>

        <div className="login-popup-inputs">
          {currState === 'Sign Up' && (
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          )}
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit">
          {currState === 'Sign Up' ? 'Create Account' : 'Login'}
        </button>

        <div className="login-popup-condition">
          <input
            type="checkbox"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
          />
          <p>
            By continuing, I agree to the <b>terms of use</b> &{' '}
            <b>privacy policy</b>.
          </p>
        </div>

        {currState === 'Login' ? (
          <p>
            Create a new Account?{' '}
            <span onClick={() => setCurrState('Sign Up')}>Click Here</span>
          </p>
        ) : (
          <p>
            Already have an Account?{' '}
            <span onClick={() => setCurrState('Login')}>Login Here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
