import React from 'react';
import { Link } from 'react-router-dom';
import {
    HomeWrapper,
    HomeContainer,
    Title,
    SubTitle,
    Button,
    ButtonContainer,
} from '../../utils/style/Styles';

function Home() {
    return (
        <HomeWrapper>
            <HomeContainer>
                <Title>La Bringue</Title>
                <SubTitle>Défiez-vous, jugez-vous, éclatez-vous !</SubTitle>
                <ButtonContainer>
                    <Link to="/players">
                        <Button>Jouer</Button>
                    </Link>
                </ButtonContainer>
            </HomeContainer>
        </HomeWrapper>
    );
}

export default Home;
