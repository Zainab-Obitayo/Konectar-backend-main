import mongoose from 'mongoose';
import Farm from './farm.js';

const produceSchema = new mongoose.Schema({
  produceId: {
    type: Number,
    required: true,
    unique: true,
    auto: true, // Automatically increment ID
  },
  typeOfProduce: {
    type: String,
    required: true,
  },
  farmId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Farm', // Reference the Farm model
    required: true,
  },
}, { timestamps: true }); // Adds createdAt and updatedAt fields

export default mongoose.model('Produce', produceSchema);