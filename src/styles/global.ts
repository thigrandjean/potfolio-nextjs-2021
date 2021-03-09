import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
:root{
    --color-main: #362158;
    --color-sec: #FEA521;
    --white: #EBF0F5;

    --radius-sm: .2rem

}
html {
    font-size: 62.5%;
}
html, body, #__next {
    height: 100%;
}
body {
    font-family: 'Roboto Mono', monospace;
    background: var(--color-main)
}
`

export default GlobalStyles
