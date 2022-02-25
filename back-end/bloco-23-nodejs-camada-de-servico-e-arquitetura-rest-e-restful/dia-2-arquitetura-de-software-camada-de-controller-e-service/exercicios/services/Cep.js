// O CEP precisa conter 8 dígitos numéricos e pode ou não possui traço.
// Dica Utilize o regex \d{5}-?\d{3} para validar o CEP.

const Cep = require('../model/Cep')

const findByCep = async (cep) => {
  const reg = /d{5}-?\d{3}/;

  if(!cep) return {
    error: {
      code: 'teste',
      message: 'cep inválido'
    }
  }

  if(reg.test(cep)) return cep.replace(/(\d{5})(\d{3})/, '$1-$2');

  const foundCep = await Cep.findByCep(cep);
  
  if(!foundCep) return {
    error: {
        code: 'notFound',
        message: 'CEP não encontrado'
    }
  }
  
  return foundCep;
}

module.exports = { 
    findByCep
}