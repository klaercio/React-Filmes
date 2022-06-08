import styled from 'styled-components';

export const Container = styled.div `
    h1 {
        text-align : center;
        margin : 4rem 0;
    }

    ul {
        list-style : none;
        display: grid;
        grid-template-columns : repeat(auto-fit , minmax(200px, 1fr));
        column-gap : 3rem;
        row-gap : 4rem;
    }

    li {
        display: flex;
        flex-direction : column;
        align-items : center;
    }

    img {
        width : 18rem;
        border-radius : 1.6rem;
        margin-bottom : 2rem;
    }

    span {
        font-weight : bold;
        font-size: 1.92rem;
    }

    a {
        transition : scale, 0.3s;
    }

    a:hover {
        transform: scale(1.1);
    }
`