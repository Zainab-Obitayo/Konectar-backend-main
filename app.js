import express from "express";
import cors from 'cors';
import { errorHandler } from './middlewares/errorHandlers.js'; // error handler
import userRouter from './routes/userRoute.js'; // Import routes

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ credentials: true }));

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to Konectar' });
});

app.use('/', userRouter);

// error handler
app.use(errorHandler);

export default app;