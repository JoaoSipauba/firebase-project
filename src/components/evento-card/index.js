import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../config/firebase';
import url from '../../assets/doepaz.jpg'

import './evento-card.css';

function EventoCard({id, img, titulo, detalhes, visualizacoes}) {

    const [urlImg, setUrlImg] = useState(url)

    useEffect(()=> {
        if (img) {
            firebase.storage().ref(`imagens/${img}`).getDownloadURL().then(url => setUrlImg(url))
        }
    });
    return(
        <div  className='col-md-3 col-sm-12 py-2'>
            <div id="card" className='p-1'>

                <img id='banner-evento' src={urlImg} className='card-img img-cartao' alt='Imagem do Evento'/>

                <div className='card-body'>
                    <h5>{titulo}</h5>
                    <p id='detalhes' className='card-text text-justify'>{detalhes}</p>

                    <div className='row rodape-card d-flex align-items-center'>
                        <div id='div-btn' className='col-6'>
                            <Link to={'/EventoDetalhes/' + id} className='btn btn-sm btn-detalhes'>Detalhes</Link>
                        </div>
                    
                        <div className='col-6 text-right'>
                            <i className='fas fa-eye'></i> <span>{visualizacoes}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EventoCard;