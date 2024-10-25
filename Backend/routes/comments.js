const express = require('express');
const { getComments, addComment, deleteComment } = require('../controllers/commentController');
const router = express.Router();

router.get('/:templateId', getComments);
router.post('/', addComment);
router.delete('/:commentId', deleteComment);

module.exports = router;

const { getForms, createForm, updateForm, deleteForm } = require('../controllers/formController');
const formRouter = express.Router();

formRouter.get('/', getForms);
formRouter.post('/', createForm);
formRouter.put('/:id', updateForm);
router.delete('/:id', deleteForm);

module.exports = router;
