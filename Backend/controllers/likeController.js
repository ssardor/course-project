// controllers/likeController.js
const Like = require('../models/Like');

exports.likeTemplate = async (req, res) => {
  const { templateId } = req.params;
  try {
    await Like.likeTemplate( templateId);
    res.status(200).json({ message: 'Template liked' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to like template' });
  }
};

exports.unlikeTemplate = async (req, res) => {
  const { templateId } = req.params;
  try {
    await Like.unlikeTemplate( templateId);
    res.status(200).json({ message: 'Template unliked' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to unlike template' });
  }
};
exports.getLikesCount = async (req, res) => {
  const { templateId } = req.params;
  try {
    const count = await Like.getLikesByTemplateId(templateId);
    res.status(200).json({ count });
  } catch (error) {
    res.status(500).json({ error: 'Failed to get likes count' });
  }
};