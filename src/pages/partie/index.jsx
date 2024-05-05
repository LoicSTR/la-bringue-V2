import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import challenges from '../../datas/challenges.js';
import { HomeWrapper, Button } from '../../utils/style/Styles';

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
    const navigate = useNavigate(); // Initialisation useNavigate

    const nbTours = 10;
    const numTour = 1;

    const [joueurPartie, setJoueurPartie] = useState(null);
    const [challengePartie, setChallengePartie] = useState(null);

    useEffect(() => {
        const joueursStockes = JSON.parse(localStorage.getItem('joueurs'));

        if (joueursStockes && joueursStockes.length > 0) {
            const randomPlayerIndex = Math.floor(
                Math.random() * joueursStockes.length
            );
            setJoueurPartie(joueursStockes[randomPlayerIndex]);

            const randomChallengeIndex = Math.floor(
                Math.random() * challenges.length
            );
            setChallengePartie(challenges[randomChallengeIndex]);
        }
    }, []);

    const handleClick = () => {
        navigate('/vote', { state: { joueurPartie } });
    };

    return (
        <HomeWrapper>
            <ChallengeContainer>
                <NomJoueur>{joueurPartie && joueurPartie.username}</NomJoueur>
                <Challenge>
                    {challengePartie && challengePartie.challenge}
                </Challenge>
                <Button onClick={() => handleClick(joueurPartie)}>
                    Passer aux votes
                </Button>
            </ChallengeContainer>
            <Tours>
                {numTour}/{nbTours}
            </Tours>
        </HomeWrapper>
    );
}

export default Partie;
