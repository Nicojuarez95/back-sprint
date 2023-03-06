// import express from "express";
// import Chapter from '../models/Chapter.js'

// let router = express.Router()

// router.get('/',(req, res) => {
//         return res.status(200).send/('aca estarian los capitulos creados')
//     }
// )
// router.post('/', (req, res) =>{
//     try{
//         req.body.manga_id = "63ffc5acd83adc5aaa98a26c"
//         req.body.cover_photo = false 
//         let chapter = Chapter.create(req.body)
//         return res.status(201).json(
//             {
//                 success: true,
//                 chapter: chapter,
//                 id: chapter._id,
//                 menssage:'se creo'
//             }
//         )
//     } catch(error){
//         console.log(error)
//         return res.status(400).json(
//             {
//                 success: false,
//                 menssage: 'no se pudo crear',
//                 body: req.body
//             }
//         )
//     }
// })

// export default router
////////////////////////////////////////////////////////////////////
import controller from '../controllers/chapters/create.js'
import express from 'express'
import schema from '../schema/chapters.js'
import validator from '../middleware/validator.js'
import existsOrder from '../middleware/exists_order.js'
import nextOrder from '../middleware/next_order.js'
// import addFrontPhoto from '../middleware/add_front_photo.js'

const router = express.Router()

const {create, read} = controller

router.post("/", validator(schema), existsOrder, nextOrder, create)
router.get("/", read)

export default router

///////////////////////////////////////////////////////////////

// import express from 'express'
// import postSchema from '../schema/chapters.js'
// import Chapter from '../models/Chapter.js'
// import validator from '../middleware/validator.js'
// let router = express.Router()

// router.get()