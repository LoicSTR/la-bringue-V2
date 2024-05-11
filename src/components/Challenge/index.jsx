import { useState, useEffect } from 'react';
import challenges from '../../datas/challenges.js'; // Assuming this is where your challenge data is stored
import {
    Button,
    ButtonContainer,
    Title,
    SubTitle,
    HomeContainer,
} from '../../utils/style/Styles';
// import { ChallengeContainer, ChallengeText, PlayerName } from './styles.jsx'; // Renamed components

function Challenge({ phase, setPhase }) {
    console.log(phase);

    const [selectedPlayer, setSelectedPlayer] = useState(null); // Renamed from joueurPartie
    const [selectedChallenge, setSelectedChallenge] = useState(null); // Renamed from challengePartie

    useEffect(() => {
        const storedPlayers = JSON.parse(localStorage.getItem('players'));

        if (storedPlayers && storedPlayers.length > 0) {
            const randomPlayerIndex = Math.floor(
                Math.random() * storedPlayers.length
            );
            const chosenPlayer = storedPlayers[randomPlayerIndex];

            // Filter out the selected player from the list
            const votingPlayers = storedPlayers.filter(
                (player) => player !== chosenPlayer
            );

            const randomChallengeIndex = Math.floor(
                Math.random() * challenges.length
            );

            setSelectedPlayer(chosenPlayer);
            setSelectedChallenge(challenges[randomChallengeIndex]);

            localStorage.setItem(
                'votingPlayers',
                JSON.stringify(votingPlayers)
            );
        }
    }, []);

    localStorage.setItem('selectedPlayer', JSON.stringify(selectedPlayer));

    const handleNextPhase = () => {
        const updatedPhase = phase + 1;
        setPhase(updatedPhase);
    };

    return (
        <HomeContainer>
            <Title>{selectedPlayer && selectedPlayer.username}</Title>
            <SubTitle>
                {selectedChallenge && selectedChallenge.challenge}
            </SubTitle>
            <ButtonContainer>
                <Button onClick={() => handleNextPhase()}>
                    Passer aux votes
                </Button>
            </ButtonContainer>
        </HomeContainer>
    );
}

export default Challenge;
