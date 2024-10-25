const express = require('express');
const { reorderQuestions, addQuestion } = require('../controllers/questionController');
const router = express.Router();

router.put('/reorder', reorderQuestions);
router.post('/', addQuestion);

module.exports = router;
