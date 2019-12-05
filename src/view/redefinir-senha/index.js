import React, {useState} from 'react';
import './redefinir-senha.css';

import firebase from '../../config/firebase';
import 'firebase/auth';
import NavBar from '../../components/navbar';

function RedefinirSenha() {
    const [email, setEmail] = useState()
        function EnviarEmail() {
            firebase.auth().sendPasswordResetEmail(email).then(resultado =>{
                alert('email enviado')
            }).catch(erro=>{
                alert('insira um email valido')
            })
        }
    return(
        <>
        <NavBar/>
        <form className='text-center form-login mx-auto mt-5'>
            <h1 className='h3 mb-3 text-black font-weight-bold'>Redefinir Senha</h1>

            <input onChange={(e)=> setEmail(e.target.value)} type='email' className='form-control my-2' placeholder='email'></input>
            <button type='button' className='btn btn-lg btn-block mt-5 mb-5 btn-cadastro' onClick={EnviarEmail}>Enviar</button>
        </form>
        </>
    )
    
}

export default RedefinirSenha;