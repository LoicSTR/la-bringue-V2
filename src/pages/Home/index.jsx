import React from 'react';
import { Link } from 'react-router-dom';
import {
    HomeWrapper,
    HomeContainer,
    Title,
    SubTitle,
    Button,
} from '../../utils/style/Styles';

function Home() {
    return (
        <HomeWrapper>
            <HomeContainer>
                <Title>La Bringue</Title>
                <SubTitle>Défiez-vous, jugez-vous, éclatez-vous !</SubTitle>
                <Link to="/players">
                    <Button>Jouer</Button>
                </Link>
            </HomeContainer>
        </HomeWrapper>
    );
}

export default Home;
