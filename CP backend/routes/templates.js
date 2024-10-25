const express = require('express');
const { getTemplates, createTemplate, updateTemplate, deleteTemplate, searchTemplates } = require('../controllers/templateController');
const { updateProfile } = require('../models/User');
const router = express.Router();

router.get('/', getTemplates);
router.post('/', createTemplate);
router.put('/:id', updateTemplate);
router.delete('/:id', deleteTemplate);
router.put('/profile', updateProfile);
router.get('/search', searchTemplates);

module.exports = router;
