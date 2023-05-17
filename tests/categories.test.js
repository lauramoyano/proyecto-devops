const request = require('supertest');

describe('categories.router', () => {
  // Prueba para GET /books
  describe('GET /categories', () => {
    test('debe retornar todos las categorias', async () => {
      const response = await request('localhost:7000').get('/categories');
      //console.log('El status de respuesta es:', response.status);
      expect(response.status).toBe(200);
    });
  });
});