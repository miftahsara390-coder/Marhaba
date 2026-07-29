const app = require('./app');
const sequelize = require('./config/db');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log('📦 Database connection established successfully.');

    await sequelize.sync({ alter: true });
    console.log('🔄 Database synchronized.');

    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('❌ Unable to connect to the database:', error);
  }
};

startServer();