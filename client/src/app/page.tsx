'use client';
import { useState } from 'react';
import useCalculator from './hooks/useCalculator';

export default function Home() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operation, setOperation] = useState('add');
  const { result, error, calculate } = useCalculator();

  const handleCalculate = () => {
    calculate(num1, num2, operation);
  };

  return (
    <div>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(Number(e.target.value))}
      />
      <select
        value={operation}
        onChange={(e) => setOperation(e.target.value)}
      >
        <option value="add">+</option>
        <option value="subtract">-</option>
        <option value="multiply">*</option>
        <option value="divide">/</option>
      </select>
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(Number(e.target.value))}
      />
      <button onClick={handleCalculate}>Calcular</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {result !== null && <p>Resultado: {result}</p>}
    </div>
  );
}
