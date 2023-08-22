import Login from "./components/login/Login"

function App() {
  // As there is no backend, actual username and actual password have been sent to Login.js as props.
  // For this application, username = abcd, password = 1234
  return <Login actualUsername = "abcd" actualPassword = '1234'/>
}

export default App;
