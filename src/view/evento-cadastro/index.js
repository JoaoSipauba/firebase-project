import React, {useState} from 'react';
import './evento-cadastro.css';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';

import firebase from '../../config/firebase';
import NavBar from '../../components/navbar';

function EventoCadastro() {
    const [titulo, setTitulo] = useState();
    const [tipo, setTipo] = useState();
    const [detalhes, setDetalhes] = useState();
    const [data, setData] = useState();
    const [hora, setHora] = useState();
    const [foto, setFoto] = useState();
    const [usuarioEmail, setUsuarioEmail] = useState();

    function Cadastrar() {
        alert('It works');
    }
    return(
        <>
        <NavBar/>
        <div className='col-12 mt-5'>
            <div className='row'>
                <h3 className='mx-auto font-weight-bold'>Novo evento</h3>
            </div>

            <form>
                <div className='form-group'>
                    <label>Titulo:</label>
                    <input onChange={(e)=> setTitulo(e.target.value)} type='text' className='form-control'></input>
                </div>

                <div className='form-group'>
                    <label>Tipo do evento:</label>
                    <select onChange={(e)=> setTipo(e.target.value)} className='form-control'>
                        <option disabled selected value>-- selecione um evento --</option>
                        <option>teatro</option>
                        <option>show</option>
                        <option>festa</option>
                        <option>evento</option>
                    </select>
                </div>

                <div className='form-group'>
                    <label>Descrição do evento:</label>
                    <textarea onChange={(e)=>setDetalhes(e.target.value)} className='form-control row-3'></textarea>
                </div>

                <div className='form-group row'>
                    <div className='col 6'>
                        <label>data:</label>
                        <input onChange={(e)=> setData(e.target.value)} type='date' className='form-control'></input>
                    </div>
                    <div className='col 6'>
                        <label>hora:</label>
                        <input onChange={(e)=> setHora(e.target.value)} type='time' className='form-control'></input>
                    </div>
                </div>

                <div className='form-group'>
                    <label>Upload de foto:</label>
                    <input onChange={(e)=> setFoto(e.target.value)} type = 'file' className='form-control'/>
                </div>

                <button type='button' className='btn btn-lg btn-block mt-3 mb-5 btn-cadastro' onClick={Cadastrar}>Publicar evento</button>
            </form>
        </div>
        </>
    )
}
export default EventoCadastro;