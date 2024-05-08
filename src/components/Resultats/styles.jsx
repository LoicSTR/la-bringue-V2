import styled from 'styled-components';

export const Jauge = styled.div`
    margin-top: 40px;
    width: 80px;
    height: 300px;
    padding: 5px;
    background-color: #f4442e;
    position: relative;
    border-radius: 20px;
`;

export const PourcentageFill = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    height: 0%;
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: #b52616;
    border-radius: 20px;
    transition: height 0.5s ease;
    height: ${(props) => props.$pourcentageOui}%;
`;

export const Pourcentage = styled.p`
    color: white;
    font-family: 'Luckiest Guy', cursive;
    font-size: 20px;
    position: absolute;
    top: 0;
    text-align: center;
`;

export const Consequence = styled.p`
    font-size: 20px;
    text-align: center;
    margin-top: 20px;
    ${(props) =>
        props.$pourcentageOui >= 50 &&
        `
        color: green;
    `}
    ${(props) =>
        props.$pourcentageOui < 50 &&
        `
        color: red;
    `}
`;
