import React from 'react';
import './home.css';
import NavBar from '../../components/navbar';
import {useSelector} from 'react-redux';

function Home() {
    return(
        <>
        <NavBar/>
        <h2>Usuario: {useSelector(state => state.usuarioEmail)}</h2>
        </>
    )
}

export default Home;