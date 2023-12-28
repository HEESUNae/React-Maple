import React from 'react';
import { StyledCharacterPage } from './style';
import { useAppSelector } from '../../store/hooks';
import EquipmentList from '../../components/equipmentList';
import CharacterCard from '../../components/characterCard';

const CharacterPage = () => {
  const user = useAppSelector((state) => state.user.user);

  return (
    <StyledCharacterPage>
      <div className="character-container">{user.character_name && <CharacterCard user={user} />}</div>
      <div className="equipment-container">
        <EquipmentList />
      </div>
    </StyledCharacterPage>
  );
};

export default CharacterPage;
