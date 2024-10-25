const User = require('../models/User');

const updateProfile = async (req, res) => {
  const { username, password } = req.body;
  const userId = req.user.id; // Предполагается, что ID пользователя извлекается из токена
  try {
    await User.updateProfile(userId, username, password);
    res.status(200).json({ message: 'Profile updated successfully' });
  } catch (error) {
    console.error('Profile update error:', error);
    res.status(500).json({ error: 'Error updating profile' });
  }
};

module.exports = { updateProfile };