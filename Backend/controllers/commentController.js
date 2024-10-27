// controllers/commentController.js
const Comment = require('../models/Comment');

exports.addComment = async (req, res) => {
  const { content } = req.body;
  const { templateId } = req.params;
  try {
    const commentId = await Comment.add({ content, templateId});
    res.status(201).json({ id: commentId });
  } catch (error) {
    res.status(400).json({ error: 'Adding comment failed' });
  }
};

exports.getComments = async (req, res) => {
  const { templateId } = req.params;
  try {
    const comments = await Comment.getByTemplateId(templateId);
    res.json(comments);
  } catch (error) {
    res.status(400).json({ error: 'Fetching comments failed' });
  }
};

exports.deleteComment = async (req, res) => {
  const { commentId } = req.params;
  try {
    await Comment.delete(commentId);
    res.status(200).json({ message: 'Comment deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete comment' });
  }
};
