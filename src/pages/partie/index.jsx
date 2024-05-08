import { useState, useEffect } from 'react';
import Challenge from '../../components/Challenge';
import Vote from '../../components/Vote';
import Resultats from '../../components/Resultats';

function Partie() {
    const nbTours = 10;
    const manche = 1;

    const savedPhase = localStorage.getItem('phase');
    const [phase, setPhase] = useState(savedPhase ? JSON.parse(savedPhase) : 1);
    useEffect(() => {
        localStorage.setItem('phase', JSON.stringify(phase));
    }, [phase]);
    console.log(phase.phase);

    let phaseComponent;
    if (phase === 1) {
        phaseComponent = <Challenge phase={phase} setPhase={setPhase} />;
    } else if (phase === 2) {
        phaseComponent = <Vote phase={phase} setPhase={setPhase} />;
    } else {
        phaseComponent = <Resultats phase={phase} setPhase={setPhase} />;
    }

    return (
        <div>
            {phaseComponent}
            <div>
                Manche {manche}/{nbTours}
            </div>
        </div>
    );
}

export default Partie;
