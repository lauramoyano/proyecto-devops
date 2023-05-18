const supertest = require('supertest');
const { app, server } = require('../backend-app/index');
const api = supertest(app);
// Antes de todas las pruebas

// Pruebas de GET /authors...
test('debe retornar todos los autores', async () => {
  await api.get('/authors').expect(200);
});

test('debe retornar un libro específico', async () => {
  await api.get('/authors/1').expect(200);

  // Aca va el resto de tests
});
afterAll(() => {
  server.close();
});
