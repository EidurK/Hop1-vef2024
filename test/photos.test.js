import supertest from 'supertest';
import app from '../src/app.js';
import { describe,test,expect} from '@jest/globals';

const request = supertest(app);

describe('POST /photos', () => {


})
describe('GET /photos', () => {
  describe('public id is not provided', () => {
    test("should return satus 400", async () => {
      const response = await request.get("/photos").send({
        public_id: null,
      })
      expect(response.status).toBe(400);
    })
  })
})

describe('POST /photos', () => {
  test('should return status 400 when photo_url is not provided', async()=>{
    const response = await request.post("/photos").send({
      photo_url: null
    });
    expect(response.status).toBe(400);
    expect(response.text).toBe('No photo url');
  })

  test('should return status 400 when photo_url is not provided', async()=>{
    const response = await request.post("/photos").send({
      photo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Wikipedia-logo-v2.svg/150px-Wikipedia-logo-v2.svg.png'
    });
    expect(response.status).toBe(200);
  })
})
