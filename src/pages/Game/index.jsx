import { useState, useEffect } from 'react';
import Challenge from '../../components/Challenge';
import Vote from '../../components/Vote';
import Results from '../../components/Results';

function Game() {
    const totalRounds = 3;
    const [currentRound, setCurrentRound] = useState(1);

    const savedPhase = localStorage.getItem('phase');
    const [currentPhase, setCurrentPhase] = useState(
        savedPhase ? JSON.parse(savedPhase) : 1
    );
    useEffect(() => {
        localStorage.setItem('phase', JSON.stringify(currentPhase));
    }, [currentPhase]);

    let phaseComponent;
    if (currentPhase === 1) {
        phaseComponent = (
            <Challenge phase={currentPhase} setPhase={setCurrentPhase} />
        );
    } else if (currentPhase === 2) {
        phaseComponent = (
            <Vote phase={currentPhase} setPhase={setCurrentPhase} />
        );
    } else {
        phaseComponent = (
            <Results
                setPhase={setCurrentPhase}
                increaseRound={() =>
                    setCurrentRound((prevRound) => prevRound + 1)
                }
                totalRounds={totalRounds}
                currentRound={currentRound}
                setCurrentRound={setCurrentRound}
            />
        );
    }
    return (
        <div>
            {phaseComponent}
            <div>
                Manche {currentRound}/{totalRounds}
            </div>
        </div>
    );
}

export default Game;
