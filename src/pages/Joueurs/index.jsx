import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
    HomeWrapper,
    HomeContainer,
    Title,
    Button,
} from '../../utils/style/Styles';

const CardContainer = styled.div`
    display: flex;
    flex: row wrap;
    margin-top: 50px;
`;
const CardJoueur = styled.div`
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

const SupprJoueur = styled.button`
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

const ChampPseudo = styled.input`
    font-size: 20px;
    border-radius: 20px;
    padding: 5px 20px;
    margin-right: 20px;
    border: none;
`;

function Joueurs() {
    // Création de la liste des joueurs vide
    const players = [];

    // Création du state nouveauJoueur vide
    const [nouveauJoueur, setNouveauJoueur] = useState('');

    // Création du state joueurs reprenant la liste des joueurs
    const [joueurs, setJoueurs] = useState(players);

    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        // Vérifiez si le champ de saisie n'est pas vide
        if (nouveauJoueur.trim() === '') {
            setErrorMessage(
                "Le champ est vide. Impossible d'ajouter le joueur."
            );
            return; // Ne continuez pas avec l'ajout du joueur
        }

        // Vérifiez si le pseudo est déjà utilisé
        const isUsernameTaken = joueurs.some(
            (player) => player.username === nouveauJoueur
        );
        if (isUsernameTaken) {
            setErrorMessage(
                'Ce pseudo est déjà utilisé. Veuillez en choisir un autre.'
            );
            return; // Ne continuez pas avec l'ajout du joueur
        }

        // Créez un nouvel objet pour le nouveau joueur
        const newPlayer = {
            id: joueurs.length + 1,
            username: nouveauJoueur,
        };

        // Ajoutez le nouveau joueur à la liste existante
        const updatedPlayers = [...joueurs, newPlayer];

        // Mettez à jour l'état de la liste des joueurs
        setJoueurs(updatedPlayers);

        // Réinitialisez le champ de saisie et le message d'erreur
        setNouveauJoueur('');
        setErrorMessage('');

        // Sauvegardez la liste des joueurs dans localStorage
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
    }, []); // Exécutez ce code une seule fois au chargement de la page

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
                <a href="/partie">
                    <Button>Jouer</Button>
                </a>
            </HomeContainer>
        </HomeWrapper>
    );
}

export default Joueurs;
