import React, { useState } from 'react';
import firebase from '../../config/firebase';
import 'firebase/auth';
import {Link} from 'react-router-dom';
import NavBar from '../../components/navbar'


import './usuario-novo.css'

function NovoUsuario() {
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [carregando, setCarregando] = useState();

    function cadastrar() {
        setCarregando(1)
        firebase.auth().createUserWithEmailAndPassword(email, senha).then(resultado => {
            setCarregando(0)
            alert('usuario cadastrado')
        }).catch(erro => {
            setCarregando(0)
            alert('algo deu errado')
        })
    }
    return (
        <>
            <NavBar/>
            <div className='form-cadastro'>
                <form className='text-center form-login mx-auto mt-5'>
                    <h1 className='h3 mb-3 text-black font-weight-bold'>Cadastro</h1>

                    <input onChange={(e) => setEmail(e.target.value)} type='email' className='form-control my-2' placeholder='email'></input>
                    <input onChange={(e) => setSenha(e.target.value)} type='password' className='form-control my-2' placeholder='senha'></input>

                    {
                        carregando ? <div class="spinner-border text-danger" role="status"><span class="sr-only">Loading...</span></div>
                            : <button type='button' className='btn btn-lg btn-block mt-3 mb-5 btn-cadastro' onClick={cadastrar}>Cadastrar</button>
                    }

                    <div className="opcoes-cadastro mt-5">
                        <Link to='/' className="mx-2">Fazer login</Link>
                    </div>
                </form>
            </div>
        </>
    )
};

export default NovoUsuario;