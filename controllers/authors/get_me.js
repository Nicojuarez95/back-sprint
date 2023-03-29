import Author from '../../models/Author.js'
import createError from "http-errors"
 const controller = {
    me: async(req,res,next) => {
        try{
            let author = await Author.findOne({user_id: req.user})
            if(author){
                return res.status(200).json({
                    success: true,
                    author
                })
            }
            return next ( createError(404, "not found" ))

        }catch(error) {
            return next ( error )
        }
    }
}

export default controller