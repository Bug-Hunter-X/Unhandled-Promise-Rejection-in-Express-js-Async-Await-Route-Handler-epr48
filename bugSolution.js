const express = require('express');
const app = express();
app.get('/', async (req, res) => {
  try {
    const result = await database.query('SELECT * FROM users');
    res.send(result);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});