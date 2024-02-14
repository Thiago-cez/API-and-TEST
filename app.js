const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const cors = require('cors');


require('./model/db');

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));


app.use('/api', require('./router/userRouter'))

app.listen(port, (req, res) => {
    console.log(`Servidor rodando na Porta: ${port}`)
})
