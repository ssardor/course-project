// controllers/likeController.js
const Like = require('../models/Like');

exports.likeTemplate = async (req, res) => {
  const { templateId } = req.params;
  try {
    await Like.likeTemplate(req.user.id, templateId);
    res.status(200).json({ message: 'Template liked' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to like template' });
  }
};

exports.unlikeTemplate = async (req, res) => {
  const { templateId } = req.params;
  try {
    await Like.unlikeTemplate(req.user.id, templateId);
    res.status(200).json({ message: 'Template unliked' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to unlike template' });
  }
};
