import express, { Request, Response } from 'express';
import { knex } from './database/knex';
const app = express();
app.use(express.json());

app.post('/courses', async (request: Request, response: Response) => {
  const { name, description, duration_in_hours, certificate } = request.body;

  const course = await knex('courses')
    .insert({ name, description, duration_in_hours, certificate })
    .returning('*');

  response.status(201).json(course);
});

app.get('/courses', async (request: Request, response: Response) => {
  const courses = await knex('courses').select().orderBy('id', 'desc');

  response.json(courses);
});

app.put('/courses/:id', async (request: Request, response: Response) => {
  const { id } = request.params;
  const { name } = request.body;

  const course = await knex('courses')
    .where({ id })
    .update({ name })
    .returning('*');

  return response.json(course);
});

app.listen(3333, () => console.log(`Server is running on port 3333`));
