
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const userRoutes = require('./routes/users');

const app = express();
const port = 3009;

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'frontend')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});


app.use('/users', userRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
