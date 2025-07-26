const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// ✅ Add this route BEFORE app.listen()
app.get('/', (req, res) => {
  res.send('Hello from Ink & Echo server!');
});

// Your API routes (optional if added)
// app.use('/api/posts', require('./routes/postRoutes'));

// Database Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log(err));

// ✅ This should always be at the end
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
