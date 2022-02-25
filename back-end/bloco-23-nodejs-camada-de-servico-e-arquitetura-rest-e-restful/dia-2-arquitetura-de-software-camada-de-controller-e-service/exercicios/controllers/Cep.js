// Caso o CEP seja inválido, retorne o status 400 Bad Request e o seguinte JSON:
const Cep = require('../services/Cep');

const findByCep = async (req, res) => {
    const { cep } = req.params;
    
    const foundCep = await Cep.findByCep(cep);

    if(foundCep.error) return res.status(401).json(foundCep.error)

    res.status(200).json(foundCep)
}


module.exports ={ 
    findByCep
}