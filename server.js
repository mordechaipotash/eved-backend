const mongoose = require('mongoose');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const mongoUri = process.env.MONGODB_URI;

mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch(err => {
    console.error('Failed to connect to MongoDB', err);
  });

app.use('/api/chathistory', require('./routes/chatHistory'));

// Add error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Internal Server Error');
});
