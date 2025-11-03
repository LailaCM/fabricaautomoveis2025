const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const read = async (req, res) => {
    const concessionarias = await prisma.concessionaria.findMany();
    res.json(concessionarias);
};

const create = async (req, res) => {
  try {
    const { concessionaria } = req.body;
    if (!concessionaria) {
      return res.status(400).json({ error: 'Nome da concessionária é obrigatório' });
    }
    const conc = await prisma.concessionaria.create({
      data: { concessionaria }
    });
    res.status(201).json(conc);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar concessionária' });
  }
};


module.exports = {
    read,
    create
};