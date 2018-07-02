const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('dotenv').config();

const mongoose = require ('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);

const connection = mongoose.connection;
connection.on('connected', () => {
  console.log('Mongoose Connected Successfully');
});
connection.on('error', (err) => {
  console.log('Mongoose default connection error: ' + err);
});

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const havesRouter = require('./routes/haves');
const wantsRouter = require('./routes/wants');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(__dirname + '/client/build/'));

app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/users/:userId/haves', havesRouter);
app.use('/api/users/:userId/wants', wantsRouter);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client/build/index.html')
})

module.exports = app;
