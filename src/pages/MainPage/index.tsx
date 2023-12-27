import { ChangeEvent, useState } from 'react';
import Input from '../../components/input';
import { StyledMainPage } from './style';
import Button from '../../components/button';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchUuid, userInfo } from '../../store/userSlice';

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
        }
      })
      .catch((err) => {
        throw err;
      });
  };

  return (
    <StyledMainPage>
      <div className="nickname-search-container">
        <form>
          <Input
            placeholder="캐릭터 닉네임을 입력해주세요"
            onChange={(e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
          />
          <Button type="submit" name="검색" onClick={getUserUuid} />
        </form>
      </div>
      {user.character_name && (
        <div>
          <img src={user.character_image} alt="" />
          <table>
            <tbody>
              <tr>
                <th>닉네임</th>
                <td>{user.character_name}</td>
              </tr>
              <tr>
                <th>레벨</th>
                <td>{user.character_level}</td>
              </tr>
              <tr>
                <th>서버</th>
                <td>{user.world_name}</td>
              </tr>
              <tr>
                <th>직업</th>
                <td>{user.character_class}</td>
              </tr>
              <tr>
                <th>성별</th>
                <td>{user.character_gender}</td>
              </tr>
              <tr>
                <th>길드</th>
                <td>{user.character_guild_name}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </StyledMainPage>
  );
};

export default MainPage;
