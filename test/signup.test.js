import supertest from 'supertest';
import app from '../src/app.js';
import { describe,test,expect} from '@jest/globals';

const request = supertest(app);
describe("POST /signup", ()=>{
  describe("username and password are not provided", () => {
    test("should repond with status 401", async()=>{
      const response = await request.post("/signup").send({
        username: null,
        password: null,
      })
      expect(response.status).toBe(401);
    })
  })

  describe("username and password are provided", () => {
    test("should repond with status 401", async()=>{
      const response = await request.post("/signup").send({
        username: 'Bubbi',
        password: 'Korkur',
      })
      expect(response.status).toBe(200);
    })
  })

  describe("password already exists", () => {
    test("should repond with status 200", async()=>{
      const response = await request.post("/signup").send({
        username: 'Gunnar',
        password: 'Korkur',
      })
      expect(response.status).toBe(200);
    })
  })
})

