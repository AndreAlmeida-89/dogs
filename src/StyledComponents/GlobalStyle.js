import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box;
}

body{
    padding-top: 4rem;
    margin: 0px;
    color: #333;
    --type-first: Helvetica, Arial, sans-serif;
    --type-second: 'Spectral', Georgia;
    font-family: var(--type-first);
}

img{
    display: block;
    max-width: 100%;
}

button, input{
    display: block;
    font-size: 1rem;
    font-family: var(---type-first);
    color: #333;
}

a{
    text-decoration: none;
}
`;



export default GlobalStyle;
