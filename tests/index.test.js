const { Router } = require('express');
const request = require('supertest');
const router = require('../backend-app/routes/books.routes.js');

// Importa los controladores y el pool de base de datos si son necesarios
const {
  getAllAuthors,
  getAuthor,
  createAuthor,
  deleteAuthor,
  updateAuthor
} = require('../backend-app/controllers/books.controller.js');

describe( 'books.router', () => {
   
    // Prueba para GET /authors
    describe('GET /books', () => {
      test('debe retornar todos los libros',  () => {
        // Realiza una solicitud HTTP GET a la ruta '/authors' utilizando supertest
        const response = request(router).get('/books');
        console.log(response)
        // Verifica que la respuesta tenga el código de estado adecuado y el cuerpo esperado
        //expect(response.status).toBe(200);
        //expect(response.body).toEqual(/* cuerpo esperado */);
      },10000);
    });
});