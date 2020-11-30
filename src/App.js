import { HashRouter , Route } from 'react-router-dom'
import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

import homepage from './views/homePage'
import loginPage from './views/loginPage'
import signUpPage from './components/signupBox'
function App() {
  return (
    <HashRouter>
      <Route exact path = "/" component = { homepage }/>
      <Route path = "/signUpPage" component = { signUpPage } />
      <Route path = "/loginPage" component = { loginPage } />


    </HashRouter>
  );
}

export default App;
