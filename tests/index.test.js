const request = require('supertest');
// const router = require('../backend-app/routes/books.routes.js');
const app = require('../backend-app/index.js');
// Importa los controladores y el pool de base de datos si son necesarios
// const {
//   getAllAuthors,
//   getAuthor,
//   createAuthor,
//   deleteAuthor,
//   updateAuthor,
// } = require('../backend-app/controllers/books.controller.js');

describe('books.router', () => {
  // Prueba para GET /authors
  describe('GET /books', () => {
    test('debe retornar todos los libros', async () => {
      // Realiza una solicitud HTTP GET a la ruta '/authors' utilizando supertest
      const response = await request('localhost:7000').get('/books');
      // console.log(response);
      console.log('El status de respuesta es:', response.status);
      expect(response.status).toBe(200);
      // Verifica que la respuesta tenga el código de estado adecuado y el cuerpo esperado
      //expect(response.status).toBe(200);
      //expect(response.body).toEqual(/* cuerpo esperado */);
    }, 10000);
  });
});
