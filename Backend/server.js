const express = require('express');
const cors = require('cors');
const authRoutes = require('./controllers/authController'); // Импортируйте другие контроллеры по мере необходимости
require('dotenv').config();

const morgan = require('morgan');
const winston = require('winston');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3002;

app.use(cors());
app.use(express.json()); // Для обработки JSON-данных
app.use(bodyParser.json());

// Определите маршруты
app.post('/register', authRoutes.registerUser);
app.post('/login', authRoutes.loginUser);

// Настройка winston
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'combined.log' })
  ],
});

// Использование morgan для логирования HTTP-запросов
app.use(morgan('combined', { stream: { write: message => logger.info(message.trim()) } }));

// Routes
const userRoutes = require('./routes/users');
const templateRoutes = require('./routes/templates');
const formRoutes = require('./routes/form');
const commentRoutes = require('./routes/comments');
const questionRoutes = require('./routes/questions');
const likeRoutes = require('./routes/likes');

app.use('/api/users', userRoutes);
app.use('/api/templates', templateRoutes);
app.use('/api/forms', formRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/questions', questionRoutes);
app.use('/api/likes', likeRoutes);

app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});
