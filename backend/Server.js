const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

// armazenamento simples em memória (apenas para teste)
let anuncios = [];

// rota raiz
app.get("/", (req, res) => {
  res.send("🚀 ThirdiAds backend funcionando!");
});

// listar anúncios
app.get("/anuncios", (req, res) => {
  res.json(anuncios);
});

// criar anúncio (POST /anuncios) - corpo: { titulo, tipo, conteudo }
app.post("/anuncios", (req, res) => {
  const { titulo = "Anúncio sem título", tipo = "pessoal", conteudo = {} } = req.body;
  const novo = { id: Date.now(), titulo, tipo, conteudo, createdAt: new Date() };
  anuncios.push(novo);
  return res.status(201).json({ message: "Anúncio criado", anuncio: novo });
});

app.listen(PORT, () => {
  console.log(`Servidor ThirdiAds rodando na porta ${PORT}`);
});￼Enter
