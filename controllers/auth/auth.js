import User from './../../models/User.js'
import Crypto from 'crypto'
import bcryptjs from 'bcryptjs'

const controller = {

    sign_up: async(req,res,next) => {
        req.body.is_online = false
        req.body.is_admin = false
        req.body.is_author = false
        req.body.is_company = false
        req.body.is_verified = true
        req.body.verify_code = Crypto.randomBytes(10).toString('hex')
        req.body.password = bcryptjs.hashSync(req.body.password, 10)
        try {
            await User.create(req.body)
            return res.status(200).json({
                message:'user registered!'})
        } catch (error) {
            next(error)
        }
    },

    sign_in: async (req, res, next) => {
        try {
            let user = await User.findOneAndUpdate(
                { mail: req.user.mail }, //parametro de busqueda
                { is_online: true }, //parámetro a modificar
                { new: true } //para que devuelva el objeto modificado
            )
            user.password = null //para proteger la contraseña
            return res.status(200).json({
                message:'logged in user!'})
        } catch (error) {
            next(error)
        }
    },

    sign_out: async (req, res, next) => {
        const { mail } = req.user
        try {
            await User.findOneAndUpdate(
                { mail },
                { is_online: false },
                { new: true }
            )
            return res.status(200).json({
                message:'offline user!'})
        } catch (error) {
            next(error)
        }
    }

}

export default controller