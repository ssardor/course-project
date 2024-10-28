const express = require('express');
const { likeTemplate, unlikeTemplate, getLikesCount } = require('../controllers/likeController');
const router = express.Router();

router.post('/:templateId/like', likeTemplate);
router.delete('/:templateId/unlike', unlikeTemplate);
router.get('/:templateId/count', getLikesCount);

module.exports = router;