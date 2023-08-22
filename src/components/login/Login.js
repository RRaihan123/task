import {useRef, useState} from 'react';

import "./login.css";
import apiCall from '../../api/apiCall';

export default function Login({actualUsername, actualPassword}) { // As there is no backend, actual username and actual password come from App.js as props. 

  const [message, setMessage] = useState('');

  const typedUsername = useRef(); // the username user types
  const typedPassword = useRef(); // the password user types
  
  const handleClick = async (e) => {

       e.preventDefault();

       // Authentication
       if(actualUsername === typedUsername.current.value && actualPassword === typedPassword.current.value){
            setMessage('Login Successful');
       }else{
            setMessage('Authentication Failure');
       }

       let response = await apiCall(); // Call API using Axios
       console.log(response);

  }

  return (
       <div className="login">
          <form className="loginBox" onSubmit={handleClick}>
            <input data-testid="inputUsername" name='username' placeholder="Username" type="text" required className="loginInput" ref={typedUsername}/>
            <input data-testid="inputPassword" name='password' placeholder="Password" type="password" required className="loginInput" ref={typedPassword} minLength="4"/>
            <button data-testid="loginBtn" className="loginButton">Login</button>
            <h3 data-testid="text" style={{textAlign:"center"}}>{message}</h3>
          </form>
       </div>   
  );
}