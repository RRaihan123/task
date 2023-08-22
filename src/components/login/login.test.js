import {render, screen, fireEvent} from '@testing-library/react';

import Login from './Login';

// TEST CASE 1
it("Login successful as both (username and password) are correct",()=>{
    render(<Login actualUsername = "abcd" actualPassword = '1234'></Login>); // render the Login component with actual username and actual password as props
    let inputUsername = screen.getByTestId('inputUsername'); // get the input field of username
    fireEvent.change(inputUsername, { 'target' : { 'value' : 'abcd'}}) // set the correct username
    let inputPassword = screen.getByTestId('inputPassword'); // get the input field of password
    fireEvent.change(inputPassword, { 'target' : { 'value' : '1234'}}) // set the correct password
    let loginBtn = screen.getByTestId('loginBtn'); // get the login button
    fireEvent.click(loginBtn); // click on login button
    expect(screen.getByTestId('text')).toHaveTextContent(/^Login Successful$/); // "Login Successful" is the expectation
})

// TEST CASE 2
it("Authentication Failure as only username is wrong",()=>{
    render(<Login actualUsername = "abcd" actualPassword = '1234'></Login>); // render the Login component with actual username and actual password as props
    let inputUsername = screen.getByTestId('inputUsername'); // get the input field of username
    fireEvent.change(inputUsername, { 'target' : { 'value' : 'abcde'}})  // set the wrong username 
    let inputPassword = screen.getByTestId('inputPassword'); // get the input field of password
    fireEvent.change(inputPassword, { 'target' : { 'value' : '1234'}}) // set the correct password
    let loginBtn = screen.getByTestId('loginBtn'); // get the login button
    fireEvent.click(loginBtn); // click on login button
    expect(screen.getByTestId('text')).toHaveTextContent(/^Authentication Failure$/); // "Authentication Failure" is the expectation
})

// TEST CASE 3
it("Authentication Failure as only password is wrong",()=>{
    render(<Login actualUsername = "abcd" actualPassword = '1234'></Login>); // render the Login component with actual username and actual password as props
    let inputUsername = screen.getByTestId('inputUsername'); // get the input field of username
    fireEvent.change(inputUsername, { 'target' : { 'value' : 'abcd'}})  // set the correct username
    let inputPassword = screen.getByTestId('inputPassword'); // get the input field of password
    fireEvent.change(inputPassword, { 'target' : { 'value' : '12345'}}) // set the wrong password
    let loginBtn = screen.getByTestId('loginBtn');  // get the login button
    fireEvent.click(loginBtn); // click on login button
    expect(screen.getByTestId('text')).toHaveTextContent(/^Authentication Failure$/); // "Authentication Failure" is the expectation
})

// TEST CASE 4
it("Authentication Failure as both (username and password) are wrong",()=>{
    render(<Login actualUsername = "abcd" actualPassword = '1234'></Login>); // render the Login component with actual username and actual password as props
    let inputUsername = screen.getByTestId('inputUsername'); // get the input field of username
    fireEvent.change(inputUsername, { 'target' : { 'value' : 'abcde'}}) // set the wrong username
    let inputPassword = screen.getByTestId('inputPassword'); // get the input field of password
    fireEvent.change(inputPassword, { 'target' : { 'value' : '12345'}}) // set the wrong password
    let loginBtn = screen.getByTestId('loginBtn'); // get the login button
    fireEvent.click(loginBtn); // click on login button
    expect(screen.getByTestId('text')).toHaveTextContent(/^Authentication Failure$/); // "Authentication Failure" is the expectation
})


    

    
      
    
