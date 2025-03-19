const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Save or update lesson progress
router.post('/save', async (req, res) => {
    const { user_id, lesson_id, progress_percentage } = req.body;

    try {
        await db.promise().query(
            'INSERT INTO user_progress (user_id, lesson_id, progress_percentage) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE progress_percentage = ?',
            [user_id, lesson_id, progress_percentage, progress_percentage]
        );

        res.json({ message: 'Progress updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Database error' });
    }
});

// Fetch progress of all lessons for a user
router.get('/:user_id', async (req, res) => {
    const { user_id } = req.params;

    try {
        const [progress] = await db.promise().query(
            'SELECT lesson_id, progress_percentage FROM user_progress WHERE user_id = ?',
            [user_id]
        );

        res.json(progress);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Database error' });
    }
});

module.exports = router;
