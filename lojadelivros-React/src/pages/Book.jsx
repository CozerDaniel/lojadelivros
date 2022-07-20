import React from "react";
import { FiHeart } from "react-icons/fi";
import FlushExample from "../components/Acordeon";
import imagem from '../img/logo.png'

import '../css/book.css'


const Book = () => {
    return (
        <main className="main">
            <section className="produto">
                <article className="img-produto">
                    <div className="img">
                        <FiHeart className="icon-favorito"/>
                        <img src={imagem} alt="" />
                    </div>
                </article>
                <article className="descricao-produto">
                    <FlushExample />
                </article>
            </section>

        </main>
    )
}

export default Book;