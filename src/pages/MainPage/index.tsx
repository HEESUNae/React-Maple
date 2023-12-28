import { ChangeEvent, useEffect, useState } from 'react';
import { StyledMainPage } from './style';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchUuid, userInfo } from '../../store/userSlice';

import Input from '../../components/input';
import Button from '../../components/button';
import { fetchEquipment } from '../../store/equipmentSlice';
import { useNavigate } from 'react-router-dom';
import { fetchDojang, fetchTotalRank, nowDate } from '../../store/rankSlice';

export type RankType = {
  ranking: number;
  world_name: string;
  character_level: number;
  character_name: string;
  class_name: string;
  dojang_floor: number;
  dojang_time_record: number;
};

const MainPage = () => {
  const dispath = useAppDispatch();
  const navigate = useNavigate();
  const dojang = useAppSelector((state) => state.rank.dojang);
  const rank = useAppSelector((state) => state.rank.rank);
  const [inputValue, setInputValue] = useState('');

  const getUserUuid = (e: MouseEvent) => {
    e.preventDefault();
    dispath(fetchUuid(inputValue))
      .then((action) => {
        if (fetchUuid.fulfilled.match(action)) {
          const uuid = action.payload;
          dispath(userInfo(uuid));
          dispath(fetchEquipment(uuid));
          navigate('/character');
        }
      })
      .catch((err) => {
        throw err;
      });
  };

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    dispath(fetchDojang());
    dispath(fetchTotalRank());
  }, []);

  return (
    <StyledMainPage>
      <div className="nickname-search-container">
        <form>
          <Input placeholder="캐릭터 닉네임을 입력해주세요" onChange={onChangeInput} />
          <Button type="submit" name="검색" onClick={getUserUuid} />
        </form>
      </div>
      <div className="contents">
        <div className="rank-list-container">
          <p className="title">
            전체 레벨 랭킹 <span>{nowDate()} 기준</span>
          </p>
          <ul>
            {rank.map((item: RankType) => (
              <li key={item.ranking}>
                <div className="rank">
                  <p>{item.ranking}등</p>
                </div>
                <p>{item.character_name}</p>
                <p>Level. {item.character_level}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="dojang-list-container">
          <p className="title">
            무릉도장 랭킹 <span>{nowDate()} 기준</span>
          </p>
          <ul>
            {dojang.map((item: RankType) => (
              <li key={item.ranking}>
                <div className="rank">
                  <p>{item.ranking}등</p>
                </div>
                <table>
                  <tbody>
                    <tr>
                      <th>서버</th>
                      <td>{item.world_name}</td>
                      <th>닉네임</th>
                      <td>{item.character_name}</td>
                    </tr>
                    <tr>
                      <th>레벨</th>
                      <td>{item.character_level}</td>
                      <th>직업</th>
                      <td>{item.class_name}</td>
                    </tr>
                    <tr>
                      <th>층수</th>
                      <td>{item.dojang_floor}층</td>
                    </tr>
                  </tbody>
                </table>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </StyledMainPage>
  );
};

export default MainPage;
