import {Container} from './style.js';

export default function Home() {
    return (
        <Container>
            <h1>Movies</h1>
            <ul>
                <li>
                    <a href='www.google.com'><img src="https://upload.wikimedia.org/wikipedia/pt/0/00/Spider-Man_No_Way_Home_poster.jpg" alt=""/></a>
                    <span>Spider Man</span>
                </li>
                <li>
                    <a href='www.google.com'><img src="https://upload.wikimedia.org/wikipedia/pt/0/00/Spider-Man_No_Way_Home_poster.jpg" alt=""/></a>
                    <span>Spider Man</span>
                </li>
                <li>
                    <a href='www.google.com'><img src="https://upload.wikimedia.org/wikipedia/pt/0/00/Spider-Man_No_Way_Home_poster.jpg" alt=""/></a>
                    <span>Spider Man</span>
                </li>
            </ul>
        </Container>
    )
}