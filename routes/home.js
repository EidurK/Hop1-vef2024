import express from 'express';
import {end, query} from '../src/lib/db.js';
var router = express.Router();

router.get('/', (req, res) => {
    const userTasks = [
        { id: 1, description: "Finish reading a book" },
        { id: 2, description: "Write a new blog post" }
    ];
    res.render('home', { tasks: userTasks });
});

export default router;
