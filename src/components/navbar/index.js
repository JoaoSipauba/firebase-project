import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <Link to = '/' className="navbar-brand">Eventos</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/Login">Login <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/NovoUsuario'>Cadastrar</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default NavBar;