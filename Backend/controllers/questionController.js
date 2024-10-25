// controllers/questionController.js
const Question = require('../models/Question');

exports.reorderQuestions = async (req, res) => {
  try {
    const { questions } = req.body;
    await Question.reorder(questions);
    res.status(200).json({ message: 'Questions reordered successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Reordering failed' });
  }
};

exports.addQuestion = async (req, res) => {
  const { content, templateId } = req.body;
  try {
    const questionId = await Question.add({ content, templateId });
    res.status(201).json({ id: questionId });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add question' });
  }
};
