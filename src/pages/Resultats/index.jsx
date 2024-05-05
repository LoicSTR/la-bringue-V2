import { useLocation } from 'react-router-dom';
import { HomeWrapper, Title } from '../../utils/style/Styles';
import styled from 'styled-components';

const Jauge = styled.div`
    width: 100px;
    height: 300px;
    background-color: #f4442e;
    position: relative;
    border-radius: 20px;
`;

const Pourcentage = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #b52616;
    border-radius: 0px 0px 20px 20px;
    transition: height 0.5s ease;
`;

function Resultats() {
    const location = useLocation();
    const votes = location.state?.votes;

    const ouiVotes = votes.filter((vote) => vote === 'oui').length;

    const totalVotes = votes.length;
    const pourcentageOui = (ouiVotes / totalVotes) * 100;

    return (
        <HomeWrapper>
            <Title>{pourcentageOui.toFixed(2)}%</Title>
            <Jauge>
                <Pourcentage
                    style={{ height: `${pourcentageOui}%` }}
                ></Pourcentage>
            </Jauge>
        </HomeWrapper>
    );
}

export default Resultats;
