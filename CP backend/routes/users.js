const express = require('express');
const router = express.Router();

// Пример маршрута
router.get('/', (req, res) => {
  res.send('User route');
});

module.exports = router;