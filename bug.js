const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // This line throws an error if the database connection fails
  const result = await database.query('SELECT * FROM users');
  res.send(result);
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});