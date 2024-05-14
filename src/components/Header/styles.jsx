import styled from 'styled-components';
import colors from '../../utils/style/colors.js';

export const HomeIcon = styled.img`
    width: 50%;
    height: 50%;
    object-fit: cover;
`;

export const HomeIconContainer = styled.button`
    background-color: ${colors.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    border: none;
    padding: 0px;
    cursor: pointer;
    margin-right: 50px;

    &:hover {
        background-color: ${colors.primaryhover};
        cursor: pointer;
    }
`;

export const SettingsIconContainer = styled.button`
    background-color: ${colors.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    border: none;
    padding: 0px;
    cursor: pointer;
    margin-right: 50px;

    &:hover {
        background-color: ${colors.primaryhover};
        cursor: pointer;
    }
`;

export const HeaderContainer = styled.div`
    width: 100%;
    max-width: 1200px;
    height: 70px;
    position: absolute;
    top: 0;
    display: flex;
    justify-content: space-around;
    margin: 20px 100px;
`;
