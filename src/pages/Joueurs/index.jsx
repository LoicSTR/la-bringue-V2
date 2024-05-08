import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    HomeWrapper,
    HomeContainer,
    Title,
    Button,
} from '../../utils/style/Styles';
import {
    CardContainer,
    CardJoueur,
    SupprJoueur,
    ChampPseudo,
} from './styles.jsx';

function Joueurs() {
    const navigate = useNavigate(); // Initialisation useHistory

    const players = [];

    // Création du state nouveauJoueur vide
    const [nouveauJoueur, setNouveauJoueur] = useState('');

    // Création du state joueurs reprenant la liste des joueurs
    const [joueurs, setJoueurs] = useState(players);

    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        // Vérifie si le champ de saisie n'est pas vide
        if (nouveauJoueur.trim() === '') {
            setErrorMessage(
                "Le champ est vide. Impossible d'ajouter le joueur."
            );
            return; // Ne continuez pas avec l'ajout du joueur
        }

        // Vérifie si le pseudo est déjà utilisé
        const isUsernameTaken = joueurs.some(
            (player) => player.username === nouveauJoueur
        );
        if (isUsernameTaken) {
            setErrorMessage(
                'Ce pseudo est déjà utilisé. Veuillez en choisir un autre.'
            );
            return; // Ne continue pas avec l'ajout du joueur
        }

        // Crée un nouvel objet pour le nouveau joueur
        const newPlayer = {
            id: joueurs.length + 1,
            username: nouveauJoueur,
        };

        // Ajoute le nouveau joueur à la liste existante
        const updatedPlayers = [...joueurs, newPlayer];

        // Mettre à jour l'état de la liste des joueurs
        setJoueurs(updatedPlayers);

        // Réinitialise le champ de saisie et le message d'erreur
        setNouveauJoueur('');
        setErrorMessage('');

        // Sauvegarde la liste des joueurs dans localStorage
        localStorage.setItem('joueurs', JSON.stringify(updatedPlayers));
    };

    const handleDeletePlayer = (playerId) => {
        const updatedPlayers = joueurs.filter(
            (player) => player.id !== playerId
        );
        setJoueurs(updatedPlayers);
    };

    useEffect(() => {
        const storedPlayers = localStorage.getItem('joueurs');
        if (storedPlayers) {
            setJoueurs(JSON.parse(storedPlayers));
        }
    }, []); // Exécute ce code une seule fois au chargement de la page

    const handlePlay = () => {
        if (joueurs.length < 3) {
            setErrorMessage('Il doit y avoir au moins 3 joueurs pour jouer.');
            return; // Empêche le jeu de démarrer
        }
        navigate('/partie');
    };

    return (
        <HomeWrapper>
            <HomeContainer>
                <Title>Qui sont nos bringueurs du jour ?</Title>
                <CardContainer>
                    {joueurs.map((player) => (
                        <CardJoueur key={player.id}>
                            <div>{player.username}</div>
                            <SupprJoueur
                                onClick={() => handleDeletePlayer(player.id)}
                            >
                                X
                            </SupprJoueur>
                        </CardJoueur>
                    ))}
                </CardContainer>
                <div>
                    {errorMessage && (
                        <div style={{ color: 'red' }}>{errorMessage}</div>
                    )}
                </div>
                <form onSubmit={handleSubmit}>
                    <ChampPseudo
                        type="text"
                        placeholder="Nouveau joueur"
                        value={nouveauJoueur}
                        onChange={(e) => setNouveauJoueur(e.target.value)}
                    />
                    <Button type="submit">Ajouter</Button>
                </form>
                {/* <a href="/partie"> */}
                <Button onClick={() => handlePlay(joueurs.length)}>
                    Jouer
                </Button>
                {/* </a> */}
            </HomeContainer>
        </HomeWrapper>
    );
}

export default Joueurs;
