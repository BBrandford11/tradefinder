const express = require('express')
const mongoose = require('mongoose');
const app = express()
const PORT = 3002;

// middleware
// app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(PORT, () => {
  console.log(`LISTENING ON PORT ${PORT}`);
});
