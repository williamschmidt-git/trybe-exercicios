const express = require('express');
const { Book } = require('../models');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const books = Book.findAll();

        res.status(200).json(books);
    } catch (error) {
        next(error)
        return res.status(500).end();
    }
});

router.get('/search/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const books = Book.findByPk(id)

        if(!books) return res.status(404).json({message: 'usuario nao encontrado'})

        return res.status(200).json(books);
    } catch (error) {
        next(error)
        return res.status(500).end();
    }
});

module.exports = router;