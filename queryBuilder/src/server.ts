import express, { Request, Response } from 'express';
import { knex } from './database/knex';
const app = express();
app.use(express.json());

app.post('/courses', async (request: Request, response: Response) => {
  const { name, description } = request.body;

  await knex('courses').insert({ name, description });

  response.status(201).json();
});

app.listen(3333, () => console.log(`Server is running on port 3333`));
