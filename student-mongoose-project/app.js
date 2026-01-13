const express = require('express');
const connectDB = require('./config/db');

const app = express();

// middleware
app.use(express.json());

// connect database
connectDB();

// routes
app.use('/students', require('./routes/studentRoutes'));

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
