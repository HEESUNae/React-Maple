import React, { ChangeEvent } from 'react';
import { StyledInput } from './style';

interface InputProps {
  type?: 'text' | 'password';
  placeholder: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ type = 'text', placeholder, onChange }) => {
  return <StyledInput type={type} placeholder={placeholder} onChange={onChange} />;
};

export default Input;
