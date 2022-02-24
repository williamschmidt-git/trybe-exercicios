const connection = require('./connection')
const Joi = require('joi');

const userSchema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
}).messages({
  'any.required': "O campo {{#label}} é obrigatório",
  'string.min': 'O campo {{#label}} deve ter, pelo menos, {{#limit}} caracteres',
  'string.email': 'Informe um email válido no campo {{#label}}',
});

// Criamos um método para verificar se os dados do usuário são válidos
function isValid(userData) {
return userSchema.validate(userData);
}

function formatUser({ id, first_name: firstName, last_name: lastName, email }){
    return {
        id,
        firstName,
        lastName,
        email
    }
}

async function createUser({ firstName, lastName, email, password }){
    // const teste = newUser[0]

    return await connection.execute(`
    INSERT INTO users_crud.user (first_name, last_name, email, password) 
        VALUES (?, ? ,? ,?)`, 
        [firstName, lastName, email, password])
        .then(([result]) => ({id: result.inserId, firstName, lastName, email}));
}

async function getAllUsers(){
    return await connection.execute(`
    SELECT * FROM users_crud.user`).then(([results]) => results.map(formatUser));
}

async function findById(id){
    const user = await connection.execute(`
        SELECT * FROM users_crud.user WHERE id = ? 
    `, [id]).then(([results]) => results.length ? results[0] : null)

    if(!user) return null;

    return formatUser(user);
}

async function update(id, { firstName, lastName, email, password}){
    // Primeiro, executamos a query de atualização
    await connection.execute(`
        UPDATE users_crud.user
        SET first_name = ?, last_name = ?, email = ?, password = ? WHERE id = ?
    `, [firstName, lastName, email, password, id])

    // Por fim, buscamos o usuário, utilizando o método `findById` e o retornamos.
        // Não precisamos nos preocupar em formatar os dados, ou em verificar se o usuário de fato existe,
        // já que `findById` já faz isso pra nós.
    return findById(id)
}

module.exports = {
    formatUser,
    createUser,
    getAllUsers,
    findById,
    update,
    isValid
}