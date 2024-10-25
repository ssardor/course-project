const pool = require('../config/db');

class Form {
  static async getAll() {
    const [rows] = await pool.query('SELECT * FROM forms');
    return rows;
  }

  static async create(form) {
    const [result] = await pool.query('INSERT INTO forms (title, userId) VALUES (?, ?)', [form.title, form.userId]);
    return result.insertId;
  }

  static async update(id, form) {
    await pool.query('UPDATE forms SET title = ? WHERE id = ?', [form.title, id]);
  }

  static async delete(id) {
    await pool.query('DELETE FROM forms WHERE id = ?', [id]);
  }
}

module.exports = Form;
