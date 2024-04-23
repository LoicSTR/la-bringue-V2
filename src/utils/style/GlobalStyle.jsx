import { createGlobalStyle } from 'styled-components'

const StyledGlobalStyle = createGlobalStyle`
    * {
        font-family: 'Poppins', sans-serif;
    }

    a {
      text-decoration: none;
    }

    body {
        background: #FC9E4F;
        background-size: cover;
        margin: 0;
    }
`

function GlobalStyle() {
  return <StyledGlobalStyle/>
}

export default GlobalStyle