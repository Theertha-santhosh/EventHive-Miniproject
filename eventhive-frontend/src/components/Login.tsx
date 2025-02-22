// src/components/Login.tsx
import React, { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    // Here, you would usually send this data to a backend for authentication
    // Simulate a successful login: (Replace with your actual authentication logic)
    if (password === '123') {  // Replace this dummy condition
      onLogin();
      navigate('/home');
    } else {
      // Handle login error (e.g., display an error message)
      alert('Invalid credentials');
    }

  };

   const handleEmailClick = () =>{
         window.location.href="mailto:eventhive@gmail.com";
    }

  return (
    <div className="login-container">
       <div className="login-card">
        <h2>Log In</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
           <div className="password-input">
               <input
                   type={passwordVisible ? "text": "password"}
                   id="password"
                   placeholder="Enter your password"
                   value={password}
                   onChange={(e) => setPassword(e.target.value)}
                   required
                  />
                    <span onClick={() => setPasswordVisible(!passwordVisible)}>
                          {passwordVisible ?
                              (<img width={18} src="/images/eye.png" alt='hide-password'/>) :
                              (<img width={18} src="/images/eye.png" alt='show-password'/>)
                           }
                   </span>
           </div>
            <a href="/" className="forgot-password">
              Forgot Password?
            </a>
          </div>
          <button type="submit" className="login-button">
            Log In
          </button>
        </form>
          <div className="login-bottom">
               <p>
                    <a href="/" onClick={handleEmailClick}>event.hive@gmail.com</a>
                   </p>
           </div>
      </div>
       <div className="login-card-image">
           <img src="/images/login-image.png" alt="Login Illustration"/>
      </div>
    </div>
  );
};

export default Login;