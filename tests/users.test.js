const request = require('supertest');

describe('users.router', () => {
  // Prueba para GET /books
  describe('GET /users', () => {
    test('debe retornar todos los usuarios', async () => {
      const response = await request('localhost:7000').get('/users');
      //console.log('El status de respuesta es:', response.status);
      expect(response.status).toBe(200);
    });
  });
});