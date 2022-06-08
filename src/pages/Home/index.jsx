import { useState, useEffect} from 'react';
import {Container} from './style.jsx';
import { chave } from '../../config/key.jsx';
import { Link } from 'react-router-dom';

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
                        <Link to={`/filme/${item.id}`}><img src={`${imagePath}${item.poster_path}`} alt={item.titulo}/></Link>
                        <span>{item.title}</span>
                    </li>
                ))}
            </ul>
        </Container>
    )
}