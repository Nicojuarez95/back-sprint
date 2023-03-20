import app from '../app.js'
import chai from 'chai'
import request from 'supertest'
const { expect, assert } = chai;
 //cambiar el token cuando expire
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MTM0NzhlZDU4YWJhNjBiMmQwNjdkMiIsImlhdCI6MTY3OTI3NzUxMiwiZXhwIjoxNjc5MzYzOTEyfQ.eSyVvGSeVlQZPzRG-u6JCmOdqKh0OeX44HjMjWze1lE";
describe('POST /chapters', async () => {

  it("POST /chapters verificar que pages es un array de strings", async () => {
    const date = new Date();

    const chapters = {
      manga_id: "640baf498015c18cd3bd218d",
      title: `chapter_${date}`,
      pages: ["https://i.postimg.cc/q76GttJr/alice-in-borderland-001-01.jpg"],
    };
    const response = await request(app)
      .post("/chapters")
      .send(chapters)
      .auth(token, { type: "bearer" });

    assert.equal(response.status, 201);
    expect(chapters.pages).to.be.a('array')
    chapters.pages.forEach(page => assert.isString(page)
    );
    
  });
  it('GET chapters/:id verificar que la respuesta tiene alguna propiedad un array de url (pages)', async () => {
    const response = await request(app)
      .get('/chapters/640baf488015c18cd3bd2174')
      .set('Accept', "application/json")
      .auth(token, { type: "bearer" });
    expect(response.body.chapter).to.have.property("pages"); // Verificar que la respuesta tenga una propiedad "pages"
    expect(response.body.chapter.pages).to.be.an("array"); // Verificar que la propiedad "pages" sea un array
    expect(response.body.chapter.pages).to.satisfy((pages) => {
      // Verificar que cada elemento del array sea una URL
      return pages.every((page) => {
        return typeof page === "string" && /^https?:\/\//.test(page);
      });
    });
  })
  
  it("POST /chapters verificar que la respuesta devuelve alguna propiedad con el capitulo que ha sido creado", async () => {
    const date = new Date();

    const chapters = {
      manga_id: "640baf498015c18cd3bd218d",
      title: `chapter_${date}`,
      pages: [
        "https://i.postimg.cc/q76GttJr/alice-in-borderland-001-01.jpg",
      ],
    };

    const response = await request(app)
      .post("/chapters")
      .send(chapters)
      .auth(token, { type: "bearer" });
      console.log(response.chapters.title)
    assert.equal(response.status, 201);
    expect(response.body).to.have.property("title");
    assert.equal(response.body.title, chapters.title);
    

  });
  // it("verifica que se pase el token por headers", async () => {

  //   const response = await request(app)
  //     .get("/chapters")
  //     .set("Authorization", `Bearer ${token}`);

  //   expect(response.status).to.equal(200);
  //   expect(response.body.chapter).to.have.property("chapter");
  //   // Agregar cualquier otra propiedad que se espere que la respuesta contenga
  // });

})