import { HashRouter , Route } from 'react-router-dom'
import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

import homePage from './views/homePage'
import signInPage from './views/signInPage'
import signUpPage from './views/signUpPage'
import showPage from './views/showPage';

function App() {
  return (
    <HashRouter>
      <Route exact path = "/" component = { homepage }/>
      <Route path = "/signUpPage" component = { signUpPage } />
      <Route path = "/loginPage" component = { signInPage } />
      <Route path = "/showPage" component = { showPage } />
    </HashRouter>
  );
}

export default App;
