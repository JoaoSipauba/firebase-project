import React, { useState } from 'react';
import './evento-cadastro.css';
import { useSelector } from 'react-redux';

import firebase from '../../config/firebase';
import NavBar from '../../components/navbar';

function EventoCadastro() {
    const [carregando, setCarregando] = useState();
    const [titulo, setTitulo] = useState();
    const [tipo, setTipo] = useState();
    const [detalhes, setDetalhes] = useState();
    const [data, setData] = useState();
    const [hora, setHora] = useState();
    const [foto, setFoto] = useState();
    const usuarioEmail = useSelector(state => state.usuarioEmail);

    const storage = firebase.storage();
    const db = firebase.database();

    function Cadastrar() {
        setCarregando(1);
        db.ref('eventos/').once('value').then(snapshot=>{
            let obj = snapshot.val()
            let id = Object.values(obj).length + 1
            console.log(id);
            storage.ref(`imagens/${id}`).put(foto)
            storage.ref(`imagens/${foto.id}`).put(foto).then(() => {
                db.ref('eventos').push({
                    titulo: titulo,
                    tipo: tipo,
                    detalhes: detalhes,
                    data ,
                    hora: hora,
                    usuario: usuarioEmail,
                    visualizacoes: 0,
                    foto: id,
                    publico: 1,
                    criacao: new Date()
                }).then(() => {
                    alert('sucesso')
                    setCarregando(0)
                }).catch(() => {
                    alert('Erro ao enviar')
                    setCarregando(0)
                });
            })
        })
    }
    return (
        <>
            <NavBar />
            <div className='col-12 mt-5'>
                <div className='row'>
                    <h3 className='mx-auto font-weight-bold'>Novo evento</h3>
                </div>

                <form>
                    <div className='form-group'>
                        <label>Titulo:</label>
                        <input onChange={(e) => setTitulo(e.target.value)} type='text' className='form-control'></input>
                    </div>

                    <div className='form-group'>
                        <label>Tipo do evento:</label>
                        <select onChange={(e) => setTipo(e.target.value)} className='form-control'>
                            <option disabled selected value>-- selecione um evento --</option>
                            <option>teatro</option>
                            <option>show</option>
                            <option>festa</option>
                            <option>evento</option>
                        </select>
                    </div>

                    <div className='form-group'>
                        <label>Descrição do evento:</label>
                        <textarea onChange={(e) => setDetalhes(e.target.value)} className='form-control row-3'></textarea>
                    </div>

                    <div className='form-group row'>
                        <div className='col 6'>
                            <label>data:</label>
                            <input onChange={(e) => setData(e.target.value)} type='date' className='form-control'></input>
                        </div>
                        <div className='col 6'>
                            <label>hora:</label>
                            <input onChange={(e) => setHora(e.target.value)} type='time' className='form-control'></input>
                        </div>
                    </div>

                    <div className='form-group'>
                        <label>Upload de foto:</label>
                        <input onChange={(e) => setFoto(e.target.files[0])} type='file' className='form-control' />
                    </div>

                    <div className='row'>
                        {
                        carregando > 0 ? <div className="spinner-border text-danger mx-auto" role="status"><span class="sr-only">Loading...</span></div>
                        :<button type='button' className='btn btn-lg btn-block mt-3 mb-5 btn-cadastro' onClick={Cadastrar}>Publicar evento</button>
                        }
                    </div>
                </form>
            </div>
        </>
    )
}
export default EventoCadastro;