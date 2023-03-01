import  express  from "express"
import Author from "../models/Author.js"
let router = express.Router()

router.get('/', function(req, res, next) {
    res.send('aca tendrian que estar los usuarios');
  });

router.post('/', async (req,res) => {
    try{
    
      let author = await Author.create(req.body)
      return res.status(201).json({
        success: true,
        author: author,
        id: author._id
      })
    } catch(error){
      console.log(error)
      return res.status(400).json({
        success: false,
        message: 'no se pudo crear',
        body: req.body
      })
    }
  })
  
  // module.exports = router;
  export default router