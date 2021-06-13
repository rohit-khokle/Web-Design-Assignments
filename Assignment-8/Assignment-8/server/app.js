import express from 'express';
import  path from 'path';
import cookieParser from 'cookie-parser';
import   logger from 'morgan';
import mongoose from 'mongoose';
import routes from './routes';
import model from './models';
import cors from 'cors';

// Run the server constructor
const app = express();

// Connection to Mongo
mongoose.connect('mongodb://localhost:27017/toDoDB', 
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    });


app.use(cors());


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

routes(app);

export default app;
