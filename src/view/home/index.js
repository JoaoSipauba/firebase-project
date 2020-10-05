import React,{useState, useEffect} from 'react';
import './home.css';
import NavBar from '../../components/navbar';
import firebase from '../../config/firebase';
import EventoCard from '../../components/evento-card';

function Home({match}) {

    const [eventos, setEventos] = useState([])
    const [carregando, setCarregando] = useState(true)
    
    useEffect(()=>{
        firebase.database().ref('eventos').on('value', resultado =>{
            let snapshot = resultado.val();
            if (snapshot !== null || snapshot !== undefined) {
                setEventos(Object.values(snapshot))
                setCarregando(false)
            }              
        })
    },[])

    return(
        <>
        <NavBar/>

        <div className='row p-5 '>
            <h2 className='mx-auto pb-2'>Eventos Publicados</h2>
        </div>

        <div className='p-3 row'>
            {   
                carregando?
                    <div class="spinner-border mx-auto mt-5" role="status"><span class="sr-only">Loading...</span></div>
                :
                    eventos.map((item, index) => <EventoCard key={index} id={item.foto} img={item.foto} titulo={item.titulo} detalhes={item.detalhes} visualizacoes={item.visualizacoes} />)
                    // <EventoCard
                    //     id={5} 
                    //     img={""} 
                    //     titulo={"Doe paz!"} 
                    //     detalhes={"Doe paz enquanto é tempo!"} 
                    //     visualizacoes={'2'} />   
                }
        </div>
        </>
    )
}

export default Home;