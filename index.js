import 'dotenv/config';
import './src/db/mongooseClient.js';
import express from 'express';
import cors from 'cors';
import usersRouter from './src/routes/usersRouter.js';
import extrasRouter from './src/routes/extrasRouter.js';
import commentsRouter from './src/routes/commentsRouter.js'

const app = express();

const port = process.env.PORT || 5000;

const corsOptions = {
  origin: process.env.REACT_APP_URI, // nur Zugriff von dieser Domain erlauben
  exposedHeaders: "Authorization", //dem Frontend Zugriff auf die Header-Property "Authorization" geben
};
app.use(express());
app.use(cors(corsOptions));
app.use(express.json());

// app.use('/api/')
app.use('/api/users', usersRouter);
app.use('/api/extras', extrasRouter);
app.use('/api/comments', commentsRouter);

app.listen(port, () => {console.log(`The server is listening on port ${port}`)});