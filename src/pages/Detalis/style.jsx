import  styled  from 'styled-components'

export const Container = styled.div`

    margin: calc(50vh - 300px) 0px;    

    h1 {
        margin: 3rem 0;
    }

    .Movie {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    img {
        width: 300px;
        border-radius: 1rem;
    }

    .details {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-left: 7rem;
        max-width: 50%;

    }

    button {
        background-color: #6654da;
        border: none;
        cursor: pointer;
        border-radius: 1rem;
        color: white;
        padding: 0.8rem 2rem; 
        margin-top: 1rem;
        font-size: 1.5rem;
        transition: all 0.3s;
    }

    button:hover {
        background-color: #5848c2;
        transform: scale(1.05);
    }

    span {
        line-height: 150%;
        margin-bottom: 1rem;
        font-size: 200%;
    }

    .lancamento {
        opacity: 0.5;
    }
`