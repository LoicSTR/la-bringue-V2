import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, HomeWrapper, SubTitle, Title } from '../../utils/style/Styles';
import styled from 'styled-components';

const Jauge = styled.div`
    margin-top: 40px;
    width: 80px;
    height: 300px;
    padding: 5px;
    background-color: #f4442e;
    position: relative;
    border-radius: 20px;
`;

const PourcentageFill = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    height: 0%;
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: #b52616;
    border-radius: 20px;
    transition: height 0.5s ease;
    height: ${(props) => props.$pourcentageOui}%;
`;

const Pourcentage = styled.p`
    color: white;
    font-family: 'Luckiest Guy', cursive;
    font-size: 20px;
    position: absolute;
    top: 0;
    text-align: center;
`;

const Consequence = styled.p`
    font-size: 20px;
    text-align: center;
    margin-top: 20px;
    ${(props) =>
        props.$pourcentageOui >= 50 &&
        `
        color: green;
    `}
    ${(props) =>
        props.$pourcentageOui < 50 &&
        `
        color: red;
    `}
`;

function Resultats() {
    const navigate = useNavigate();

    const votesStockes = JSON.parse(localStorage.getItem('votes'));
    const joueurPartie = JSON.parse(localStorage.getItem('joueurPartie'));

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
        navigate('/partie');
    };

    return (
        <HomeWrapper>
            <Title>{joueurPartie.username}</Title>
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
