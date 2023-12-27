import React from 'react';
import { StyledButton } from './style';

interface ButtonProps {
  type?: 'button' | 'submit';
  name: string;
  onClick?: (e: any) => void;
}

const Button: React.FC<ButtonProps> = ({ type = 'button', name, onClick }) => {
  return (
    <StyledButton type={type} onClick={onClick}>
      {name}
    </StyledButton>
  );
};

export default Button;
