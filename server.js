const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

const port = 8000;

app.get('/', (req, res) => {
  res.status(200).send('Hello');
});

app.post('/new', (req, res) => {
  fs.appendFile('data.json', `${JSON.stringify(req.body)} , `, (err) => {
    if (err) res.status(500).send(err);

    res.send(req.body);
  });
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
