import styled from 'styled-components';
import colors from '../../utils/style/colors';

export const Gauge = styled.div`
    margin-top: 40px;
    width: 70px;
    height: 200px;
    padding: 5px;
    background-color: ${colors.secondary};
    position: relative;
    border-radius: 20px;
    margin-bottom: 10px;

    @media screen and (max-width: 425px) {
        margin-top: 20px;
    }
`;

export const PercentageFill = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    height: 0%;
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: ${colors.primary};
    border-radius: 20px;
    transition: height 0.5s ease;
    height: ${(props) => props.$percentageYes}%;
`;

export const Percentage = styled.p`
    color: white;
    font-family: 'Luckiest Guy', cursive;
    font-size: 20px;
    position: absolute;
    top: 0;
    text-align: center;
    margin-top: 10px;
`;

export const Outcome = styled.p`
    font-size: 20px;
    text-align: center;
    margin-top: 20px;
    ${(props) =>
        props.$percentageYes >= 50 &&
        `
        color: green;
    `}
    ${(props) =>
        props.$percentageYes < 50 &&
        `
        color: red;
    `}

    @media screen and (max-width: 425px) {
        font-size: 16px;
        margin-top: 14px;
        margin-bottom: 0px;
    }
`;
