import app from './app.js';
import config from './config/env.js';
import { connectDB } from './config/db.js';

// Start the server after connecting to the database
async function startServer() {
  try {
    // Connect to MongoDB
    await connectDB();

    // Start the server
    const PORT = config.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

startServer();