const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const read = async (req, res) => {
  try {
    const vendas = await prisma.venda.findMany({
      include: {
        compra: true,
        faz: {
          include: {
            possui: true, 
            contem: true  
          }
        }
      }
    });
    res.json(vendas);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar vendas', details: error.message });
  }
};

const create = async (req, res) => {
  try {
    const { cliente, alocacao } = req.body;

    if (!cliente || !alocacao) {
      return res.status(400).json({ error: 'Campos cliente e alocacao são obrigatórios.' });
    }

    const novaVenda = await prisma.venda.create({
      data: {
        cliente,
        alocacao
      },
      include: {
        compra: true,
        faz: {
          include: {
            possui: true,
            contem: true
          }
        }
      }
    });

    res.status(201).json(novaVenda);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao registrar venda', details: error.message });
  }
};

module.exports = {
  read,
  create
};
