/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const compression = require('compression');

const port = process.env.PORT || 3333;
const app = express();

/**
|--------------------------------------------------
| Routing
|--------------------------------------------------
*/

app.use(compression());
app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build/index.html'));
});

app.listen(port, (err) => {
  if (err) console.log(err);
  console.log(`Applications started on port: ${port}`);
});
