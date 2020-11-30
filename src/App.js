import { HashRouter , Route } from 'react-router-dom'
import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

import homepage from './views/homePage'
import signInPage from './views/signInPage'
import signUpPage from './views/signUpPage'
function App() {
  return (
    <HashRouter>
      <Route exact path = "/" component = { homepage }/>
      <Route path = "/signUpPage" component = { signUpPage } />
      <Route path = "/loginPage" component = { signInPage } />


    </HashRouter>
  );
}

export default App;
