import { useState, useEffect } from 'react';
import challenges from '../../datas/challenges.js';
import { HomeWrapper, HomeContainer, Button } from '../../utils/style/Styles';
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

const ChallengeContainer = styled.div`
    height: 60vh;
    margin: 30px;
    padding: 60px 90px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1200px;
`;

const Tours = styled.p``;

function Partie() {
    const nbTours = 10;
    const numTour = 1;

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
            <ChallengeContainer>
                <NomJoueur>{joueurPartie && joueurPartie.username}</NomJoueur>
                <Challenge>
                    {challengePartie && challengePartie.challenge}
                </Challenge>
                <Button>Passer aux votes</Button>
            </ChallengeContainer>
            <Tours>
                {numTour}/{nbTours}
            </Tours>
        </HomeWrapper>
    );
}

export default Partie;
