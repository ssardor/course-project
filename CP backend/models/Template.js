const pool = require('../config/db');

class Template {
  static async getAll() {
    const [rows] = await pool.query('SELECT * FROM templates');
    return rows;
  }

  static async create(template) {
    const [result] = await pool.query('INSERT INTO templates (title, content, userId) VALUES (?, ?, ?)', [template.title, template.content, template.userId]);
    return result.insertId;
  }

  static async update(id, template) {
    await pool.query('UPDATE templates SET title = ?, content = ? WHERE id = ?', [template.title, template.content, id]);
  }

  static async delete(id) {
    await pool.query('DELETE FROM templates WHERE id = ?', [id]);
  }
}

module.exports = Template;
