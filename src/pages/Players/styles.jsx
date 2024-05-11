import styled from 'styled-components';
import colors from '../../utils/style/colors';

export const CardContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    gap: 10px;
    justify-content: center;
`;
export const CardPlayer = styled.div`
    font-size: 20px;
    color: white;
    display: flex;
    flex-direction: row;
    align-items: end;
    justify-content: space-around;
    background-color: ${colors.secondary};
    padding: 5px 5px 5px 20px;

    border-radius: 20px;

    @media screen and (max-width: 425px) {
        font-size: 16px;
    }
`;

export const DeletePlayerButton = styled.button`
    font-size: 20px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 20px;
    margin-left: 15px;
    border: none;
    background-color: ${colors.secondary};

    &:hover {
        background-color: ${colors.primary};
        cursor: pointer;
    }

    @media screen and (max-width: 425px) {
        font-size: 16px;
        witdh: 24px;
        height: 24px;
    }
`;

export const PlayerInput = styled.input`
    font-size: 20px;
    border-radius: 20px;
    padding: 5px 20px;
    margin-right: 20px;
    border: none;

    @media screen and (max-width: 425px) {
        font-size: 16px;
    }
`;

export const ErrorContainer = styled.div`
    height: 50px;
    display: flex;
    align-items: center;
`;

export const NewPlayerForm = styled.form`
    display: flex;
    justify-content: space-betwenn;
`;
