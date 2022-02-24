const rescue = require('express-rescue');
const userModel = require('../model/User');

const getById = rescue(async (req, res) => {
    const { id } = req.params;

    const user = await userModel.findById(id);

    if(!user) {
        return res.status(404).json({error: true, message: 'Usuario não encontrado'})
    }

    return res.status(200).json(user);
})

module.exports = { 
    getById
}