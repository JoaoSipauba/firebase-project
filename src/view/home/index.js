import React,{useState, useEffect} from 'react';
import './home.css';
import NavBar from '../../components/navbar';
import firebase from '../../config/firebase';
import EventoCard from '../../components/evento-card';
// import {useSelector} from 'react-redux';

function Home({match}) {

    const [eventos, setEventos] = useState([])
    // const [pesquisa, setPesquisa] = useState('')

    // const usuarioEmail = useSelector(state => state.usuarioEmail);

    useEffect(()=>{
        firebase.database().ref('eventos').on('value', resultado =>{
            let snapshot = resultado.val();
            setEventos(Object.values(snapshot))
        })
    },[])

    return(
        <>
        <NavBar/>

        <div className='row p-5 '>
            <h2 className='mx-auto pb-2'>Eventos Publicados</h2>
            <input onChange={(e) => console.log(e.target.value)} type='text' className='form-control text-center' placeholder='Pesquisar evento pelo Titulo...'/>
        </div>

        <div className='p-3 row'>
        {eventos.map(item => <EventoCard key={item.id} id={item.id} img={item.foto} titulo={item.titulo} detalhes={item.detalhes} visualizacoes={item.visualizacoes} />)}
        <EventoCard
            id={5} 
            img={""} 
            titulo={"Doe paz!"} 
            detalhes={"Doe paz enquanto é tempo!"} 
            visualizacoes={'2'} />  
        </div>
        </>
    )
}

export default Home;