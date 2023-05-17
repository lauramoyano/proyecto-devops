const request = require('supertest');

describe('books.router', () => {
  // Prueba para GET /books
  describe('GET /books', () => {
    test('debe retornar todos los libros', async () => {
      const response = await request('localhost:7000').get('/books');
      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);

    });
  });


  describe('GET /books/:id', () => {
    test('debe retornar un libro específico', async () => {
      
      const response1 = await request('localhost:7000').get('/books/4');
      expect(response1.status).toBe(200);

      const response2 = await request('localhost:7000').get('/books/3000');
      expect(response2.status).toBe(404);
      expect(response2.body).toHaveProperty('message', 'Book no found--get');
    });
  });

});