import styled from 'styled-components';

export const VoteContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 20px;
    margin-top: 30px;
`;

export const VoteIndexContainer = styled.div`
    margin-top: 20px;
    font-size: 20px;
    font-style: italic;

    @media screen and (max-width: 425px) {
        font-size: 16px;
    }
`;
