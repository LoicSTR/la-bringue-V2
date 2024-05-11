import styled from 'styled-components';
import colors from './colors';

export const HomeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const HomeContainer = styled.div`
    margin: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space around;
    align-items: center;
`;

export const Button = styled.button`
    background-color: ${colors.primary};
    color: white;
    border-radius: 20px;
    border: none;
    font-size: 20px;
    padding: 5px 20px;

    &:hover {
        background-color: ${colors.primaryhover};
        cursor: pointer;
    }

    @media screen and (max-width: 425px) {
        font-size: 16px;
    }
`;

export const Title = styled.h1`
    font-size: 40px;
    text-align: center;
    font-family: 'Luckiest Guy', cursive;
    letter-spacing: 1px;
    margin: 20px 0px;

    @media screen and (max-width: 425px) {
        font-size: 30px;
        margin: 10px 0px;
    }
`;

export const SubTitle = styled.p`
    font-size: 30px;
    text-align: center;
    margin: 0px;

    @media screen and (max-width: 425px) {
        font-size: 24px;
    }
`;

export const ButtonContainer = styled.div`
    margin-top: 30px;
    display: flex;
    justify-content: space-betwenn;
    gap: 20px;

    @media screen and (max-width: 425px) {
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }
`;
