import React from 'react';
import { StyledCharacterCard } from './style';

export type UserInfoType = {
  character_image: string;
  character_name: string;
  character_level: number;
  world_name: string;
  character_class: string;
  character_gender: string;
  character_guild_name: string;
};

export interface CharacterCardProps {
  user: UserInfoType;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ user }) => {
  return (
    <StyledCharacterCard>
      <img src={user.character_image} alt="" width={150} />
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
    </StyledCharacterCard>
  );
};

export default CharacterCard;
