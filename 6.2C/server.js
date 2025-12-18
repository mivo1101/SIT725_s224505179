const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

let lastResult = null;

const addTwoNumbers = (a, b) => {
  if (isNaN(a) || isNaN(b)) {
      return null;
  }
  return a + b;
}

app.post('/calculate', (req, res) => {
  const { a, b } = req.body;

  const numA = parseFloat(a);
  const numB = parseFloat(b);

  const result = addTwoNumbers(numA, numB);

  if (result === null) {
    lastResult = null
    return res.status(400).json({ error: "Please send valid numbers!" });
  }

  lastResult = result;
  res.json({ message: "Numbers received!", result: result });
});

app.get('/result', (req, res) => {
  if (lastResult === null) {
    return res.json({ error: "No calculation yet!" });
  }
  res.json({ result: lastResult });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

module.exports = { app, addTwoNumbers };