const pool = require('../config/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class User {
  static async register(username, password) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const [result] = await pool.query(
      'INSERT INTO users_new (username, password) VALUES (?, ?)',
      [username, hashedPassword]
    );
    return result.insertId;
  }

  static async findByUsername(username) {
    const [rows] = await pool.query('SELECT * FROM users_new WHERE username = ?', [username]);
    return rows[0];
  }

  static generateToken(user) {
    return jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });
  }

  static async comparePassword(inputPassword, hashedPassword) {
    return await bcrypt.compare(inputPassword, hashedPassword);
  }

  static async updateProfile(userId, username, password) {
    const hashedPassword = await bcrypt.hash(password, 10);
    await pool.query(
      'UPDATE users_new SET username = ?, password = ? WHERE id = ?',
      [username, hashedPassword, userId]
    );
  }
}

module.exports = User;
