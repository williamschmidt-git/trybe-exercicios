const Author = require('../models/Author');

const create = async (firstName, middleName, lastName) =>
  Author.create(firstName, middleName, lastName);

  const findById = async (id) => {
    // Solicitamos que o model realize a busca no banco
    const author = await Author.findById(id);
  
    // Caso nenhuma pessoa autora seja encontrada, retornamos um objeto de erro.
    if (!author) {
      return {
        error: {
          code: 'notFound',
          message: `Não foi possível encontrar uma pessoa autora com o id ${id}`,
        },
      };
    }
  
    // Caso haja uma pessoa autora com o ID informado, retornamos essa pessoa
    return author;
  };

const createAuthor = async (firstName, middleName, lastName) => {
  // Buscamos um autor com o mesmo nome completo que desejamos criar
  const existingAuthor = await Author.findByName(firstName, middleName, lastName);

  // Caso essa pessoa autora já exista, retornamos um objeto de erro informando
  // que não é possível criar a pessoa autora pois ele já existe
  if (existingAuthor) {
    return {
      error: {
        code: 'alreadyExists',
        message: 'Uma pessoa autora já existe com esse nome completo',
      },
    };
  }

  // Caso a pessoa autora não exista e, portanto, possa ser criado
  // chamamos o model e retornamos o resultado
  return Author.createAuthor(firstName, middleName, lastName);
};

const findByName = async (firstName, middleName, lastName) => {
  // Determinamos se devemos buscar com ou sem o nome do meio
  let query = 'SELECT id, first_name, middle_name, last_name ' +
              'FROM model_example.authors ';
    if (middleName) {
      query += 'WHERE first_name = ? AND middle_name = ? AND last_name = ?';
    } else {
      query += 'WHERE first_name = ? AND last_name = ?';
    }

  const params = middleName ? [firstName, middleName, lastName] : [firstName, lastName];

  // Executamos a consulta e retornamos o resultado
  const [authorData] = await connection.execute(query, params);

  // Caso nenhum author seja encontrado, devolvemos null
  if (authorData.length === 0) return null;

  // Caso contrário, retornamos o author encontrado
  return serialize(authorData);
};

module.exports = {
  getAll,
  findById,
  createAuthor,
  findByName,
};