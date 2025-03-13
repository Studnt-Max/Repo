'use client';
import { SetStateAction, useState } from 'react';
import useCalculator from './hooks/useCalculator';
import InputNumber from './components/InputNumber';
import OperationSelect from './components/OperationSelect';
import Button from './components/Button';
import ResultDisplay from './components/ResultDisplay';

export default function Home() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operation, setOperation] = useState('add');
  const { result, error, calculate } = useCalculator();

  const handleCalculate = () => {
    calculate(num1, num2, operation);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-80">
        <h1 className="text-2xl font-bold text-center mb-4">Calculadora</h1>
        <div className="space-y-4">
          <InputNumber
            value={num1}
            onChange={(e: { target: { value: any; }; }) => setNum1(Number(e.target.value))}
            placeholder="Número 1"
          />
          <OperationSelect
            value={operation}
            onChange={(e: { target: { value: SetStateAction<string>; }; }) => setOperation(e.target.value)}
          />
          <InputNumber
            value={num2}
            onChange={(e: { target: { value: any; }; }) => setNum2(Number(e.target.value))}
            placeholder="Número 2"
          />
          <Button onClick={handleCalculate}>Calcular</Button>
          <ResultDisplay result={result} error={error} />
        </div>
      </div>
    </div>
  );
}
