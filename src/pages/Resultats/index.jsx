import { useLocation } from 'react-router-dom';

function Resultats() {
    const location = useLocation();
    const vote = location.state?.vote;
    console.log(vote);

    return <div>{vote}</div>;
}

export default Resultats;
