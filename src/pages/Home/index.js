import { useState, useEffect} from 'react';
import {Container} from './style.js';
import { chave } from '../../config/key.js';


export default function Home() {

    const [filmes, setFilmes] = useState([]);
    const imagePath = 'https://image.tmdb.org/t/p/w500';

    useEffect(()=> {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${chave}&language=en-US&page=1`)
        .then(response => response.json())
        .then(data => setFilmes(data.results))
    }, [])

    return (
        <Container>
            <h1>Movies</h1>
            <ul>
                {filmes.map((item, index) => (
                    <li key={item.id}>
                        <a href='www.google.com'><img src={`${imagePath}${item.poster_path}`} alt={item.titulo}/></a>
                        <span>{item.title}</span>
                    </li>
                ))}
            </ul>
        </Container>
    )
}