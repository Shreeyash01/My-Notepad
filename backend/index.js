const express=require('express');
const mongoose = require("mongoose");
var cors = require('cors')

mongoose.connect("mongodb://127.0.0.1/notepadDB", { useNewUrlParser: true });

const app = express()
app.use(cors())
const port = 5000


app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/auth',require('./routes/auth'));
app.use('/api/notes',require('./routes/notes'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})