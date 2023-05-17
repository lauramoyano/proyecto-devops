const request = require('supertest');

describe('editorial.router', () => {
  // Prueba para GET /books
  describe('GET /editorial', () => {
    test('debe retornar todas las editoriales', async () => {
      const response = await request('localhost:7000').get('/editorials');
      //console.log('El status de respuesta es:', response.status);
      expect(response.status).toBe(200);
    });
  });
});