import React, {useState, useEffect} from "react";
import {
    Card,  
    CardGroup,
    CardImg,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button
} from 'reactstrap'


const Home = () => {
    const key = 'AIzaSyB9uGWjsSns0j9gXHP_IdsoRZn9g30eAzo'
    const url = 'https://www.googleapis.com/books/v1/volumes?q=inauthor:"Paulo+Coelho&key='
    
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
        <section className="area-cards">
            <div className="titulo">
                <h3>melhores titulos</h3>
            </div>
            <div className="cards">
                <Card className="card">
                    <CardImg className="card-img"
                    alt="Card image cap"
                    src="https://picsum.photos/318/180"
                    top
                    width="100%"
                    />
                    <CardBody className="card-body">
                    <CardTitle className="card-titulo">
                       <h5> Card title  </h5> 
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted card-subtitulo"
                    >
                        <h6> Card subtitle </h6> 
                    </CardSubtitle>
                    <Button className="card-btn">
                        saiba mais...
                    </Button>
                    </CardBody>
                </Card>
                <Card className="card">
                    <CardImg className="card-img"
                    alt="Card image cap"
                    src="https://picsum.photos/318/180"
                    top
                    width="100%"
                    />
                    <CardBody className="card-body">
                    <CardTitle className="card-titulo">
                       <h5> Card title  </h5> 
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted card-subtitulo"
                    >
                        <h6> Card subtitle </h6> 
                    </CardSubtitle>
                    <Button className="card-btn">
                        saiba mais...
                    </Button>
                    </CardBody>
                </Card>
                <Card className="card">
                    <CardImg className="card-img"
                    alt="Card image cap"
                    src="https://picsum.photos/318/180"
                    top
                    width="100%"
                    />
                    <CardBody className="card-body">
                    <CardTitle className="card-titulo">
                       <h5> Card title  </h5> 
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted card-subtitulo"
                    >
                        <h6> Card subtitle </h6> 
                    </CardSubtitle>
                    <Button className="card-btn">
                        saiba mais...
                    </Button>
                    </CardBody>
                </Card>
                <Card className="card">
                    <CardImg className="card-img"
                    alt="Card image cap"
                    src="https://picsum.photos/318/180"
                    top
                    width="100%"
                    />
                    <CardBody className="card-body">
                    <CardTitle className="card-titulo">
                       <h5> Card title  </h5> 
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted card-subtitulo"
                    >
                        <h6> Card subtitle </h6> 
                    </CardSubtitle>
                    <Button className="card-btn">
                        saiba mais...
                    </Button>
                    </CardBody>
                </Card>
                <Card className="card">
                    <CardImg className="card-img"
                    alt="Card image cap"
                    src="https://picsum.photos/318/180"
                    top
                    width="100%"
                    />
                    <CardBody className="card-body">
                    <CardTitle className="card-titulo">
                       <h5> Card title  </h5> 
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted card-subtitulo"
                    >
                        <h6> Card subtitle </h6> 
                    </CardSubtitle>
                    <Button className="card-btn">
                        saiba mais...
                    </Button>
                    </CardBody>
                </Card>
            </div>
            
        </section>
    )   
}

export default Home;