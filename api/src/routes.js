const express = require('express');
const router = express.Router();

const Automovel = require('./controllers/automovel');
const Concessionaria = require('./controllers/concessionaria');
const Cliente = require('./controllers/cliente');
const Alocacao = require('./controllers/alocacao');
const Venda = require('./controllers/venda');
const Area = require('./controllers/area');

// Rota raiz
router.get('/', (req, res) => {
  res.json({ titulo: 'Fábrica de Automóveis 2025' });
});

// Rotas principais
router.get('/automoveis', Automovel.read);
router.post('/automoveis', Automovel.create);
router.get('/concessionarias', Concessionaria.read);
router.post('/concessionarias', Concessionaria.create);
router.get('/clientes', Cliente.read);
router.post('/clientes', Cliente.create);
router.get('/alocacoes', Alocacao.read);
router.post('/alocacoes', Alocacao.create);
router.get('/vendas', Venda.read);
router.post('/vendas', Venda.create);
router.get('/areas', Area.read); 
module.exports = router;
