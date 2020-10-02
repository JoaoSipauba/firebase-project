import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import firebase from '../../config/firebase';
import url from '../../assets/doepaz.jpg'

import './evento-card.css';

function EventoCard({id, img, titulo, detalhes, visualizacoes}) {
    const history = useHistory();

    const [urlImg, setUrlImg] = useState(url)

    useEffect(()=> {
        if (img) {
            firebase.storage().ref(`imagens/${img}`).getDownloadURL().then(url => setUrlImg(url))
        }
    });
    function handleGoToDetalhes() {
        history.push('/EventoDetalhes/' + id)
    }
    return(
        <div  className='col-md-3 col-sm-12 py-2'>
            <div id="card" className='p-1' onClick={handleGoToDetalhes}>

                <img id='banner-evento' src={urlImg} className='card-img img-cartao' alt='Imagem do Evento'/>

                <div className='card-body'>
                    <h5>{titulo}</h5>
                    <p id='detalhes' className='card-text text-justify'>{detalhes}</p>

                    <div className='row rodape-card d-flex align-items-center'>
                    
                        <div id='view' className='col-12 text-right'>
                            <i className='fas fa-eye'></i> <span>{visualizacoes}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EventoCard;