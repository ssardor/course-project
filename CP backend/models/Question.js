const pool = require('../config/db');

class Question {
  static async reorder(questions) {
    for (let question of questions) {
      await pool.query('UPDATE questions SET position = ? WHERE id = ?', [question.position, question.id]);
    }
  }

  static async add(question) {
    const [result] = await pool.query('INSERT INTO questions (content, templateId) VALUES (?, ?)', [question.content, question.templateId]);
    return result.insertId;
  }
}

module.exports = Question;
