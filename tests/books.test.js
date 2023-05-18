const request = require('supertest');


const API_BASE_URL = process.env.API_BASE_URL || 'localhost:7000';

describe('books.router', () => {
  
  let id_last_book = 0;

  describe('GET /books', () => {
    test('debe retornar todos los libros', async () => {

      const response = await request(API_BASE_URL ).get('/books');
      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);

    });
  });


  describe('GET /books/:id', () => {
    test('debe retornar un libro específico', async () => {
      const requiredProperties = ["title", "score", "published_date", "id_category", "id_author", "id_editorial"];

      const response1 = await request(API_BASE_URL ).get('/books/4');
      expect(response1.status).toBe(200);
      expect(response1.headers['content-type']).toMatch(/application\/json/);
      expect(response1.body).toBeInstanceOf(Object);
      expect(response1.body).toHaveProperty(...requiredProperties);



      const response2 = await request('localhost:7000').get('/books/-1');
      expect(response2.status).toBe(404);
      expect(response2.body).toHaveProperty('message', 'Book no found--get');

    
    });
  });


  describe('POST /books', () => {
    test('debe crear un nuevo libro', async () => {
    
      const book = {
        title: "El nombre del viento",
        score: 9,
        published_date: 2022,
        id_category: 1,
        id_author: 2,
        id_editorial: 3
      };
      
      const response = await request(API_BASE_URL )
        .post('/books')
        .send(book);

      id_last_book = response.body.isbn;
      expect(response.status).toBe(200);
      expect(response.headers['content-type']).toMatch(/application\/json/);
      expect(response.body).toBeInstanceOf(Object);
      expect(response.body).toMatchObject(book);
    });
  });


  describe('PUT /books/:id', () => {
    test('debe actualizar un autor específico', async () => {
     
      const book = {
        title: "test prueba",
        score: 9,
        published_date: "2022",
        id_category: 1,
        id_author: 2,
        id_editorial: 3
      };
      
      const response = await request(API_BASE_URL)
        .put(`/books/${id_last_book}`)
        .send(book);

      expect(response.status).toBe(200);
      expect(response.headers['content-type']).toMatch(/application\/json/);
      expect(response.body).toBeInstanceOf(Object);

    });
  });


  describe('DELETE /authors/:id', () => {
    it('debe eliminar un libroe específico', async () => {
     
     const response1 = await request(API_BASE_URL ).delete(`/books/${id_last_book}`);
     expect(response1.status).toBe(204);

     const response2 = await request(API_BASE_URL ).delete(`/books/-1`);
     expect(response2.status).toBe(404);

    });
  });


});