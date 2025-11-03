const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const read = async (req, res) => {
    const automoveis = await prisma.automovel.findMany();
    res.json(automoveis);
};

const create = async (req, res) => {
  try {
    const { modelo, preco } = req.body;
    if (!modelo || !preco) {
      return res.status(400).json({ error: 'Modelo e preço são obrigatórios' });
    }
    const automovel = await prisma.automovel.create({
      data: { modelo, preco }
    });
    res.status(201).json(automovel);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar automóvel' });
  }
};


module.exports = {
    read,
    create
};