const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const read = async (req, res) => {
    const clientes = await prisma.cliente.findMany();
    res.json(clientes);
};

const create = async (req, res) => {
    const { nome } = req.body;
    const cliente = await prisma.cliente.create({
        data: { nome }
    });
    res.json(cliente);
};

module.exports = { 
    read, 
    create 
};
