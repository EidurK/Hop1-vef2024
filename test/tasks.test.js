import supertest from 'supertest';
import app from '../src/app.js';
import { describe,test,expect} from '@jest/globals';

const request = supertest(app);

describe('POST /tasks', () => {
  describe('createTask', () => {

  })
})

describe('GET /tasks', () => {


})
