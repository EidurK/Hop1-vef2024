import {jest, test, describe, expect} from '@jest/globals'
import { generateToken } from '../src/lib/tokens/generate.js'


describe('Generate tokens', () => {
  let req, res;

  beforeEach(() => {
    req = { body: {} };
    res = {
      status: jest.fn(() => res),
      json: jest.fn(),
    };
  });

  test('should respond with status 401 if username or password are not provided', async()=>{
    await generateToken(req, res);
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({error: 'No username or password sent'});
  });

  test('should respond with status 401 if username of password is invalid', async()=>{
    req = {body:{
      username: 'Bubbi',
      password: 'korkur',
    }};
    await generateToken(req, res);
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({error: 'Invalid username or password'});
  });
});
