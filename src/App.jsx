import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import GlobalStyle from './utils/style/GlobalStyle';
import Home from './pages/Home';
import Players from './pages/Players';
import Game from './pages/Game';

function App() {
    return (
        <React.StrictMode>
            <HashRouter>
                <GlobalStyle />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/players" element={<Players />} />
                    <Route path="/game" element={<Game />} />
                </Routes>
            </HashRouter>
        </React.StrictMode>
    );
}

export default App;
