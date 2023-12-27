import React from 'react';
import { StyledBedge } from './style';

export type BedgeType = '레어' | '에픽' | '유니크' | '레전드리';

const Bedge: React.FC<{ name: BedgeType; starforce?: string }> = ({ name, starforce }) => {
  let color;
  switch (name) {
    case '레어':
      color = 'blue';
      break;
    case '에픽':
      color = 'purple';
      break;
    case '유니크':
      color = 'orange';
      break;
    case '레전드리':
      color = '#30a830';
      break;
    default:
      color = 'gray';
      break;
  }

  return (
    <StyledBedge $color={color}>
      {name} {starforce !== '0' && ' ' + starforce + '성'}
    </StyledBedge>
  );
};

export default Bedge;
