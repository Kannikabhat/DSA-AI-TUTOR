

// const express = require('express');
// const db = require('../config/db');
// const router = express.Router();

// // 📌 Get all lessons
// router.get('/', (req, res) => {  // ✅ Fix: Removed '/lessons'
//     db.query('SELECT * FROM lessons', (err, results) => {
//         if (err) return res.status(500).json({ error: err.message });
//         res.json(results);
//     });
// });

// // 📌 Get a specific lesson by ID
// router.get('/:id', (req, res) => {  // ✅ Fix: Removed '/lessons'
//     const { id } = req.params;
//     db.query('SELECT * FROM lessons WHERE lesson_id = ?', [id], (err, results) => {
//         if (err) return res.status(500).json({ error: err.message });
//         if (results.length === 0) return res.status(404).json({ message: 'Lesson not found' });
//         res.json(results[0]);
//     });
// });

// // 📌 Mark a lesson as completed (track progress)
// router.post('/progress', (req, res) => {
//     const { user_id, lesson_id } = req.body;
//     db.query('INSERT INTO user_progress (user_id, lesson_id) VALUES (?, ?)', 
//         [user_id, lesson_id], 
//         (err, result) => {
//             if (err) return res.status(500).json({ error: err.message });
//             res.json({ message: 'Progress saved successfully!' });
//         }
//     );
// });

// module.exports = router;


const express = require('express');
const db = require('../config/db');
const router = express.Router();

// 📌 Get all lessons
router.get('/', async (req, res) => {
    try {
        const [lessons] = await db.query('SELECT * FROM lessons');
        res.json(lessons);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 📌 Get a specific lesson by ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const [lesson] = await db.query('SELECT * FROM lessons WHERE lesson_id = ?', [id]);
        if (lesson.length === 0) return res.status(404).json({ message: 'Lesson not found' });
        res.json(lesson[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 📌 Get user's progress
router.get('/progress/:user_id', async (req, res) => {
    const { user_id } = req.params;
    try {
        const [progress] = await db.query('SELECT * FROM user_progress WHERE user_id = ?', [user_id]);
        res.json(progress);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 📌 Save or update progress
router.post('/progress', async (req, res) => {
    const { user_id, lesson_id, progress_percentage } = req.body;
    try {
        // Check if progress exists
        const [existing] = await db.query('SELECT * FROM user_progress WHERE user_id = ? AND lesson_id = ?', [user_id, lesson_id]);
        
        if (existing.length > 0) {
            // Update progress
            await db.query('UPDATE user_progress SET progress_percentage = ? WHERE user_id = ? AND lesson_id = ?', 
                [progress_percentage, user_id, lesson_id]);
            return res.json({ message: 'Progress updated successfully!' });
        }

        // Insert new progress
        await db.query('INSERT INTO user_progress (user_id, lesson_id, progress_percentage) VALUES (?, ?, ?)', 
            [user_id, lesson_id, progress_percentage]);
        res.json({ message: 'Progress saved successfully!' });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
