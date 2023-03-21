import chai from "chai";
import app from "../app.js";
import request from "supertest";

const {expect} = chai

describe("Probando a mangas", () => {
  it("GET a /mangas debe verificar que se pasa token por headers", async () => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MGJhZTc2ZWExMjM2NzRiMDBiMWE1ZCIsImlhdCI6MTY3OTMxODM5MCwiZXhwIjoxNjc5NDA0NzkwfQ.9UQCadl7SgrouKx4n2hRNLCE5Esym-yxf3tgEtpcRHM";
    const res = await request(app)
    .get("/mangas-form")
    .set("Authorization", `Bearear ${token}`);
    
    expect(res.status).to.equal(200);
    expect(res.request.header).to.have.property(
      "Authorization",
      `Bearear ${token}`
      );
    });
});

describe("POST /api/mangas", () => {
  it("Debe devolver 'no autorizado' cuando no se proporciona un token", (done) => {
    request(app)
      .post("http://localhost:8000/mangas-form")
      .send({ titulo: "Manga de prueba", autor: "Autor de prueba" })
      .expect(403)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.message).to.equal("no autorizado");
        done();
      });
  });
});

describe('Prueba para verificar que cover_photo es una URL', () => {
  it('POST Debería retornar un objeto con una URL válida en cover_photo', async () => {
    const data = {
      author_id: '6041b9f32090180a205d24a0',
      title: 'Mi manga favorito',
      cover_photo: 'https://example.com/image.jpg',
      description: 'Esta es la descripción de mi manga favorito',
      category_id: '6041b9f32090180a205d24a1'
    };
    const res = await request(app)
    .post('/mangas-form')
    .send(data); 

    expect(res.status).to.equal(200);
    expect(res.body).to.be.an('object');
    expect(res.body.cover_photo).to.match(/^http(s)?:\/\/.+$/);
  });
});
