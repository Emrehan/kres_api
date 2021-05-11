const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const postsRoute = require('./routes/posts');
const menuRoute = require('./routes/menus');
app.use('/posts', postsRoute);
app.use('/menus', menuRoute);

mongoose.connect(process.env.DB_URI, 
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
    console.log("Connected to db " + err);
}, )

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
  });