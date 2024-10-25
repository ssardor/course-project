const pool = require('../config/db');

class Comment {
  static async getByTemplateId(templateId) {
    const [rows] = await pool.query('SELECT * FROM comments WHERE templateId = ?', [templateId]);
    return rows;
  }

  static async add(comment) {
    const [result] = await pool.query('INSERT INTO comments (content, templateId, userId) VALUES (?, ?, ?)', [comment.content, comment.templateId, comment.userId]);
    return result.insertId;
  }

  static async delete(id) {
    await pool.query('DELETE FROM comments WHERE id = ?', [id]);
  }
}

module.exports = Comment;
