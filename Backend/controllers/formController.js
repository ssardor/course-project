const pool = require('../config/db');

const getForms = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM forms');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch forms' });
  }
};

const createForm = async (req, res) => {
  const { title, userId } = req.body;
  try {
    const [result] = await pool.query('INSERT INTO forms (title, userId) VALUES (?, ?)', [title, userId]);
    res.status(201).json({ id: result.insertId });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create form' });
  }
};

const updateForm = async (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  try {
    await pool.query('UPDATE forms SET title = ? WHERE id = ?', [title, id]);
    res.status(200).json({ message: 'Form updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update form' });
  }
};

const deleteForm = async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM forms WHERE id = ?', [id]);
    res.status(200).json({ message: 'Form deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete form' });
  }
};

module.exports = { getForms, createForm, updateForm, deleteForm };
