import mongoose from 'mongoose';

const farmerSchema = new mongoose.Schema({
  farmerId: {
    type: Number,
    required: true,
    unique: true,
    auto: true, // Automatically increment ID
  },
  fullName: {
    type: String,
    required: true,
    trim: true, // Trims whitespace
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function(v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); // Simple email validation
      },
      message: props => `${props.value} is not a valid email!`
    },
  },
  phoneNumber: {
    type: String,
    required: true,
    validate: {
      validator: function(v) {
        return /^\+?[1-9]\d{1,14}$/.test(v); // Validates phone number length (10-14 digits)
      },
      message: props => `${props.value} is not a valid phone number!`
    },
  },
  notifications: {
    type: Boolean,
    default: false,
  }
}, { timestamps: true }); // Adds createdAt and updatedAt fields

export default mongoose.model('Farmer', farmerSchema);
