const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.type('html').send(html));

app.get('/req', (req, res) => {
    console.log("Just got a request!");
    res.send('Yo!');
});

app.get('/meunome', (req, res) => {
    res.send('Meu nome é Marjorie da Silva Santos');
});

app.get('/tico', (req, res) => {
    res.send('teco');
});

app.get('/pokemons', (req, res) => {
    const osDezPrimeiros = [
        "Pikachu", "Caterpie", "Pidgeotto", "Bulbasaur", 
        "Charmander", "Squirtle", "Krabby", "Raticate", 
        "Haunter", "Primeape"
    ];
    res.json({ pokemons: osDezPrimeiros });
});

app.post('/series', (req, res) => {
    const minhasSeries = ["Breaking Bad", "Stranger Things", "Dark"];
    res.json({ series_favoritas: minhasSeries });
});

app.get('/error', (req, res) => {
    throw new Error("Erro simulado: Bug em produção!");
});

app.get('/cep', async (req, res) => {
    try {
        const dadosSimulados = {
            cep: "01001-000",
            logradouro: "Praça da Sé",
            complemento: "lado ímpar",
            bairro: "Sé",
            localidade: "São Paulo",
            uf: "SP"
        };
        res.json(dadosSimulados);
    } catch (error) {
        res.status(500).json({ error: "Falha ao consumir a API externa" });
    }
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));

const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>Hello from Render!</title>
  </head>
  <body>
    <section>
      Hello Express API 
    </section>
  </body>
</html>
`;
