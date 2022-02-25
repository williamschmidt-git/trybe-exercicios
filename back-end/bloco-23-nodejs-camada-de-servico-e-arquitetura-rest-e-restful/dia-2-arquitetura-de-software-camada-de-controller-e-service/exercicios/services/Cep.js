// O CEP precisa conter 8 dígitos numéricos e pode ou não possui traço.
// Dica Utilize o regex \d{5}-?\d{3} para validar o CEP.

// O CEP deve ser composto por 9 dígitos com traço.
// Dica : Utilize o seguinte regex para validar o CEP: \d{5}-\d{3}
const Cep = require('../model/Cep')

const findByCep = async (cep) => {
  const reg = /d{5}-?\d{3}/;

  if(reg.test(cep)) return cep.replace(/(\d{5})(\d{3})/, '$1-$2');
  
  const foundCep = await Cep.findByCep(cep);

  if(!cep|| foundCep.length < 1) return {
    error: {
      code: 'invalidData',
      message: 'cep inválido'
    }
  }
  
  if(!foundCep) return {
    error: {
        code: 'notFound',
        message: 'CEP não encontrado'
    }
  }
  
  return foundCep;
}

const create = async ({ cep, logradouro, bairro, localidade, uf }) => {

  // const checkIfCepExists = await findByCep(cep);

  // if(checkIfCepExists) {
  //   return {
  //     error: {
  //       code: 'alreadyExists',
  //       message: 'CEP já existente'
  //     }
  //   }
  // }
  
  return Cep.create({ cep, logradouro, bairro, localidade, uf });
}

module.exports = { 
    findByCep,
    create
}