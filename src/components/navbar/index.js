import React from 'react';
import './navbar.css';
import { Link, useHistory } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

function NavBar() {
    const dispatch = useDispatch()
    const history = useHistory()

    function handleGoToHome(logout){
        if (logout === true) {
            dispatch({type:'LOG_OUT'})
        }
        history.push('/')
    }
    return (
        <>
        <nav className="navbar navbar-expand-lg">
            <div id='navbar-child' className='container'>
                <span id="logo" className="navbar-brand text-white" onClick={handleGoToHome}>BlueEvents</span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars text-white"></i>            
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                    {
                        useSelector(state => state.usuarioLogado) < 1 ?
                        <>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Login">Login <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/NovoUsuario'>Cadastrar</Link>
                            </li>
                        </>
                        :
                        <>
                            <li className="nav-item">
                                <Link className="nav-link" to='/EventoCadastro'>Publicar eventos</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/eventos/meus">Meus eventos <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" onClick={()=>handleGoToHome(true)}>Sair</Link>
                            </li>
                        </>
                    }
                    </ul>
                </div>
            </div>
        </nav>
        </>
    )
}
export default NavBar;