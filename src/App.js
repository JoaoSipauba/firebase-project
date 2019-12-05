import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom'

// paginas
import Login from './view/login';
import NovoUsuario from './view/usuario-novo';
import Home from './view/home';

function App() {
  return(
    <Router>
      <Route exact path = '/' component={Home}/>
      <Route exact path = '/NovoUsuario' component={NovoUsuario}/>
      <Route exact path = '/Login' component={Login}/>
    </Router>
  )
}

export default App;
