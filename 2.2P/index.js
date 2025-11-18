const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

let lastResult = null;

app.post('/calculate', (req, res) => {
  const { a, b } = req.body;

  const numA = parseFloat(a);
  const numB = parseFloat(b);

  if (isNaN(numA) || isNaN(numB)) {
    return res.status(400).json({ error: "Please send valid numbers!" });
  }

  lastResult = numA + numB;

  res.json({ message: "Calculation stored", result: lastResult });
});

app.get('/result', (req, res) => {
  if (lastResult === null) {
    return res.json({ result: "No calculation yet" });
  }
  res.json({ result: lastResult });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});