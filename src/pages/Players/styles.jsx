import styled from 'styled-components';

export const CardContainer = styled.div`
    display: flex;
    flex: row wrap;
    margin-top: 50px;
`;
export const CardPlayer = styled.div`
    font-size: 20px;
    color: white;
    display: flex;
    flex-direction: row;
    align-items: end;
    justify-content: space-around;
    background-color: #b52616;
    padding: 5px 5px 5px 20px;
    margin: 10px;
    border-radius: 20px;
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
    background-color: #b52616;

    &:hover {
        background-color: #f4442e;
    }
`;

export const PlayerInput = styled.input`
    font-size: 20px;
    border-radius: 20px;
    padding: 5px 20px;
    margin-right: 20px;
    border: none;
`;
