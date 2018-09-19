const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./services/passport');

mongoose.connect(keys.mongoURL);
const app = express();

require('./routes/authRoutes')(app);

app.get('/', (req, res) => {
  res.send({hi: 'there'})
});
const PORT = process.env.PORT || 8880;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));