import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Challenge from '../../components/Challenge';
import Vote from '../../components/Vote';
import Resultats from '../../components/Resultats';
import { Button, HomeWrapper, Title } from '../../utils/style/Styles';

function Partie() {
    const nbTours = 3;
    const [manche, setManche] = useState(1);

    const savedPhase = localStorage.getItem('phase');
    const [phase, setPhase] = useState(savedPhase ? JSON.parse(savedPhase) : 1);
    useEffect(() => {
        localStorage.setItem('phase', JSON.stringify(phase));
    }, [phase]);

    let phaseComponent;
    if (phase === 1) {
        phaseComponent = <Challenge phase={phase} setPhase={setPhase} />;
    } else if (phase === 2) {
        phaseComponent = <Vote phase={phase} setPhase={setPhase} />;
    } else {
        phaseComponent = (
            <Resultats
                setPhase={setPhase}
                increaseManche={() => setManche((prevManche) => prevManche + 1)}
                nbTours={nbTours}
                manche={manche}
                setManche={setManche}
            />
        );
    }
    console.log(manche);
    console.log(nbTours);

    if (manche === nbTours + 1) {
        setManche(1);
        return (
            <HomeWrapper>
                <Title>Fin de la partie</Title>
                <Link to="/partie">
                    <Button>Rejouer</Button>
                </Link>
                <Link to="/joueurs">
                    <Button>Modifier les joueurs</Button>
                </Link>
            </HomeWrapper>
        );
    } else {
        return (
            <div>
                {phaseComponent}
                <div>
                    Manche {manche}/{nbTours}
                </div>
            </div>
        );
    }
}

export default Partie;
