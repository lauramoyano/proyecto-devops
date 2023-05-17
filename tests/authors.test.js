const request = require('supertest');

describe('authors.router', () => {
  // Prueba para GET /books
  describe('GET /authors', () => {
    test('debe retornar todos los autores', async () => {
      const response = await request('localhost:7000').get('/authors');
      //console.log('El status de respuesta es:', response.status);
      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
    });
  });

  describe('GET /authors/:id', () => {
    test('debe retornar un libro específico', async () => {
      
      const response1 = await request('localhost:7000').get('/authors/1');
      expect(response1.status).toBe(200);

      const response2 = await request('localhost:7000').get('/authors/3000');
      expect(response2.status).toBe(404);
      expect(response2.body).toHaveProperty('message', 'Author no found --get');
    });
  });

});