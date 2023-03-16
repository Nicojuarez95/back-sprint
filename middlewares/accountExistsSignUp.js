import User from '../models/User.js'

async function accountExistsSignUp(req,res,next) {
    const user = await User.findOne({eemail: req.body.eemail})
    if (user) {
        return res.status(400).json({
            succes:false,
            message:'user already exist!'})
    }
    return next()
}

export default accountExistsSignUp

