const express = require('express');
const router = express.Router();

// Rota 1: Dados de desmatamento
router.get('/dados-desmatamento', (req, res) => {
  res.json({
    ano: 2024,
    desmatamento_km2: 8500,
    fonte: 'INPE'
  });
});

// Rota 2: Curiosidades sobre a Amazônia
router.get('/curiosidades', (req, res) => {
  const curiosidades = [
    "A Amazônia possui mais de 390 bilhões de árvores.",
    "A floresta cobre cerca de 5,5 milhões de km².",
    "Mais de 20% do oxigênio do planeta é produzido na Amazônia."
  ];
  const curiosidade = curiosidades[Math.floor(Math.random() * curiosidades.length)];
  res.json({ curiosidade });
});

// Rota 3: Sugestões de livros antirracistas
router.get('/livros-antirracismo', (req, res) => {
  const livros = [
    {
      titulo: "Pequeno Manual Antirracista",
      autora: "Djamila Ribeiro",
      descricao: "Introdução prática sobre como combater o racismo estrutural no Brasil."
    },
    {
      titulo: "O Que É Lugar de Fala?",
      autora: "Djamila Ribeiro",
      descricao: "Reflexão sobre quem tem o direito de falar sobre determinadas experiências sociais."
    },
    {
      titulo: "Na Minha Pele",
      autor: "Lázaro Ramos",
      descricao: "Relato pessoal e político sobre identidade, racismo e resistência."
    }
  ];
  const livro = livros[Math.floor(Math.random() * livros.length)];
  res.json(livro);
});

module.exports = router;
