import Author from '../../routes/users.js'



async function is_active (req, res, next) {
const author = await Author.findOne({user_id: req.user_id})
    if (author.active) {
        return res.status(400).json({
            succes:false,
            message: 'Author is not active!',
            data: author
        })}

    return next()
}

export default is_active