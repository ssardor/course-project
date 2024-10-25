const express = require('express');
const { likeTemplate, unlikeTemplate } = require('../controllers/likeController');
const router = express.Router();

router.post('/:templateId/like', likeTemplate);
router.delete('/:templateId/unlike', unlikeTemplate);

module.exports = router;
