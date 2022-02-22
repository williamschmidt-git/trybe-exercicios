const connection = require('./connection');


const getNewAuthor = ({id, firstName, middleName, lastName}) => {

    // Note que `Boolean` é uma função que recebe um parâmetro e retorna true ou false
    // nesse caso, se middle_name for `undefined` ou uma string vazia o retorno será `false`
    const fullName = [firstName, middleName, lastName]
      .filter(Boolean)
      .join(' ');

    return {
    id,
    firstName,
    middleName,
    lastName,
    fullName,
   };
};

const serialize = (authorData) => ({
    id: authorData.id,
    firstName: authorData.first_name,
    middleName: authorData.middle_name,
    lastName: authorData.last_name,
});

const findById = async (id) => {
    // Repare que substituímos o id por `?` na query.
    // Depois, ao executá-la, informamos um array com o id para o método `execute`.
    // O `mysql2` vai realizar, de forma segura, a substituição do `?` pelo id informado.
    const query = 'SELECT first_name, middle_name, last_name FROM model_example.authors WHERE id = ?'
    const [ authorData ] = await connection.execute(query, [id]);

    if (authorData.length === 0) return null;

    // Utilizamos [0] para buscar a primeira linha, que deve ser a única no array de resultados, pois estamos buscando por ID.
    const { firstName, middleName, lastName } = authorData.map(serialize)[0];

    return getNewAuthor({
        id,
        firstName,
        middleName,
        lastName,
    });
};

const getAll = async() => {
    const [authors] = await connection.execute(
        'SELECT id, first_name, middle_name, last_name FROM model_example.authors;',
    );

    return authors.map(serialize).map(getNewAuthor);
};

module.exports = {
    getAll,
    findById
};