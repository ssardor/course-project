const pool = require('../config/db');

class Like {
  static async likeTemplate(userId, templateId) {
    await pool.query('INSERT INTO likes (userId, templateId) VALUES (?, ?)', [userId, templateId]);
  }

  static async unlikeTemplate(userId, templateId) {
    await pool.query('DELETE FROM likes WHERE userId = ? AND templateId = ?', [userId, templateId]);
  }

  static async getLikesByTemplateId(templateId) {
    const [rows] = await pool.query('SELECT * FROM likes WHERE templateId = ?', [templateId]);
    return rows.length;
  }


}

module.exports = Like;
