import { useEffect, useState } from 'react';
import { Button, HomeWrapper, SubTitle, Title } from '../../utils/style/Styles';
import { Jauge, PourcentageFill, Pourcentage, Consequence } from './styles.jsx';

function Resultats({ phase, setPhase, increaseManche }) {
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
            <Button onClick={() => handleClick()}>Manche suivante</Button>
        </HomeWrapper>
    );
}

export default Resultats;
