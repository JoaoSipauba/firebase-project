import React, {useState} from 'react';
import './login.css';

import firebase from '../../config/firebase';
import 'firebase/auth';

function Login() {
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();

    function logar() {
        firebase.auth().SignInWithEmailAndPassword(email,senha).then(resultado =>{
            alert('sucesso');
        }).catch(erro =>{
            alert('erro');
        })
    }

    return (
        <div className="login-content d-flex align-items-center">
            <form className="form-signin mx-auto">
                <img className="mb-4" src="../../assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
                <h1 className="h3 mb-3 font-weight-normal text-center text-white font-weight-bold">Login</h1>

                <input onChange={(e)=> setEmail(e.target.value)} type="email" id="inputEmail" class="form-control my-2" placeholder="Email" />
                <input onChange={(e)=> setSenha(e.target.value)} type="password" id="inputPassword" class="form-control my-2" placeholder="Senha" />
                
                <button class="btn btn-lg btn-block btn-login" type="button" onClick={logar}>Login</button>
                
                <div className="opcoes-login mt-5">
                    <a href="#" className="mx-2">Recuperar senha</a>
                    <span className="text-white">&#9733;</span>
                    <a href="#" className="mx-2">Quero cadastrar</a>
                </div>
            </form>
        </div>
    )
}

export default Login