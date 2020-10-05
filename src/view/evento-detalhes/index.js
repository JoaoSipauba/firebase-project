import React, { useEffect, useState } from 'react';
import firebase from '../../config/firebase';
import './evento-detalhes.css';
import {Link, useParams} from 'react-router-dom';
import NavBar from '../../components/navbar'


function EventoDetalhes() {
    const {idEvento} = useParams()

    const [evento, setEvento] = useState({});
    const [img, setImg] = useState('');

    useEffect(()=>{
        firebase.database().ref('eventos').orderByChild('foto').once('value').then(async(snapshot)=>{
            let data = snapshot.val()
            let currentData = Object.values(data)
            await currentData.map(async(doc)=>{
                if (doc.foto === parseInt(idEvento)) {
                    let date = doc.data.split('-')
                    doc.data = `${date[2]}/${date[1]}/${date[0]}`
                    setEvento(doc)
                    await firebase.storage().ref(`imagens/${doc.foto}`).getDownloadURL().then(url => setImg(url))
                    return
                }
            })
        })
    },[idEvento,img])
    return(
        <>
            <NavBar/>
            <div className='title-container'>
                <p>{evento.titulo}</p>
            </div>
            <div className='container-fluid img-container'>
                <img src={img} className='img-banner' alt='Banner'/>
            </div>

            <div className='row mt-5 d-flex justify-content-around'>
                <div className='col-md-3 col-sm-12 box-info p-3 my-1'>
                    <i className='fas fa-ticket-alt fa-2x'></i>
                    <h5><strong>tipo</strong></h5>
                    <span className='mt-3'>{evento.tipo}</span>
                </div>
                <div className='col-md-3 col-sm-12 box-info p-3 my-1'>
                    <i className='fas fa-calendar-alt fa-2x'></i>
                    <h5><strong>data</strong></h5>
                    <span className='mt-3'>{evento.data}</span>
                </div>
                <div className='col-md-3 col-sm-12 box-info p-3 my-1'>
                    <i className='fas fa-clock fa-2x'></i>
                    <h5><strong>hora</strong></h5>
                    <span className='mt-3'>{evento.hora}</span>
                </div>
            </div>
            <div className='box-detalhes mt-5 mx-1'>
                <h5 className=''><strong>Detalhes do Evento</strong></h5>
                <p className=''>{evento.detalhes}</p>
            </div>
            <Link className='btn-editor mx-2'><i className='fas fa-edit fa-3x'></i></Link>
        </>
    )
}
export default EventoDetalhes;