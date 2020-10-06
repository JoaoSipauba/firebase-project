import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
// paginas
import Login from './view/login';
import NovoUsuario from './view/usuario-novo';
import Home from './view/home';
import RedefinirSenha from './view/redefinir-senha';
import EventoCadastro from './view/evento-cadastro';
import EventoDetalhes from './view/evento-detalhes';

function Routes() {
    return(
        <Router>
            <Route exact path = '/' component={Home}/>
            <Route exact path = '/NovoUsuario' component={NovoUsuario}/>
            <Route exact path = '/Login' component={Login}/>
            <Route exact path = '/RedefinirSenha' component={RedefinirSenha}/>
            <Route exact path = '/EventoCadastro' component={EventoCadastro}/>
            <Route path = '/EventoDetalhes/:idEvento' component = {EventoDetalhes}/>
        </Router>
    )
}
export default Routes;