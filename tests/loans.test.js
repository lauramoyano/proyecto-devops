const request = require('supertest');

describe('loans.router', () => {
  // Prueba para GET /books
  describe('GET /loans', () => {
    test('debe retornar todos los prestamos', async () => {
      const response = await request('localhost:7000').get('/loans');
      //console.log('El status de respuesta es:', response.status);
      expect(response.status).toBe(200);
    });
  });
});