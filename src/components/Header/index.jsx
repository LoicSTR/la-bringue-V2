import {
    HeaderContainer,
    HomeIconContainer,
    HomeIcon,
    SettingsIconContainer,
} from './styles.jsx';
import HomeIconImg from '../../assets/home-icon.png';
import { useNavigate } from 'react-router-dom';

function Header({ showAlert }) {
    const navigate = useNavigate();
    const handleHomeClick = () => {
        if (showAlert) {
            const confirmMessage =
                'Êtes-vous sûr de vouloir quitter la partie en cours ?';
            if (window.confirm(confirmMessage)) {
                window.location.href = '/';
            } else {
            }
        } else {
            window.location.href = '/';
        }
    };

    const handleSettingsClick = () => {
        navigate('/settings');
    };

    return (
        <HeaderContainer>
            <p>La Bringue, par Loïc Souêtre</p>

            <SettingsIconContainer onClick={handleSettingsClick}>
                Settings
            </SettingsIconContainer>
            <HomeIconContainer onClick={handleHomeClick}>
                <HomeIcon src={HomeIconImg}></HomeIcon>
            </HomeIconContainer>
        </HeaderContainer>
    );
}

export default Header;
