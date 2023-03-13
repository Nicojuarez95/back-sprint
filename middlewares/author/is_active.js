import Author from '../../models/Author.js'

async function is_active (req, res, next) {
const author = await Author.findOne({user_id: req.user.id})

    if (!author?.active) {
        return res.status(400).json({
            succes: false,
            message: 'Author is not active!'
        })}
        
    return next()
}

export default is_active