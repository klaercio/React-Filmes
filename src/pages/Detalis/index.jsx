import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { chave } from "../../config/key";
import { Container } from "./style.jsx";
import { useNavigate } from "react-router-dom";

export default function Details() {

    const [filme, setFilme] = useState({});
    const imagePath = 'https://image.tmdb.org/t/p/w500';
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(()=> {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${chave}&language=en-US`)
        .then(response => response.json())
        .then(data => {
            const movie = {
                id : id,
                title : data.title,
                img : `${imagePath}${data.poster_path}`,
                sinopse : data.overview,
                lancamento : data.release_date,
            }
            setFilme(movie);
        })
    }, [id]);


    return (
        <Container>
            <div className="Movie">
                <img src={filme.img} alt={filme.title}/>
                <div className="details">
                    <h1>{filme.title}</h1>
                    <span>Sinopse : {filme.sinopse}</span>
                    <span className="lancamento">Lançamento : {filme.lancamento}</span>
                    <button onClick={()=> navigate(-1)}>Go back</button>
                </div>
            </div>
        </Container>
    );
}