import { useState, useEffect } from 'react';
import challenges from '../../datas/challenges.js';
import { HomeWrapper, Button } from '../../utils/style/Styles';
import { ChallengeContainer, ChallengeText, NomJoueur } from './styles.jsx';

function Challenge({ phase, setPhase }) {
    console.log(phase);

    const [joueurPartie, setJoueurPartie] = useState(null);
    const [challengePartie, setChallengePartie] = useState(null);

    useEffect(() => {
        const joueursStockes = JSON.parse(localStorage.getItem('joueurs'));

        if (joueursStockes && joueursStockes.length > 0) {
            const randomPlayerIndex = Math.floor(
                Math.random() * joueursStockes.length
            );
            const joueurSelectionne = joueursStockes[randomPlayerIndex];

            // Filtrer les joueurs pour exclure le joueur sélectionné
            const nouveauxJoueurs = joueursStockes.filter(
                (joueur) => joueur !== joueurSelectionne
            );

            const randomChallengeIndex = Math.floor(
                Math.random() * challenges.length
            );

            setJoueurPartie(joueurSelectionne);
            setChallengePartie(challenges[randomChallengeIndex]);

            localStorage.setItem(
                'joueursVote',
                JSON.stringify(nouveauxJoueurs)
            );
        }
    }, []);

    localStorage.setItem('joueurPartie', JSON.stringify(joueurPartie));

    const handleClick = () => {
        const updatedPhase = phase + 1;
        setPhase(updatedPhase);
    };

    return (
        <HomeWrapper>
            <ChallengeContainer>
                <NomJoueur>{joueurPartie && joueurPartie.username}</NomJoueur>
                <ChallengeText>
                    {challengePartie && challengePartie.challenge}
                </ChallengeText>
                <Button onClick={() => handleClick()}>Passer aux votes</Button>
            </ChallengeContainer>
        </HomeWrapper>
    );
}

export default Challenge;
