import { createGlobalStyle } from 'styled-components';
import colors from './colors';

const StyledGlobalStyle = createGlobalStyle`
    * {
        font-family: 'Poppins', sans-serif;
    }

    a {
      text-decoration: none;
    }

    body {
        background: ${colors.backgroundLight};
        background-size: cover;
        margin: 0;
    }
`;

function GlobalStyle() {
    return <StyledGlobalStyle />;
}

export default GlobalStyle;
