import supertest from 'supertest';
import app from '../src/app.js';
import { describe,test,expect} from '@jest/globals';
import { response } from 'express';


const request = supertest(app);


describe("POST /login", ()=>{
  describe('username and password are not provided', () => {
    test("should respond with status 401", async()=>{
      const response = await request.post("/login").send({
        username: null,
        password: null,
      })
      expect(response.status).toBe(401);
    })
  })
})

