
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());

// Ruta para calcular usando query parameters
app.get('/calculate', (req, res) => {
  const { num1, num2, operation } = req.query;

  // Convertir los números a tipo Number
  const number1 = parseFloat(num1);
  const number2 = parseFloat(num2);

  // Validar que los números sean válidos
  if (isNaN(number1) || isNaN(number2)) {
    return res.status(400).json({ error: 'Números no válidos' });
  }

  let result;
  switch (operation) {
    case 'add':
      result = number1 + number2;
      break;
    case 'subtract':
      result = number1 - number2;
      break;
    case 'multiply':
      result = number1 * number2;
      break;
    case 'divide':
      if (number2 === 0) {
        return res.status(400).json({ error: 'No se puede dividir por cero' });
      }
      result = number1 / number2;
      break;
    default:
      return res.status(400).json({ error: 'Operación no válida' });
  }

  res.json({ result });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});