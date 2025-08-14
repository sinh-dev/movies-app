import { useRef, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import '../css/LoginForm.css';
import { FaUser, FaEnvelope } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

const LoginForm = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const name = useRef();
  const email = useRef();
  const password = useRef();
  const [show, setShow] = useState(true); 

  const registerLink = () => setShow(false);
  const loginLink = () => setShow(true);

  const handleSignUp = (e) => {
    e.preventDefault();
    if (name.current.value && email.current.value && password.current.value) {
      localStorage.setItem("name", name.current.value);
      localStorage.setItem("email", email.current.value);
      localStorage.setItem("password", password.current.value);
      localStorage.setItem("signUp", true)
      login();
      alert("Account created successfully!.");
      navigate("/home");
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const localEmail = localStorage.getItem("email");
    const localPassword = localStorage.getItem("password");

    if (email.current.value === localEmail && password.current.value === localPassword) {
      localStorage.setItem("signUp", true)
      login();
      navigate("/home");
    } else {
      alert("Please enter the right credentials!");
    }
  };

  return (
    <div className={`wrapper ${show ? "" : "active"}`}>
      {show ? (
        <div className="form-box login">
          <form onSubmit={handleLogin}>
            <h1>Login</h1>
            <div className='input-box'>
              <input type="text" placeholder='Email' required ref={email} />
              <FaEnvelope className='icon' />
            </div>
            <div className='input-box'>
              <input type="password" placeholder='Password' required ref={password} />
              <RiLockPasswordFill className='icon' />
            </div>
            <div className="remember-forgot">
              <label><input type="checkbox" />Remember me</label>
              <a href="#">Forgot password?</a>
            </div>
            <button type="submit">Login</button>
            <div className="register-link">
              <p>Don't have an account? <a href="#" onClick={registerLink}>Register</a></p>
            </div>
          </form>
        </div>
      ) : (
        <div className="form-box register">
          <form onSubmit={handleSignUp}>
            <h1>Sign Up</h1>
            <div className='input-box'>
              <input type="text" placeholder='Username' required ref={name} />
              <FaUser className='icon' />
            </div>
            <div className='input-box'>
              <input type="email" placeholder='Email' required ref={email} />
              <FaEnvelope className='icon' />
            </div>
            <div className='input-box'>
              <input type="password" placeholder='Password' required ref={password} />
              <RiLockPasswordFill className='icon' />
            </div>
            <div className="remember-forgot">
              <label><input type="checkbox" />I agree to the terms & conditions</label>
            </div>
            <button type="submit">Sign Up</button>
            <div className="register-link">
              <p>Already have an account? <a href="#" onClick={loginLink}>Login</a></p>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
