import { HashRouter , Route } from 'react-router-dom'
import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

import homepage from './views/homepage'
import loginPage from './views/loginPage'
import signupBox from './components/signupBox'
function App() {
  return (
    <HashRouter>
      <Route exact path = "/" component = { signupBox }/>
    </HashRouter>
  );
}

export default App;
