import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, HomeWrapper } from '../../utils/style/Styles';

function Vote() {
    const location = useLocation();
    const navigate = useNavigate();
    const joueurPartie = location.state?.joueurPartie;

    const [numJoueurVote, setNumJoueurVote] = useState(1);
    const [currentIndex, setCurrentIndex] = useState(0);
    const joueursStockes = JSON.parse(localStorage.getItem('joueurs'));

    const currentPlayer = joueursStockes[currentIndex];
    const totalJoueursVote = joueursStockes.length - 1;

    const handleVote = (vote) => {
        if (currentIndex === totalJoueursVote) {
            navigate('/resultats', { state: { vote } });
        } else {
            setCurrentIndex((prevIndex) => prevIndex + 1);
            setNumJoueurVote((prevIndex) => prevIndex + 1);
        }
    };

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
        setCurrentIndex((prevIndex) => prevIndex + 1);
        return <Vote />;
    }
}

export default Vote;
