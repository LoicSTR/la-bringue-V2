import { useState } from 'react';
import { Button, HomeWrapper } from '../../utils/style/Styles';

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
        <HomeWrapper>
            <h1>{currentPlayerToVote.username}</h1>
            <div>
                La réalisation de {selectedPlayer.username} t'a-t-elle convaincu
                ?
            </div>
            <Button onClick={() => handleVote('yes')}>Oui</Button>
            <Button onClick={() => handleVote('no')}>Non</Button>
            <div>
                {currentVoteIndex + 1}/{totalPlayersToVote}
            </div>
        </HomeWrapper>
    );
}

export default Vote;
