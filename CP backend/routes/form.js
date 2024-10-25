const express = require('express');
const { getForms, createForm, updateForm, deleteForm } = require('../controllers/formController');
const router = express.Router();

router.get('/', getForms);
router.post('/', createForm);
router.put('/:id', updateForm);
router.delete('/:id', deleteForm);

module.exports = router;
