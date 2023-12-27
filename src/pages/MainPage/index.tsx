import { ChangeEvent, useState } from 'react';
import { StyledMainPage } from './style';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchUuid, userInfo } from '../../store/userSlice';

import Input from '../../components/input';
import Button from '../../components/button';
import CharacterCard from '../../components/characterCard';
import { fetchEquipment } from '../../store/equipmentSlice';
import EquipmentList from '../../components/equipmentList';

const MainPage = () => {
  const user = useAppSelector((state) => state.user.user);
  const dispath = useAppDispatch();
  const [inputValue, setInputValue] = useState('');

  const getUserUuid = (e: MouseEvent) => {
    e.preventDefault();
    dispath(fetchUuid(inputValue))
      .then((action) => {
        if (fetchUuid.fulfilled.match(action)) {
          const uuid = action.payload;
          dispath(userInfo(uuid));
          dispath(fetchEquipment(uuid));
        }
      })
      .catch((err) => {
        throw err;
      });
  };

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <StyledMainPage>
      <div className="nickname-search-container">
        <form>
          <Input placeholder="캐릭터 닉네임을 입력해주세요" onChange={onChangeInput} />
          <Button type="submit" name="검색" onClick={getUserUuid} />
        </form>
      </div>
      <div className="nickname-info-container">
        <div className="character-container">{user.character_name && <CharacterCard user={user} />}</div>
        <div className="equipment-container">
          <EquipmentList />
        </div>
      </div>
    </StyledMainPage>
  );
};

export default MainPage;
