import { useLocation } from 'react-router-dom';

function Vote() {
    const location = useLocation();
    const joueurPartie = location.state?.joueurPartie;
    return <div>{joueurPartie.username}</div>;
}

export default Vote;
