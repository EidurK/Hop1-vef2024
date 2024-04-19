import supertest from 'supertest';
import app from '../src/app.js';
import { describe, test, expect } from '@jest/globals';

const request = supertest(app);

describe('POST /photos', () => {});
describe('GET /photos', () => {
  describe('public id is not provided', () => {
    test('should return satus 400', async () => {
      const response = await request.get('/photos').send({
        public_id: null,
      });
      expect(response.status).toBe(400);
    });
  });
});
