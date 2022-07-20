import React, {useState, useEffect} from "react";

import BotaoCard from "../atomos/botao-card";

import '../css/card.css'

const CardBookPortugues = (props) => {
    const key = 'AIzaSyB9uGWjsSns0j9gXHP_IdsoRZn9g30eAzo'
    const url = 'https://www.googleapis.com/books/v1/volumes?q=filter=ptBR&key='

    const [Books, setBooks] = useState([]);
   

    const getBooks = async (url) => {
        const resp = await fetch(url);
        const data = await resp.json();

        setBooks(data.items);
    };

    useEffect(() => {
        const keyUrl = `${url}${key}`
        
        getBooks(keyUrl) 
    }, []);

    return (
        <div className="cards" ref={props.elemento}>
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
    )

}

export default CardBookPortugues;