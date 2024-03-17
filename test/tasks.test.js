import supertest from 'supertest';
import app from '../src/app.js';
import { describe,test,expect, jest} from '@jest/globals';

const request = supertest(app);
let token;

beforeAll(async () => {
  const response = await request.post('/login').send({
    username: 'admin',
    password: '123',
  });
  token = response.body.token;
});

describe('GET /task', () => {
  test('should return status 200 when token is valid', async () => {
    const response = await request.get('/tasks').set('authorization', `Bearer ${token}`);
    expect(response.status).toBe(200);
    expect(response.body.length).toBe(3);
  });
});

describe('POST /tasks', () => {
  test('should return status 400 when title is not sent', async () => {
    const response = await request.post('/tasks').set('authorization', `Bearer ${token}`);
    expect(response.status).toBe(400);
  });

  test('should return status 400 when title is not sent', async () => {
    const response = await request
      .post('/tasks')
      .set('authorization', `Bearer ${token}`)
      .send({
        title: 'testTask',
        description: 'describe testTask'
      });
    expect(response.status).toBe(201);
  });

  test('should update databse with new toekn', async () => {
    const response = await request.get('/tasks').set('authorization', `Bearer ${token}`);
    expect(response.status).toBe(200);
    expect(response.body.length).toBe(4);
  });
})

describe('DELETE /tasks', () => {
  test('should return status 400 when no task id sent', async () => {
    const response = await request.delete('/tasks').set('authorization', `Bearer ${token}`);
    expect(response.status).toBe(400);
  });

  test('should return status 200 when no task id sent', async () => {
    const response = await request
      .delete('/tasks')
      .set('authorization', `Bearer ${token}`)
      .send({
        id: 5
      });
    expect(response.status).toBe(200);
  });

  test('should update databse when token is removed', async () => {
    const response = await request.get('/tasks').set('authorization', `Bearer ${token}`);
    expect(response.status).toBe(200);
    expect(response.body.length).toBe(3);
  });
})

describe('UPDATE /tasks', () => {
  test('should return status 400 when no id is sent',async () =>{
    const response = await request
      .patch('/tasks')
      .set('authorization', `Bearer ${token}`);
    expect(response.status).toBe(400);
  })

  test('should return status 201',async () =>{
    const response = await request
      .patch('/tasks')
      .set('authorization', `Bearer ${token}`)
      .send({
        id: 6,
        title: 'Updated title',
        describtion: null,
      });
    expect(response.status).toBe(201);
  })


})

