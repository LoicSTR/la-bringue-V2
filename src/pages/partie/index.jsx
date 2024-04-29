import { useState, useEffect } from 'react';
import challenges from '../../datas/challenges.js';
import { HomeWrapper, HomeContainer } from '../../utils/style/Styles';
import styled from 'styled-components';

const NomJoueur = styled.p`
    font-family: 'Luckiest Guy';
    font-size: 50px;
    margin: 10px;
`;

const Challenge = styled.p`
    font-size: 30px;
    margin: 0px;
`;

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
        <HomeWrapper>
            <HomeContainer>
                <NomJoueur>{joueurPartie && joueurPartie.username}</NomJoueur>
                <Challenge>
                    {challengePartie && challengePartie.challenge}
                </Challenge>
            </HomeContainer>
        </HomeWrapper>
    );
}

export default Partie;
