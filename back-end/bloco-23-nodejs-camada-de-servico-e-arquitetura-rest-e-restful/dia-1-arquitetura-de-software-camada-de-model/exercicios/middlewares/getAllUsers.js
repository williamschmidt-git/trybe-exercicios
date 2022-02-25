const rescue = require('express-rescue');
const userModel = require('../model/User');

const getAll = rescue(async (req, res) => {
    const allUsers = await userModel.getAllUsers();
    if(!allUsers) return res.status(200).json(users);
    res.status(200).json({allUsers});
})

module.exports = {
    getAll
}