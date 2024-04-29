import { useState, useEffect } from 'react';
import challenges from '../../datas/challenges.js';

function Partie() {
    const joueursStockes = JSON.parse(localStorage.getItem('joueurs'));

    const [joueurPartie, setJoueurPartie] = useState(null);
    const [challengePartie, setChallengePartie] = useState(null);

    useEffect(() => {
        // Tirage au sort d'un joueur
        const indexJoueurAleatoire = Math.floor(
            Math.random() * joueursStockes.length
        );
        setJoueurPartie(joueursStockes[indexJoueurAleatoire]);

        // Tirage au sort d'un défi
        const indexDefiAleatoire = Math.floor(
            Math.random() * challenges.length
        );
        setChallengePartie(challenges[indexDefiAleatoire]);
    }, []);
    return (
        <div>
            {joueurPartie && joueurPartie.username}
            {challengePartie && challengePartie.challenge}
        </div>
    );
}

export default Partie;
