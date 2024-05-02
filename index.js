const express = require('express');
const { getCityFromZipcode, getPackageDescriptionNpm } = require('utils-playground');

const app = express();

app.get('/', async (req, res) => {
    const cidade = getCityFromZipcode('87035160');
    const cidade2 = getCityFromZipcode('85030000');

    const promise = await Promise.all([cidade, cidade2]);
    //console.log(promise);

    const [respostaCidade1, respostaCidade2] = promise;

    res.send(`Acidade encontrada foi: ${respostaCidade1} e ${respostaCidade2}`);
});

app.get('/pacote/:nomePacote', async (req, res) => {
    const {nomePacote} =  req.params;

    const descricaoPacote = await getPackageDescriptionNpm(nomePacote);

    return res.send(descricaoPacote);
})

app.listen(3000);