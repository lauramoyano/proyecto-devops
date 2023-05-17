const request = require('supertest');
// const app = require('../backend-app/index.js');

describe('books.router', () => {
  // Prueba para GET /books
  describe('GET /books', () => {
    test('debe retornar todos los libros', async () => {
      const response = await request('localhost:7000').get('/books');
      console.log('El status de respuesta es:', response.status);
      expect(response.status).toBe(200);
    });
  });
});
