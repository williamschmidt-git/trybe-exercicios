const express = require('express');
const { Address, Employee } = require('./models');

const app = express();

app.get('/employees', async (req, res) => {
    try {
        const employee = await Employee.findAll({
            include: { model: Address, as: 'addresses'},
        });

        return res.status(200).json(employee);
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ message: 'Ocorreu um erro' });
    }
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));

module.exports = app;