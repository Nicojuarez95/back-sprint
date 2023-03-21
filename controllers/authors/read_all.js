import Author from '../../models/Author.js'
import createError from "http-errors"
const controller = {
    read_all: async (req, res, next) => {
        try{
            let author = await Author.find().select("name last_name -_id")
            if(author){
                return res.status(200).json({
                    success: true,
                    author
                })
            } 
            return next ( createError(404, "is not author" ))

        }catch(error) {
            return next ( createError(400, error ))
        }
    }
}

export default controller