import { HashRouter , Route } from 'react-router-dom'
import React from 'react'

import homepage from './views/homepage'
function App() {
  return (
    <HashRouter>
      <Route exact path = "/" component = { homepage }/>
    </HashRouter>
  );
}

export default App;
