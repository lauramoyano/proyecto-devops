const request = require('supertest');
const API_BASE_URL = process.env.API_BASE_URL || 'localhost:7000';

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

      const response2 = await request('localhost:7000').get('/authors/-1');
      expect(response2.status).toBe(404);
      expect(response2.body).toHaveProperty('message', 'Author no found --get');
    });
  });

});


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

      //prueba obtener un libro de un id
      const response1 = await request(API_BASE_URL ).get('/books/4');
      expect(response1.status).toBe(200);
      expect(response1.headers['content-type']).toMatch(/application\/json/);
      expect(response1.body).toBeInstanceOf(Object);
      expect(response1.body).toHaveProperty(...requiredProperties);

     //prueba obtener un mensaje de libro no encontrado al pasar un libro inexistente
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
        published_date: 2022,
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
      expect(response.body).toMatchObject(book);

    });
  });


  describe('DELETE /authors/:id', () => {
    test('debe eliminar un libro específico', async () => {
     
    //prueba eliminar el ultimo libro creado en la prueba
     const response1 = await request(API_BASE_URL ).delete(`/books/${id_last_book}`);
     expect(response1.status).toBe(204);

     //prueba eliminar un libro inexistente
     const response2 = await request(API_BASE_URL ).delete(`/books/-1`);
     expect(response2.status).toBe(404);

    });
  });


});


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