import React, {useState, useEffect, useRef} from "react";

// import BotaoCard from "../atomos/botao-card";
import Esquerda from "../atomos/esquerda";
import CardBook from "../components/card";
import Direta from  "../atomos/direita";



const Home = () => {
    const carrossel = useRef(null);

    return (
        <div>
            <section className="area-cards">
                <div className="titulo">
                    <h3>melhores titulos: Paulo Coelho </h3>
                </div>

                <div className="cards-view" >
                    <Esquerda mover={carrossel} />


                        <CardBook elemento={carrossel}/>
                    
                    <Direta mover={carrossel} />
                </div>
            </section>                     
        </div>
    )   
}

export default Home;