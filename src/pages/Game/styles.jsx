import styled from 'styled-components';
import colors from '../../utils/style/colors.js';

export const RoundContainer = styled.div`
    font-size: 20px;
    position: absolute;
    top: 0;
    margin-top: 100px;
    background-color: ${colors.secondary};
    padding: 5px 20px;
    border-radius: 10px;
    color: white;

    @media screen and (max-width: 425px) {
        font-size: 16px;
    }
`;
