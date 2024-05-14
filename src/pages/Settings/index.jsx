import { useState } from 'react';
import {
    Button,
    ButtonContainer,
    HomeContainer,
    HomeWrapper,
    Title,
} from '../../utils/style/Styles';
import {
    SettingsContainer,
    InnerContainer,
    SettingsTitle,
    SettingsChangeContainer,
} from './styles.jsx';
import challenges from '../../datas/challenges';

function Settings() {
    const challengesCategory = challenges.reduce(
        (acc, challenge) =>
            acc.includes(challenge.category)
                ? acc
                : acc.concat(challenge.category),
        []
    );

    const [activeCategories, setActiveCategory] = useState('');

    const initialCheckedCategories = Array.isArray(activeCategories)
        ? activeCategories
        : [];

    const [checkedCategories, setCheckedCategories] = useState(
        initialCheckedCategories.length > 0
            ? initialCheckedCategories
            : ['Raconte-moi tout', "Qui j'imite ?", 'Le ridicule ne tue pas']
    );

    // Fonction pour gérer la sélection des catégories
    const handleCategoryChange = (category) => {
        if (checkedCategories.includes(category)) {
            setCheckedCategories(
                checkedCategories.filter((cat) => cat !== category)
            );
        } else {
            setCheckedCategories([...checkedCategories, category]);
        }
    };

    // Fonction pour appliquer les catégories sélectionnées
    const applyCategories = () => {
        setActiveCategory(checkedCategories);
        localStorage.setItem(
            'activeCategories',
            JSON.stringify(activeCategories)
        );
        console.log(activeCategories);
    };

    return (
        <HomeWrapper>
            <HomeContainer>
                <Title>Paramètres de la partie</Title>
                <SettingsContainer>
                    <SettingsChangeContainer>
                        <InnerContainer>
                            <SettingsTitle>
                                Catégories sélectionnées :
                            </SettingsTitle>
                            {challengesCategory.map((cat) => (
                                <div>
                                    <label key={cat}>
                                        <input
                                            type="checkbox"
                                            value={cat}
                                            checked={checkedCategories.includes(
                                                cat
                                            )}
                                            onChange={() =>
                                                handleCategoryChange(cat)
                                            }
                                        />
                                        {cat}
                                    </label>
                                </div>
                            ))}
                        </InnerContainer>
                        <InnerContainer>
                            <SettingsTitle>Nombre de tours :</SettingsTitle>
                            <div>
                                <select id="nbTours" name="nbTours">
                                    <option value="3">3 Tours</option>
                                    <option value="10">10 Tours</option>
                                    <option value="20">20 Tours</option>
                                    <option value="30">30 Tours</option>
                                </select>
                            </div>
                        </InnerContainer>
                    </SettingsChangeContainer>
                    <ButtonContainer>
                        <Button onClick={applyCategories}>Appliquer</Button>
                        <Button onClick={() => setActiveCategory([])}>
                            Réinitialiser
                        </Button>
                    </ButtonContainer>
                </SettingsContainer>
            </HomeContainer>
        </HomeWrapper>
    );
}

export default Settings;
