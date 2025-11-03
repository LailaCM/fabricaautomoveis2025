const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const read = async (req, res) => {
  try {
    const areas = await prisma.alocacao.groupBy({
      by: ['area'],
      _sum: { quantidade: true }
    });

    const resultado = areas.map(a => ({
      area: a.area,
      total: a._sum.quantidade || 0
    }));

    res.json(resultado);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar áreas', details: error.message });
  }
};

module.exports = { read };
