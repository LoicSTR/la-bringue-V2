import { Link } from 'react-router-dom';
import {
    HomeWrapper,
    HomeContainer,
    Title,
    SubTitle,
    Button,
} from '../../utils/style/Styles';

function Accueil() {
    return (
        <HomeWrapper>
            <HomeContainer>
                <Title>La Bringue</Title>
                <SubTitle>Défiez-vous, jugez-vous, éclatez-vous !</SubTitle>
                <Link to="/joueurs">
                    <Button>Jouer</Button>
                </Link>
            </HomeContainer>
        </HomeWrapper>
    );
}

export default Accueil;
