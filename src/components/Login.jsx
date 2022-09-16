

import React from 'react';
import ReactDOM from 'react-dom';
import {Link, Routes, Route, useNavigate} from 'react-router-dom';
import login from './login.png';
import Welcome from './Welcome';
  const appStyle = {
      marginTop: '250px',
      height: '250px',
      display: 'flex'
  };

  const imgStyle = {
    position: 'absolute',
    width: '165px',
    height: '150px',
    left: '115px',
    top: '79px'

  };

  const heading ={
    

  };
  
  const formStyle = {
      margin: 'auto',
      padding: '10px',
      
      
      width: '220px',
      display: 'block'
  };
  
  const labelStyle = {
      margin: '10px 0 0 0',
      
      fontFamily: 'Poppins',
fontStyle: 'normal',
fontWeight: '400',
fontSize: '16px',
lineHeight: '24px',
color: '#61697D',
  };
  
  const inputStyle = {
      margin: '5px 0 10px 0',
      padding: '5px', 
      border: '1px solid #bfbfbf',
      borderRadius: '3px',
      boxSizing: 'border-box',
      width: '100%'
  };
  
  const submitStyle = {
      margin: '10px 0 0 0',
      padding: '7px 10px',
      border: '1px solid #efffff',
      borderRadius: '3px',
      background: ' #20C1BF',
      width: '100%', 
      fontSize: '15px',
      color: 'white',
      display: 'block',
      borderRadius: '5px',
  };

 



  
  const Field = React.forwardRef(({label, type}, ref) => {
      return (
        <div>
          <label style={labelStyle} >{label}</label>
          <input ref={ref} type={type} style={inputStyle} />
        </div>
      );
  });
  
  const Form = ({onSubmit}) => {
      const usernameRef = React.useRef();
      const passwordRef = React.useRef();
      const handleSubmit = e => {
          e.preventDefault();
          const data = {
              username: usernameRef.current.value,
              password: passwordRef.current.value
          };
          onSubmit(data);
      };
      return (
        <form style={formStyle} onSubmit={handleSubmit} >
          <Field ref={usernameRef} label="Username:" type="text" />
          <Field ref={passwordRef} label="Password:" type="password" />
          <div>
            <button style={submitStyle} type="submit">Login</button>
          </div>
        </form>
      );
  };
  
  // Usage example:
  
  const Login = () => {
    const navigate = useNavigate();
      const handleSubmit = data => {
        navigate('/welcome');
          const json = JSON.stringify(data, null, 4);
          console.clear();
          console.log(json);
      };
      return (
        
        <div style={appStyle} >
          
          <img src={login} style ={imgStyle} alt="login" />
          {/* <h6 style={heading}>Login</h6> */}
          <Form onSubmit={handleSubmit} />
        </div>
      );
  };
  
  export default Login;