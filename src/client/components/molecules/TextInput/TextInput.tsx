import React from 'react';
import Input from '../../atoms/Input/Input';
import Label from '../../atoms/Label/Label';
import './TextInput.css';

interface TextInputProps {
  onChange: React.ChangeEventHandler;
  placeholder: string;
  label: string;
  value: string;
  inputId: string;
}

export default function TextInput({
  inputId: id, onChange, placeholder, label, value,
}: TextInputProps): JSX.Element {
  return (
    <div className="input-field">
      <Label caption={label} inputId={id} />
      <Input
        inputId={id}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}
