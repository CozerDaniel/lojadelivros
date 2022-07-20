import React, {useState, useEffect, useRef} from "react";
import { BiCaretRight } from 'react-icons/bi'

import BotaoCard from "../atomos/botao-card";
import Esquerda from "../atomos/esquerda";
import Direta from  "../atomos/direita"




import '../atomos/css-atomos/botao-card.css'
import '../atomos/css-atomos/esquerda-direita.css'

const Home = () => {
    const key = 'AIzaSyB9uGWjsSns0j9gXHP_IdsoRZn9g30eAzo'
    const url = 'https://www.googleapis.com/books/v1/volumes?q=inauthor:"Paulo+Coelho&key='
    
    const [Books, setBooks] = useState([]);
    const carrossel = useRef(null);

    const getBooks = async (url) => {
        const resp = await fetch(url);
        const data = await resp.json();

        setBooks(data.items);
    };

    
    useEffect(() => {
        const keyUrl = `${url}${key}`
        
        getBooks(keyUrl) 
    }, []);

    if (!Books || !Books.length) return <h3>Carregando...</h3> 

    return (
        <div>
            <section className="area-cards">
                <div className="titulo">
                    <h3>melhores titulos: Paulo Coelho </h3>
                </div>

                <div className="cards-view">
                    <Esquerda mover={carrossel} />

                    <div className="cards" ref={carrossel}>
                        {Books.map((book) => {
                            let imagem = book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail;
                            return (
                                <div className="card" key={book.id}>
                                    <img className="card-img" src={ imagem } alt="Card image cap" />

                                    <div className="card-body">
                                        <div className="card-titulo">
                                            <h5> {book.volumeInfo.title} </h5> 
                                        </div>

                                        <div className="card-subtitulo">
                                            <h6> {book.volumeInfo.authors} </h6>
                                            <h6>Pág: {book.volumeInfo.pageCount} </h6>
                                        </div>
                                        <BotaoCard route={`book/${book.id}`}/>
                                    </div>
                                </div>
                            )
                        })} 
                    </div> 
                    
                    <Direta mover={carrossel} />
                </div>
            </section>                     
        </div>
    )   
}

export default Home;