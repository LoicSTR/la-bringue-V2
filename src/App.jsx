import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyle from './utils/style/GlobalStyle';
import Home from './pages/Home'; // Renamed from Accueil
import Players from './pages/Players'; // Renamed from Joueurs
import Game from './pages/Game'; // Renamed from Partie
import Challenge from './components/Challenge'; // Renamed from Challenge
import Vote from './components/Vote'; // Renamed from Vote
import Results from './components/Results'; // Renamed from Resultats

function App() {
    return (
        <React.StrictMode>
            <Router>
                <GlobalStyle />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/players" element={<Players />} />
                    <Route path="/game/*" element={<Game />} />
                    <Route
                        path="/game/challenge"
                        exact
                        element={<Challenge />}
                    />
                    <Route path="/game/vote" element={<Vote />} />
                    <Route path="/game/results" element={<Results />} />
                </Routes>
            </Router>
        </React.StrictMode>
    );
}

export default App;
