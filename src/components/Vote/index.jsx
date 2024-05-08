import { useState } from 'react';
import { Button, HomeWrapper } from '../../utils/style/Styles';

function Vote({ phase, setPhase }) {
    const joueurPartie = JSON.parse(localStorage.getItem('joueurPartie'));
    const joueursVote = JSON.parse(localStorage.getItem('joueursVote'));

    const [numJoueurVote, setNumJoueurVote] = useState(1);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [votes, setVotes] = useState([]);

    const totalJoueursVote = joueursVote.length;
    const currentPlayer = joueursVote[currentIndex];

    const handleVote = (vote) => {
        let nextIndex = currentIndex + 1;
        const updatedVotes = [...votes, vote];
        setVotes(updatedVotes);

        if (currentIndex === totalJoueursVote - 1) {
            localStorage.setItem('votes', JSON.stringify(updatedVotes));
            const updatedPhase = phase + 1;
            setPhase(updatedPhase);
        } else {
            setCurrentIndex(nextIndex);
            setNumJoueurVote(numJoueurVote + 1);
        }
    };

    return (
        <HomeWrapper>
            <h1>{currentPlayer.username}</h1>
            <div>
                La réalisation de {joueurPartie.username} t'a-t-elle convaincu ?
            </div>
            <Button onClick={() => handleVote('oui')}>Oui</Button>
            <Button onClick={() => handleVote('non')}>Non</Button>
            <div>
                {numJoueurVote}/{totalJoueursVote}
            </div>
        </HomeWrapper>
    );
}

export default Vote;
