import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import index from './routes/index.js';
import users from './routes/users.js';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
const port = 3030;

app.use(logger('dev'));
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', index);
app.use('/users', users);

app.listen(port, () => console.log('App is running'));


mongoose.connect('mongodb+srv://root:GNjTGWjCJ4NjkyvV@cluster0.i41yt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('Mongo connected');
});

export default app;
