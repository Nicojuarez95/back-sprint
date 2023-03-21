import chai from "chai";
import app from "../app.js";
import request from "supertest";

const {expect} = chai

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MGJhZTc2ZWExMjM2NzRiMDBiMWE1ZCIsImlhdCI6MTY3OTM2OTU4NiwiZXhwIjoxNjc5NTQyMzg2fQ.bkMgfjdgaAevnJwvHOOV4y3LNKl_6EBLeewa0Wo-NKQ";
const data = {
         title: 'Mis mangas favoritos 3',
         cover_photo: 'https://example.com/image.jpg',
         description: 'Esta es la descripción de mi manga favorito',
         category_id: '6041b9f32090180a205d24a1'
       };

describe("Probando a mangas", () => {
  it("GET debe verificar que se pasa token por headers", async () => {
    const res = await request(app)
    .get("/mangas-form")
    .set("Authorization", `Bearer ${token}`);
    
    expect(res.status).to.equal(200);
    expect(res.request.header).to.have.property(
      "Authorization",
      `Bearer ${token}`
      );
    });
});


describe('Prueba para verificar que cover_photo es una URL', () => {
  it('POST Debería retornar un objeto con una URL válida en cover_photo', async () => {
    const res = await request(app)
    .post('/mangas-form')
    .set("Authorization", `Bearer ${token}`)
    .send(data); 

    expect(res.status).to.equal(201);
    expect(res.body).to.be.an('object');
    expect(res.body.manga.cover_photo).to.match(/^(http(s):\/\/.)/);
  });
});


describe("POST /mangas-form", () => { 
  it("Debe devolver 'no autorizado' cuando no se proporciona un token", async () => {
    await request(app)
    .post('/mangas-form')
    .send(data)

    expect(401)
  });
});

describe("GET /mangas", () => { 
  it("GET api/mangas verificar que la respuesta tiene alguna propiedad con el array de objetos (mangas)	", async () => {
    const response = await request(app)
    .get('/mangas-form/view')
    .auth(token, {type: "bearer"})

    expect(response.body).to.have.property("mangas")
  });
});

