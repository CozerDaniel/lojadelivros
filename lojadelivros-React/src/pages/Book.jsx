import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

import BookAcordeon from "../components/Acordeon";

import { FiHeart } from "react-icons/fi";


import '../css/book.css'


const key = 'key=AIzaSyB9uGWjsSns0j9gXHP_IdsoRZn9g30eAzo'
const url = 'https://www.googleapis.com/books/v1/volumes/'


const Book = () => {
    const {id} = useParams();
    const [book, setBook] = useState();

    const getBook = async (url) => {
        const resp = await fetch(url)
        const data = await resp.json();

        setBook(data);
        console.log(data)
    };

    useEffect(() => {
        const bookUrl = `${url}${id}?${key}`
        getBook(bookUrl);
    }, [])
    
    return (
        
        <main className="main">
            {book && (
                <>
                    <section className="titulo">
                        <h1> {book.volumeInfo.title} </h1>
                    </section>
                    <section className="produto">
                        <article className="img-produto">
                            <div className="img">
                                <FiHeart className="icon-favorito"/>
                                <img src={book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail} alt="" />
                            </div>
                        </article>

                        <article className="descricao-produto">
                            <BookAcordeon 
                                autor={book.volumeInfo.authors} 
                                descricao={book.volumeInfo.description}
                                idioma={book.volumeInfo.language}
                                editora={book.volumeInfo.publisher}
                                publicacao={book.volumeInfo.publishedDate}
                                npaginas={book.volumeInfo.printedPageCount}
                            />
                        </article>
                    </section>
                </>
            )}
        </main>
    )
}

export default Book;