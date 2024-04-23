import React from 'react';
import Accueil from './pages/Accueil';
import GlobalStyle from './utils/style/GlobalStyle';

function App() {
    return (
        <React.StrictMode>
            <GlobalStyle />
            <Accueil />
        </React.StrictMode>
    );
}

export default App;
