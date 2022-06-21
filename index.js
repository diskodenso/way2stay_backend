import 'dotenv/config';
import './src/db/mongooseClient.js';
import express from 'express';
import cors from 'cors';
import usersRouter from './src/routes/usersRouter.js';

const app = express();

const port = process.env.PORT || 5000;

app.use(express());
app.use(cors());
app.use(express.json());

// app.use('/api/')
app.use('/api/users', usersRouter);

app.listen(port, () => {console.log(`The server is listening on port ${port}`)});