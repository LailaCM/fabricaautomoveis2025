const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const read = async (req, res) => {
  try {
    const alocacoes = await prisma.alocacao.findMany({
      include: {
        possui: true,       
        contem: true,       
        vendas: true        
      }
    });
    res.json(alocacoes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar alocações' });
  }
};

const create = async (req, res) => {
  try {
    const { area, quantidade, automovel, concessionaria } = req.body;

    if (!area || !quantidade || !automovel || !concessionaria) {
      return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
    }

    const alocacao = await prisma.alocacao.create({
      data: {
        area,
        quantidade,
        automovel,
        concessionaria
      },
      include: {
        possui: true,
        contem: true
      }
    });

    res.status(201).json(alocacao);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar alocação' });
  }
};

module.exports = { read, create };
