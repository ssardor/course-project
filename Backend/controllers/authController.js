const User = require('../models/User');

async function testConnection() {
  try {
    const [rows, fields] = await pool.query('SELECT 1');
    console.log('Подключение к базе данных успешно');
  } catch (error) {
    console.error('Ошибка подключения к базе данных:', error);
  }
}


const registerUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const userId = await User.register(username, password);
    res.status(201).json({ id: userId, username });
  } catch (error) {
    console.error('Registration error:', error); // Добавьте логирование ошибки
    res.status(500).json({ error: 'Error registering user' });
  }
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findByUsername(username);
    if (user && await User.comparePassword(password, user.password)) {
      const token = User.generateToken(user);
      res.json({ token });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Error logging in' });
  }
};

module.exports = { registerUser, loginUser };
const pool = require('../config/db');

async function testConnection() {
  try {
    const [rows] = await pool.query('SELECT NOW()');
    console.log('Connection successful:', rows[0]);
  } catch (err) {
    console.error('Connection error:', err);
  }
}

testConnection();
