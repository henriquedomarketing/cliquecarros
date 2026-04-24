import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("API Clique Carros rodando 🚀");
});

app.get("/api/vendas", (req, res) => {
  res.json([
    { mes: "Abr/26", carros: 261000, motos: 169000, leves: 67000 }
  ]);
});

app.get("/api/financiamentos", (req, res) => {
  res.json({
    valor: 62.34,
    crescimento: 7.2
  });
});

app.get("/api/frota", (req, res) => {
  res.json({
    total: 122248684
  });
});

app.get("/api/fipe/top10-por-faixa", (req, res) => {
  res.json({
    updatedAt: "08:00",
    rankings: {}
  });
});

app.listen(3000, () => {
  console.log("Servidor rodando 🚀");
});
