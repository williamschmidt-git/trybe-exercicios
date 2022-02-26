// Caso o CEP seja inválido, retorne o status 400 Bad Request e o seguinte JSON:
const Cep = require('../services/Cep');
const rescue = require('express-rescue');
const Joi = require('joi')



const findByCep = async (req, res, next) => {
    const { cep } = req.params;
    
    const foundCep = await Cep.findByCep(cep);

    if(foundCep.error) return next(foundCep.error)

    res.status(200).json(foundCep)
}

const create = async (req, res, next) => {
  const { error } = Joi.object({
    cep: Joi.string().regex(/\d{5}-?\d{3}/).required(),
    logradouro: Joi.string().required(),
    bairro: Joi.string().required(),
    localidade: Joi.string().required(),
    uf: Joi.string().max(2).required(),
  }).validate(req.body);

  if(error) return next(error);

  const newData = await Cep.create(req.body);

  if(newData.error) {
    return next(newData.error)
  }

  return res.status(201).json(newData)
}


module.exports ={ 
    findByCep,
    create
}