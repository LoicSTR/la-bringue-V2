import styled from 'styled-components';

export const HomeWrapper = styled.div`
    display: flex;
    justify-content: center;
    height: 100vh;
`;

export const HomeContainer = styled.div`
    margin: 30px;
    padding: 60px 90px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1200px;
`;

export const Button = styled.button`
    background-color: #f4442e;
    color: white;
    border-radius: 20px;
    margin-top: 100px;
    border: none;
    font-size: 20px;
    padding: 5px 20px;

    &:hover {
        background-color: #b52616;
    }
`;

export const Title = styled.h1`
    font-size: 50px;
    text-align: center;
    font-family: 'Luckiest Guy', cursive;
    letter-spacing: 1px;
    margin: 0px;
`;

export const SubTitle = styled.p`
    font-size: 20px;
    text-align: center;
    margin: 0px;
`;
