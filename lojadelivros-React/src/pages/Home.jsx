import React, { useRef } from "react";

import Esquerda from "../atomos/esquerda";
import Direta from  "../atomos/direita";

import CardBookGratis from "../components/titulos-gratuitos";
import CardBookPortugues from "../components/titulosPortugues";



const Home = () => {
    const carrosselgratis = useRef(null);
    const carrosselportugues = useRef(null);

    return (
        <div>
            <section className="area-cards">
                <div className="titulo">
                    <h3> Títulos gratuitos </h3>
                </div>

                <div className="cards-view" >
                    <Esquerda mover={carrosselgratis} />


                        <CardBookGratis elemento={carrosselgratis}/>
                    
                    <Direta mover={carrosselgratis} />
                </div>
            </section>                     
            <section className="area-cards-dois">
                <div className="titulo-dois">
                    <h3> Português </h3>
                </div>

                <div className="cards-view" >
                    <Esquerda mover={carrosselportugues} />


                        <CardBookPortugues elemento={carrosselportugues}/>
                    
                    <Direta mover={carrosselportugues} />
                </div>
            </section>                     
        </div>
    )   
}

export default Home;