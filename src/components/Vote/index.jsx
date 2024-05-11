import { useState } from 'react';
import {
    Title,
    SubTitle,
    Button,
    HomeContainer,
} from '../../utils/style/Styles';
import { VoteContainer, VoteIndexContainer } from './styles';

function Vote({ phase, setPhase }) {
    const selectedPlayer = JSON.parse(localStorage.getItem('selectedPlayer'));
    const votingPlayers = JSON.parse(localStorage.getItem('votingPlayers'));

    const [currentVoteIndex, setCurrentVoteIndex] = useState(0);
    const [votes, setVotes] = useState([]);

    const totalPlayersToVote = votingPlayers.length;
    const currentPlayerToVote = votingPlayers[currentVoteIndex];

    const handleVote = (vote) => {
        const nextIndex = currentVoteIndex + 1;
        const updatedVotes = [...votes, vote];
        setVotes(updatedVotes);

        if (currentVoteIndex === totalPlayersToVote - 1) {
            localStorage.setItem('votes', JSON.stringify(updatedVotes));
            const updatedPhase = phase + 1;
            setPhase(updatedPhase);
        } else {
            setCurrentVoteIndex(nextIndex);
        }
    };

    return (
        <HomeContainer>
            <Title>{currentPlayerToVote.username}</Title>
            <SubTitle>
                La réalisation de {selectedPlayer.username} t'a-t-elle convaincu
                ?
            </SubTitle>
            <VoteContainer>
                <Button onClick={() => handleVote('yes')}>Oui</Button>
                <Button onClick={() => handleVote('no')}>Non</Button>
            </VoteContainer>

            <VoteIndexContainer>
                - Vote {currentVoteIndex + 1} sur {totalPlayersToVote} -
            </VoteIndexContainer>
        </HomeContainer>
    );
}

export default Vote;
