const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./config/swagger');

const authRoutes = require('./routes/auth');
const templateRoutes = require('./routes/templates');
const commentRoutes = require('./routes/comments');
const formRoutes = require('./routes/form');
const likeRoutes = require('./routes/likes');
const questionRoutes = require('./routes/questions');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/templates', templateRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/forms', formRoutes); // Убедитесь, что этот маршрут подключен
app.use('/api/likes', likeRoutes);
app.use('/api/questions', questionRoutes);

// Add a route for the root URL
app.get('/', (req, res) => {
  res.send('Welcome to the homepage!');
});

const PORT = process.env.PORT || 3306;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
