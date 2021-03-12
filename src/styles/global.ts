import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
:root{
    /* --color-main: #362158; */
    --color-main: #12022C;
    --color-sec: #FEA521;
    --color-thi: #7921EA;
    --white: #EBF0F5;

    --radius-sm: .2rem;

    --content-width: 25rem;

}
html {
    font-size: 62.5%;
}
@media(min-width: 720px) {
    html {
        font-size: 87.5%;
} 
}
html, body, #__next {
    height: 100%;
}
body {
    font-family: 'Roboto Mono', monospace;
    background: var(--color-main);
}
::selection {
  color: var(--color-main);
  background: var(--color-sec);
}
p{
    line-height: 140%;
}
a {
    color: inherit
}
input,
textarea,
button {
    font-family: 'Roboto Mono', monospace;

}
`

export default GlobalStyles
