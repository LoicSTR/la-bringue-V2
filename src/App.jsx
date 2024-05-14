import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyle from './utils/style/GlobalStyle';
import Home from './pages/Home';
import Players from './pages/Players';
import Game from './pages/Game';
import Settings from './pages/Settings';

function App() {
    return (
        <React.StrictMode>
            <Router>
                <GlobalStyle />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/players" element={<Players />} />
                    <Route path="/game" element={<Game />} />
                    <Route path="/settings" element={<Settings />} />
                </Routes>
            </Router>
        </React.StrictMode>
    );
}

export default App;
