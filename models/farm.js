import mongoose from 'mongoose';
import Farmer from './farmer.js';

// Create a new schema for Farm
const farmSchema = new mongoose.Schema({
  farmId: {
    type: Number,
    required: true,
    unique: true,
    auto: true, // Automatically increment ID
  },
  farmName: {
    type: String,
    required: true,
    unique: true,
    trim: true, // Trims whitespace
  },
  location: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
    enum: ['less than 2.5 acres', '2.5-7.5 acres', '7.5-12 acres', 'More than 20 acres'],
  },
  supplyFrequency: {
    type: String,
    required: true,
  },
  distributionChannel: {
    type: String,
    enum: ['local market', 'wholesalers', 'Direct sales'],
  },
  mainChallenges: {
    type: String,
  },
  additionalOfferings: {
    type: String,
    required: true,
  },
  farmerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Farmer', // Reference to Farmer model
    required: true,
  },
}, { timestamps: true }); // Add timestamps

// Export the Farm model
export default mongoose.model('Farm', farmSchema);