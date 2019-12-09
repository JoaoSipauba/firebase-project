import React,{useState, useEffect} from 'react';
import './home.css';
import NavBar from '../../components/navbar';
import firebase from '../../config/firebase'
import EventoCard from '../../components/evento-card';

function Home() {

    const [eventos, setEventos] = useState([])
    const [pesquisa, setPesquisa] = useState('')

    let listaEventos = []
    
    useEffect(()=>{
        firebase.firestore().collection('eventos').get().then(async(resultado)=>{
            await resultado.docs.forEach(doc => {
                if(doc.data().titulo.indexOf(pesquisa) >= 0){
                listaEventos.push({
                    id: doc.id,
                    ...doc.data()
                })
            }
            })
            setEventos(listaEventos);
        })
    })

    return(
        <>
        <NavBar/>

        <div className='row p-5 '>
            <h2 className='mx-auto pb-2'>Eventos Publicados</h2>
            <input onChange={(e) => setPesquisa(e.target.value)} type='text' className='form-control text-center' placeholder='Pesquisar evento pelo Titulo...'/>
        </div>

        <div className='p-3 row'>
        {eventos.map(item => <EventoCard key={item.id} id={item.id} img={item.foto} titulo={item.titulo} detalhes={item.detalhes} visualizacoes={item.visualizacoes} />)}
            
        </div>
        </>
    )
}

export default Home;