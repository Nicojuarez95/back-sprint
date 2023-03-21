import Author from '../../models/Author.js'
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
            return res.status(404).json({
                success: false,
                message: "No authors found"
            })
        }catch(error){
            return res.status(400).json({
                success: false,
                message: "Unexpected error"
            })
        }
    }
}

export default controller