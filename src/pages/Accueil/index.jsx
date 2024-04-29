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
                <a href="/joueurs">
                    <Button>Jouer</Button>
                </a>
            </HomeContainer>
        </HomeWrapper>
    );
}

export default Accueil;
