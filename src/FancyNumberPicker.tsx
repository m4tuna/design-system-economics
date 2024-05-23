import React from 'react';

const FancyNumberPicker = ({ label, value, onChange }: { label: string, value: number, onChange: (value: number) => void }) => {
  const handleIncrement = () => {
    onChange(value + 1);
  };

  const handleDecrement = () => {
    onChange(value - 1);
  };

  return (
    <div className="fancy-number-picker">
      <label>{label}</label>
      <div className="input-group">
        <button onClick={handleDecrement}>-</button>
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
        />
        <button onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
};

export default FancyNumberPicker;
