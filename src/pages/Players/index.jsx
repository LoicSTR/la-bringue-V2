import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    HomeWrapper,
    HomeContainer,
    Title,
    Button,
} from '../../utils/style/Styles';
import {
    CardContainer,
    CardPlayer,
    DeletePlayerButton,
    PlayerInput,
} from './styles.jsx';

function Players() {
    const navigate = useNavigate();

    const initialPlayers = [];

    const [newPlayer, setNewPlayer] = useState('');
    const [players, setPlayers] = useState(initialPlayers);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if (newPlayer.trim() === '') {
            setErrorMessage(
                "Le champ est vide. Impossible d'ajouter le joueur."
            );
            return;
        }

        const isUsernameTaken = players.some(
            (player) => player.username === newPlayer
        );
        if (isUsernameTaken) {
            setErrorMessage(
                'Ce pseudo est déjà utilisé. Veuillez en choisir un autre.'
            );
            return;
        }

        const lastPlayerId =
            players.length > 0 ? players[players.length - 1].id : 0;

        const newPlayerObject = {
            id: lastPlayerId + 1,
            username: newPlayer,
        };

        const updatedPlayers = [...players, newPlayerObject];

        setPlayers(updatedPlayers);

        setNewPlayer('');
        setErrorMessage('');

        localStorage.setItem('players', JSON.stringify(updatedPlayers));
    };

    useEffect(() => {
        const storedPlayers = localStorage.getItem('players');
        if (storedPlayers) {
            setPlayers(JSON.parse(storedPlayers));
        }
        console.log('Joueurs enregistré :', storedPlayers);
    }, []);
    console.log('Joueurs :', players);

    const handleDeletePlayer = (playerId) => {
        const updatedPlayers = players.filter(
            (player) => player.id !== playerId
        );
        setPlayers(updatedPlayers);
        localStorage.setItem('players', JSON.stringify(updatedPlayers));
    };

    const handleStartGame = () => {
        if (players.length < 3) {
            setErrorMessage('Il doit y avoir au moins 3 joueurs pour jouer.');
            return;
        }
        localStorage.removeItem('phase');
        navigate('/game');
    };

    return (
        <HomeWrapper>
            <HomeContainer>
                <Title>Qui sont nos bringueurs du jour ?</Title>
                <CardContainer>
                    {players.map((player) => (
                        <CardPlayer key={player.id}>
                            <div>{player.username}</div>
                            <DeletePlayerButton
                                onClick={() => handleDeletePlayer(player.id)}
                            >
                                X
                            </DeletePlayerButton>
                        </CardPlayer>
                    ))}
                </CardContainer>
                <div>
                    {errorMessage && (
                        <div style={{ color: 'red' }}>{errorMessage}</div>
                    )}
                </div>
                <form onSubmit={handleSubmit}>
                    <PlayerInput
                        type="text"
                        placeholder="Nouveau joueur"
                        value={newPlayer}
                        onChange={(e) => setNewPlayer(e.target.value)}
                    />
                    <Button type="submit">Ajouter</Button>
                </form>
                <Button onClick={() => handleStartGame(players.length)}>
                    Jouer
                </Button>
            </HomeContainer>
        </HomeWrapper>
    );
}

export default Players;
