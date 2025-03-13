import { useState } from 'react';

const useCalculator = () => {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const calculate = async (num1, num2, operation) => {
    try {
      const url = `http://localhost:3001/calculate?num1=${num1}&num2=${num2}&operation=${operation}`;

      const response = await fetch(url, {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }

      const data = await response.json();
      setResult(data.result);
      setError(null);
    } catch (error) {
      console.error('Error:', error);
      setError('Error al calcular');
      setResult(null);
    }
  };

  return { result, error, calculate };
};

export default useCalculator;