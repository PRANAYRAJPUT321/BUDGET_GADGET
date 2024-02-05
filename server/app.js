const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();

mongoose.connect('mongodb://localhost:27017/budgetgadget', { useNewUrlParser: true, useUnifiedTopology: true });

// Serve the React app from the build folder
app.use(express.static(path.join(__dirname, '../client/build')));

// Handle any other routes by serving the index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
