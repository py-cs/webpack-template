import React from 'react';
import './Input.css';

interface InputProps {
  onChange: React.ChangeEventHandler;
  inputId: string;
  value: string;
  placeholder: string;
}

export default function Input({
  inputId, onChange, placeholder = '', value,
}: InputProps): JSX.Element {
  return (
    <input
      id={inputId}
      value={value}
      className="input"
      type="text"
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}
