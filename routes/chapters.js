import  express from "express";
import Chapter from '../models/Chapter.js'

let router = express.Router()

router.get('/',(req, res) => {
        return res.status(200).send/('aca estarian los capitulos creados')
    }
)

router.post('/', (req, res) =>{
    try{
        let chapter = Chapter.create(req.body)
        return res.status(201).json(
            {
                success: true,
                chapter: chapter,
                id: chapter._id,
                menssage:'se creo'
            }
        )
    } catch(error){
        console.log(error)
        return res.status(400).json(
            {
                success: false,
                menssage: 'no se pudo crear',
                body: req.body
            }
        )
    }
})


export default router