const express = require('express');
const { Book } = require('../models');
const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const books = await Book.findAll();

        return res.status(200).json(books);
    } catch (error) {
        next(error)
        res.status(500).json({ message: 'Algo deu errado'})
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;

        const book = await Book.findByPk(id);

        return res.status(200).json(book);
    } catch (error) {
        next(error)
        res.status(500).json({ message: 'Algo deu errado'})
    }
})

router.post('/', async (req, res, next) => {
    try {
        const { title, author, pageQuantity } = req.body

        const created = await Book.create({ title, author, pageQuantity });

        return res.status(200).json(created);
    } catch (error) {
        next(error)
        res.status(500).json({ message: 'Algo deu errado'})
    };
});

router.put('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const {
            title, 
            author,
            pageQuantity
        } = req.body

        const updated = await Book.update(
            {
                title,
                author,
                pageQuantity}, 
            {
                where: { id },
            }
            );

        return res.status(200).json({
            title, 
            author,
            pageQuantity
        });
    } catch (error) {
        next(error)
        res.status(500).json({ message: 'Algo deu errado'})
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const bookToDelete = await Book.findByPk(id);
        await bookToDelete.destroy();

        res.status(200).json(bookToDelete);
    } catch (error) {
        next(error)
        res.status(500).json({ message: 'Algo deu errado'})
    }
})

router.get('/author/:name', async (req, res, next) => {
    try {
        const { name } = req.params;
        const books = await Book.findAll({where: { author: name } });

        res.status(200).json(books);
    } catch (error) {
        console.log(e.message);
        next(error);
        res.status(500).json({ message: 'Algo deu errado' });
    }
})

module.exports = router;