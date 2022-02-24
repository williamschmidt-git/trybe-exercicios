const connection = require('./connection')

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

module.exports = {
    formatUser,
    createUser,
    getAllUsers,
}