const express = require('express');
const path = require("path");
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const filmes = [
    {
        titulo: "Designated Survivor: Temporada 3",
        preco: 50,
        moeda: "BRL",
        tipo: "semanal"
    }
];

app.get('/api/filme', (req, res) => {
    res.json(filmes);
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log(`Rodando! http://localhost:${port}`);
});
