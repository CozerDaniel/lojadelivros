import React, {useState, useEffect} from "react";



const Home = () => {
    const key = 'AIzaSyB9uGWjsSns0j9gXHP_IdsoRZn9g30eAzo'
    const url = 'https://www.googleapis.com/books/v1/volumes?q=melhores+do+ano&key='
    
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
        <div> 
            {Books && Books.map((book)=> <p>{ book.volumeInfo.title }</p> )}
        </div>
    )   
}

export default Home;