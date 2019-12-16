import React, { useState } from 'react';
import './evento-detalhes.css';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
import firebase from '../../config/firebase';
import NavBar from '../../components/navbar'


function EventoDetalhes() {
    return(
        <>
            <NavBar/>
            <div className='container-fluid'>
                <img src='https://via.placeholder.com/150' className='img-banner' alt='Banner'/>
            </div>

            <div className='row mt-5 d-flex justify-content-around'>
                <div className='col-md-3 col-sm-12 box-info p-3 my-1'>
                    <i className='fas fa-ticket-alt fa-2x'></i>
                    <h5><strong>tipo</strong></h5>
                    <span className='mt-3'>festa</span>
                </div>
                <div className='col-md-3 col-sm-12 box-info p-3 my-1'>
                    <i className='fas fa-calendar-alt fa-2x'></i>
                    <h5><strong>data</strong></h5>
                    <span className='mt-3'>10/10/19</span>
                </div>
                <div className='col-md-3 col-sm-12 box-info p-3 my-1'>
                    <i className='fas fa-clock fa-2x'></i>
                    <h5><strong>hora</strong></h5>
                    <span className='mt-3'>10:10</span>
                </div>
            </div>
            <div className='row box-detalhes mt-5 mx-1'>
                <h5 className='mx-auto'><strong>Detalhes do Evento</strong></h5>
                <p className='text-justify p-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <Link to='' className='btn-editor mx-2'><i className='fas fa-edit fa-3x'></i></Link>
        </>
    )
}
export default EventoDetalhes;