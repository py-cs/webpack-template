import React from 'react';
import './Label.css';

interface LabelProps {
  caption: string;
  inputId: string;
}

export default function Label({ caption, inputId }: LabelProps): JSX.Element {
  return (
    <label className="input" htmlFor={inputId}>
      {caption}
    </label>
  );
}
