import React, {useState} from 'react';
import './login.css';
import {Link, Redirect} from 'react-router-dom'

import firebase from '../../config/firebase';
import 'firebase/auth';

import {useSelector, useDispatch} from 'react-redux';

function Login() {
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [carregando, setCarregando] = useState()

    const dispatch = useDispatch();
    
    function logar() {
        setCarregando(1)
        firebase.auth().signInWithEmailAndPassword(email,senha).then(resultado=>{
            setCarregando(0)
            dispatch({type:'LOG_IN', usuarioEmail:email})
        }).catch(erro=>{
            setCarregando(0)
            alert('erro ao logar');
        })
    }

    return (
        <>
        {useSelector(state => state.usuarioLogado) > 0 ? <Redirect to ='/'/>: null}
        <div className="login-content d-flex align-items-center">
            <form className="form-signin mx-auto">
                <img className="mb-4" src="../../assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
                <h1 className="h3 mb-3 font-weight-normal text-center text-white font-weight-bold">Login</h1>

                <input onChange={(e)=> setEmail(e.target.value)} type="email" id="inputEmail" class="form-control my-2" placeholder="Email" />
                <input onChange={(e)=> setSenha(e.target.value)} type="password" id="inputPassword" class="form-control my-2" placeholder="Senha" />
                
                <div className='row mt-3 mx-auto btn-block'>
                {
                    carregando ? <div class="spinner-border text-danger btn-block mx-auto" role="status"><span class="sr-only">Loading...</span></div>
                    : <button class="btn btn-lg btn-block btn-login" type="button" onClick={logar}>Login</button>
                }
                </div>
                <div className="opcoes-login mt-3">
                    <Link to = '/RedefinirSenha' className="mx-2">Recuperar senha</Link>
                    <span className="text-white">&#9733;</span>
                    <Link to='NovoUsuario' className="mx-2">Quero cadastrar</Link>
                </div>
            </form>
        </div>
        </>
    )
}

export default Login