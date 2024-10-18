import mongoose from 'mongoose';
import config from './env.js'; // Assume env.js loads environment variables

const mongoURI = process.env.MONGO_URI || config.MONGO_URI; // Fallback to config if env not set

// Connect to MongoDB
async function connectDB() {
  try {
    await mongoose.connect(mongoURI);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); // Exit process with failure
  }
}

// Export connection function
export { connectDB };
