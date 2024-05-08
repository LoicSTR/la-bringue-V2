import React from 'react';
import Accueil from './pages/Accueil';
import Joueurs from './pages/Joueurs';
import Partie from './pages/Partie';
import Challenge from './components/Challenge';
import Vote from './components/Vote';
import Resultats from './components/Resultats';

import GlobalStyle from './utils/style/GlobalStyle';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <React.StrictMode>
            <Router>
                <GlobalStyle />
                <Routes>
                    <Route path="/" element={<Accueil />} />
                    <Route path="/joueurs" element={<Joueurs />} />
                    <Route path="/partie/*" element={<Partie />} />
                    <Route
                        path="/partie/challenge"
                        exact
                        element={<Challenge />}
                    />
                    <Route path="/partie/vote" element={<Vote />} />
                    <Route path="/partie/resultats" element={<Resultats />} />
                </Routes>
            </Router>
        </React.StrictMode>
    );
}

export default App;
