import app from '../app.js'
import chai from 'chai';
import request from 'supertest';
import { describe } from 'mocha';


const should = chai.should

describe ('POST /chapters/', () =>  {
    it ('debe devolver un error 400 si pages no es un array de strings' , async () => {
        const response = await request(app).post('/chapters/')
        console.log(response.body)
    } )
})