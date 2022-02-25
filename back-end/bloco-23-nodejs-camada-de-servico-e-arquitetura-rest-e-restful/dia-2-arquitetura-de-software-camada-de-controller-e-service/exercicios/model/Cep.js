const connection = require('./connection')

const findByCep = async (cep) => {
    const query = `SELECT cep, logradouro, bairro, localidade, uf FROM ceps WHERE cep = ?`;
    const formatedCep = cep.replace('-', '');

    const [result] = await connection.execute(query, [formatedCep]);

    return result.map(serialize);
}

const serialize = ({ cep, logradouro, bairro, localidade, uf }) => {
    return {
        cep: cep.replace(/(\d{5})(\d{3})/, '$1-$2'),
        logradouro,
        bairro,
        localidade,
        uf,
    }
}

const create = async ({ cep, logradouro, bairro, localidade, uf }) => {
    const newCep = cep.replace('-', '');

    const query = `
    INSERT INTO ceps 
        (cep, logradouro, bairro, localidade, uf)
        VALUES
        (?, ?, ?, ?, ?)`;

    await connection.execute(query, [newCep, logradouro, bairro, localidade, uf]);

    return {
        newCep,
        logradouro,
        bairro,
        localidade,
        uf
    }
}


module.exports = {
    findByCep,
    create
}