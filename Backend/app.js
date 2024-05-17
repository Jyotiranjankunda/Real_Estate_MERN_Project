import express from 'express';
import dotenv from 'dotenv';
import postRoute from './routes/post.route.js';
import authRoute from './routes/auth.route.js';

dotenv.config();
const app = express();

app.use(express.json());  // This will allow our app to send json data

// console-ninja node --watch app.js

app.use('/api/post', postRoute);
app.use('/api/auth', authRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server is running on port 3000.");
});