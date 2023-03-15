import app from '../app.js'
import chai from 'chai';
import request from 'supertest';
import {describe, it} from 'mocha';

const should = chai.should

describe ('POST /chapters', () =>  {
    it ('debe devolver un error 400 si pages no es un array de strings' , async () => {
        const chapters = {
            manga_id : '640baf488015c18cd3bd2172',
            title: 'Feer',
            pages: ['https://i.postimg.cc/q76GttJr/alice-in-borderland-001-01.jpg'],
            order: 1

        }
        const response = await request(app).post('/chapters').send(chapters)
        console.log(response.body)
    } )
})