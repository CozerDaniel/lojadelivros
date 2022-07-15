import React, {useState, useEffect} from "react";

import {
    Carousel,
    CarouselIndicators,
    CarouselItem,
    CarouselCaption,
    CarouselControl,
} from 'reactstrap'

const Home = () => {
    const [topBooks, setTopBooks] = useState([]);

    const acesso = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '28c6fd5c16msh42b6e1b29565d97p10b0ffjsn385ad67306c4',
            'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com'
        }
    };

    const getTopBooks = () => {

        fetch('https://hapi-books.p.rapidapi.com/month/2022/3', acesso)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
    }
    useEffect(()=>{
        getTopBooks();
        console.log(topBooks)
    },[])
    return (
        <div>
            <h2>home</h2>
        </div>
    )   
}

export default Home;