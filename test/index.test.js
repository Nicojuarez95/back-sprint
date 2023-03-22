import app from "../app.js"
import chai from "chai"
import { it } from "mocha"
import request from "supertest"
import mongoose from "mongoose"

const assert = chai.assert;
const expect = chai.expect;

describe("Test de /mangas", () => {
    it("GET api/mangas/:id verificar que el id enviado por params es un objectid", async ()=>{
        let mangaId = "6418671d5e89110c37f9adc8"
        const isValid = mongoose.Types.ObjectId.isValid(mangaId)
        assert.isTrue(isValid)
    })

    it("GET api/mangas/:id verificar que se pasa token por headers	", async () =>{
        let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MTg2NzFjNWU4OTExMGMzN2Y5YWRhYiIsImlhdCI6MTY3OTM0MTY3OCwiZXhwIjoxNjc5NDI4MDc4fQ.G-8kE59RUctWDfvpkb9SkFMXU8J4sockmtv0xsy4zU4"
        let mangaId = "6418671d5e89110c37f9adc8"
        const response = await request(app)
            .get("/api/mangas/" + mangaId)
            .set("Authorization", `Bearer ${token}`)
        assert.equal(response.request.header.Authorization, `Bearer ${token}`)
    })

    it("GET api/mangas/:id verificar que la respuesta tiene alguna propiedad con el objeto (manga)	", async () =>{
        let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MTg2NzFjNWU4OTExMGMzN2Y5YWRhYiIsImlhdCI6MTY3OTM0MTY3OCwiZXhwIjoxNjc5NDI4MDc4fQ.G-8kE59RUctWDfvpkb9SkFMXU8J4sockmtv0xsy4zU4"
        const response = await request(app)
            .get("/api/mangas/6418671f5e89110c37f9ade3")
            .set("Authorization", `Bearer ${token}`)
        expect(response.body).to.have.property('manga')

    })
    
    it("GET api/mangas verificar que la respuesta devuelve un status 404 cuando no encuentra el manga	", async () =>{
        let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MTg2NzFjNWU4OTExMGMzN2Y5YWRhYiIsImlhdCI6MTY3OTM0MTY3OCwiZXhwIjoxNjc5NDI4MDc4fQ.G-8kE59RUctWDfvpkb9SkFMXU8J4sockmtv0xsy4zU4"
        const response = await request(app)
            .get("/api/mangas?title=asdd&category=")
            .set("Authorization", `Bearer ${token}`)
        assert.equal(response.status,404)
    })

})