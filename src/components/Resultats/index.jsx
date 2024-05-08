import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, HomeWrapper, SubTitle, Title } from '../../utils/style/Styles';
import { Jauge, PourcentageFill, Pourcentage, Consequence } from './styles.jsx';

function Resultats({ setPhase, increaseManche, nbTours, manche, setManche }) {
    const votesStockes = JSON.parse(localStorage.getItem('votes'));
    const joueurPartie = JSON.parse(localStorage.getItem('joueurPartie'));
    const username = joueurPartie ? joueurPartie.username : 'Joueur inconnu';

    const ouiVotes = votesStockes.filter((vote) => vote === 'oui').length;

    const totalVotes = votesStockes.length;
    const pourcentageOui = (ouiVotes / totalVotes) * 100;

    const [animationStarted, setAnimationStarted] = useState(false);

    useEffect(() => {
        // Démarre l'animation lorsque la page est chargée
        setAnimationStarted(true);
    }, []);

    const handleClick = () => {
        localStorage.removeItem('joueurPartie');
        setPhase(1);
        increaseManche();
    };

    const handleClick2 = () => {
        setManche(1);
        setPhase(1);
    };

    return (
        <HomeWrapper>
            <Title>{username}</Title>
            <SubTitle>
                votre prestation a satisfait {pourcentageOui.toFixed(0)}% des
                bringueurs !
            </SubTitle>
            <Consequence $pourcentageOui={pourcentageOui}>
                {pourcentageOui >= 80
                    ? 'Félicitations ! Distribuez 2 gorgées aux bringueurs de votre choix !'
                    : pourcentageOui >= 60
                      ? 'Bien joué. Donnez 1 gorgée à un autre bringueur'
                      : pourcentageOui >= 40
                        ? 'Presque... Buvez 1 gorgée'
                        : pourcentageOui >= 20
                          ? 'Dommage... Buvez 2 gorgées'
                          : 'Aïe... Buvez 3 gorgées'}
            </Consequence>
            <Jauge>
                <PourcentageFill
                    $pourcentageOui={animationStarted ? pourcentageOui : 0}
                >
                    <Pourcentage>{pourcentageOui.toFixed(0)}%</Pourcentage>
                </PourcentageFill>
            </Jauge>
            {manche < nbTours ? (
                <Button onClick={() => handleClick()}>Manche suivante</Button>
            ) : (
                <div>
                    <Link to="/partie">
                        <Button onClick={() => handleClick2()}>Rejouer</Button>
                    </Link>
                    <Link to="/joueurs">
                        <Button>Modifier les joueurs</Button>
                    </Link>
                </div>
            )}
        </HomeWrapper>
    );
}

export default Resultats;
