import { ErrorResponse } from "../utils/errorResponse.js";

export const errorHandler = (err, req, res, next) => {
  let error = { ...err };

  // Default error message and status code
  error.message = err.message || 'Server Error';
  error.statusCode = err.statusCode || 500;

  // Duplicate key error (MongoDB duplicate key)
  if (err.code === 11000) {
    const message = "Duplicate key value entered";
    error = new ErrorResponse(message, 400);
  }

  // Validation error (Mongoose validation error)
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map(val => val.message).join(', ');
    error = new ErrorResponse(message, 400);
  }

  // Cast error (Invalid ObjectId)
  if (err.name === 'CastError') {
    const message = `Invalid ${err.path}: ${err.value}`;
    error = new ErrorResponse(message, 400);
  }

  // General MongoDB error
  if (err.code) {
    const message = `Database error occurred: ${err.message}`;
    error = new ErrorResponse(message, 500);
  }

  // Send the response
  res.status(error.statusCode).json({
    success: false,
    error: error.message,
    details: error.details
  });
};
