import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, HomeWrapper, SubTitle, Title } from '../../utils/style/Styles';
import { Gauge, PercentageFill, Percentage, Outcome } from './styles.jsx'; // Renamed components

function Results({
    setPhase,
    increaseRound,
    totalRounds,
    currentRound,
    setCurrentRound,
}) {
    const navigate = useNavigate();
    const storedVotes = JSON.parse(localStorage.getItem('votes'));
    const selectedPlayer = JSON.parse(localStorage.getItem('selectedPlayer'));
    const username = selectedPlayer
        ? selectedPlayer.username
        : 'Joueur inconnu';

    const yesVotes = storedVotes.filter((vote) => vote === 'yes').length;

    const totalVotes = storedVotes.length;
    const percentageYes = (yesVotes / totalVotes) * 100;

    const [animationStarted, setAnimationStarted] = useState(false);

    useEffect(() => {
        // Démarre l'animation lorsque la page est chargée
        setAnimationStarted(true);
    }, []);

    const handleNextRound = () => {
        localStorage.removeItem('selectedPlayer');
        setPhase(1);
        increaseRound();
    };

    const handleRestartGame = () => {
        setCurrentRound(1);
        setPhase(1);
        navigate('/game');
    };

    const handleChangePlayers = () => {
        setCurrentRound(1);
        setPhase(1);
        navigate('/players');
    };

    return (
        <HomeWrapper>
            <Title>{username}</Title>
            <SubTitle>
                votre prestation a satisfait {percentageYes.toFixed(0)}% des
                bringueurs !
            </SubTitle>
            <Outcome $percentageYes={percentageYes}>
                {percentageYes >= 80
                    ? 'Félicitations ! Distribuez 2 gorgées aux bringueurs de votre choix !'
                    : percentageYes >= 60
                      ? 'Bien joué. Donnez 1 gorgée à un autre bringueur.'
                      : percentageYes >= 40
                        ? 'Presque... Buvez 1 gorgée'
                        : percentageYes >= 20
                          ? 'Dommage... Buvez 2 gorgées.'
                          : 'Aïe... Buvez 3 gorgées.'}
            </Outcome>
            <Gauge>
                <PercentageFill
                    $percentageYes={animationStarted ? percentageYes : 0}
                >
                    <Percentage>{percentageYes.toFixed(0)}%</Percentage>
                </PercentageFill>
            </Gauge>
            {currentRound < totalRounds ? (
                <Button onClick={() => handleNextRound()}>
                    Prochaine manche
                </Button>
            ) : (
                <div>
                    <Button onClick={() => handleRestartGame()}>Rejouer</Button>
                    <Button onClick={() => handleChangePlayers()}>
                        Changer les joueurs
                    </Button>
                </div>
            )}
        </HomeWrapper>
    );
}

export default Results;
