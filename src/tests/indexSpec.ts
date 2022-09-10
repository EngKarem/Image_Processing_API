import supertest from 'supertest';
import app from '../index';

const request = supertest(app);
describe('Test endpoint responses', () => {
  it('gets the api endpoint', async () => {
    const response = await request.get('/api');
    expect(response.status).toBe(200);
  });

  it('gets the api/Images endpoint', async () => {
    const response = await request.get('/api/Images?width=200&height=200&filename=Image');
    expect(response.status).toBe(200);
  });
});
