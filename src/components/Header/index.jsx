import { HeaderContainer, HomeIconContainer, HomeIcon } from './styles.jsx';
import HomeIconImg from '../../assets/home-icon.png';

function Header({ showAlert }) {
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
    return (
        <HeaderContainer>
            <p>La Bringue, par Loïc Souêtre</p>
            <HomeIconContainer onClick={handleHomeClick}>
                <HomeIcon src={HomeIconImg}></HomeIcon>
            </HomeIconContainer>
        </HeaderContainer>
    );
}

export default Header;
