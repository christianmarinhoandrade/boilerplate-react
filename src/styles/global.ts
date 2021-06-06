import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        text-decoration: none;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }
`

export default GlobalStyles
