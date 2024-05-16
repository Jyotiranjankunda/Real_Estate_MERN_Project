import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

// console-ninja node --watch app.js

app.use('/api/test', (req, res) => {
  res.send("Hello");
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server is running on port 3000.");
});