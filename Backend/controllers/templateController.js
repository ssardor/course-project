const pool = require('../config/db');
const Template = require('../models/Template');

const getTemplates = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM templates');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch templates' });
  }
};

const createTemplate = async (req, res) => {
  const { title, content, userId } = req.body;
  try {
    const [result] = await pool.query('INSERT INTO templates (title, content, userId) VALUES (?, ?, ?)', [title, content, userId]);
    res.status(201).json({ id: result.insertId });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create template' });
  }
};

const updateTemplate = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  try {
    await pool.query('UPDATE templates SET title = ?, content = ? WHERE id = ?', [title, content, id]);
    res.status(200).json({ message: 'Template updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update template' });
  }
};

const deleteTemplate = async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM templates WHERE id = ?', [id]);
    res.status(200).json({ message: 'Template deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete template' });
  }
};

const searchTemplates = async (req, res) => {
  const { query, filter } = req.query;
  try {
    const templates = await Template.search(query, filter);
    res.json(templates);
  } catch (error) {
    console.error('Search error:', error);
    res.status(500).json({ error: 'Error searching templates' });
  }
};


module.exports = { getTemplates, createTemplate, updateTemplate, deleteTemplate, searchTemplates };
