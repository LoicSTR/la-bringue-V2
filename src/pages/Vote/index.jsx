import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, HomeWrapper } from '../../utils/style/Styles';

function Vote() {
    const navigate = useNavigate();
    const joueurPartie = JSON.parse(localStorage.getItem('joueurPartie'));

    const [numJoueurVote, setNumJoueurVote] = useState(1);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [votes, setVotes] = useState([]);

    const joueursStockes = JSON.parse(localStorage.getItem('joueurs'));

    const currentPlayer = joueursStockes[currentIndex];
    const totalJoueursVote = joueursStockes.length - 1;
    let nextIndex = currentIndex + 1;
    const handleVote = (vote) => {
        const updatedVotes = [...votes, vote];
        setVotes(updatedVotes);

        if (currentIndex === totalJoueursVote) {
            localStorage.setItem('votes', JSON.stringify(updatedVotes));
            navigate('/resultats');
        } else {
            while (joueursStockes[nextIndex].id === joueurPartie.id) {
                nextIndex++;
            }
            setCurrentIndex(nextIndex);
            setNumJoueurVote(numJoueurVote + 1);
        }
    };
    console.log('Joueur actif :', currentPlayer.id);
    console.log('Id actif :', currentIndex);

    if (currentPlayer && currentPlayer.id !== joueurPartie.id) {
        return (
            <HomeWrapper>
                <h1>{currentPlayer.username}</h1>
                <div>
                    La réalisation de {joueurPartie.username} t'a-t-elle
                    convaincu ?
                </div>
                <Button onClick={() => handleVote('oui')}>Oui</Button>
                <Button onClick={() => handleVote('non')}>Non</Button>
                <div>
                    {numJoueurVote}/{totalJoueursVote}
                </div>
            </HomeWrapper>
        );
    } else {
        nextIndex++;
        setCurrentIndex(nextIndex);
        navigate('/vote');
    }
}

export default Vote;
