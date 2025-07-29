const express = require('express');
const apiRoutes = require('./route');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', apiRoutes);

app.listen(PORT, () => {
  console.log(`🌱 Servidor rodando em http://localhost:${PORT}`);
});
