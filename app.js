const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));


app.listen(port, (req, res) => {
    console.log(`Servidor rodando na Porta: ${port}`)
})



app.get('/', (req, res) => {
    res.send('Hello this is our first api + home');
})

app.get('/teste1', (req, res) => {
    res.send('Hello this is our first api + teste1');
})


app.get('/teste2', (req, res) => {
    res.send('Hello this is our first api + teste2');
})
