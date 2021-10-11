import React from 'react';
import './Button.css';

interface ButtonProps {
  caption: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button({ caption, onClick }: ButtonProps): JSX.Element {
  return (
    <button className="button" type="button" onClick={onClick}>{caption}</button>
  );
}
