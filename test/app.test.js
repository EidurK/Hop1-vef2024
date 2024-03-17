import supertest from 'supertest';
import app from '../src/app.js';
import { describe,test,expect} from '@jest/globals';
import { response } from 'express';


const request = supertest(app);


describe("GET /", ()=>{
  test("should respond with status 200", async()=>{
    const response = await request.get("/")
    expect(response.status).toBe(200);
  })
})

