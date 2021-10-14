import React from 'react';
import './Switch.css';

interface SwitchProps {
  checked: boolean;
  toggle: () => void;
}

function Switch({ checked, toggle }: SwitchProps): JSX.Element {
  return (
    <div className="toggle" id="toggle">
      <input
        className="switch"
        type="checkbox"
        checked={checked}
        onChange={toggle}
      />
      <span className="label label__on">Alt</span>
      <span className="label label__off">Main</span>
    </div>
  );
}

export default Switch;
