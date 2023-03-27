import User from '../../models/User.js'
import Crypto from 'crypto'
import bcryptjs from 'bcryptjs'
import jsonwebtoken from 'jsonwebtoken'
import nodemailer from 'nodemailer'
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});
const controller = {

    sign_up: async (req, res, next) => {
        req.body.is_online = false
        req.body.is_admin = false
        req.body.is_author = false
        req.body.is_company = false
        req.body.is_verified = false
        req.body.verify_code = Crypto.randomBytes(10).toString('hex')
        req.body.password = bcryptjs.hashSync(req.body.password, 10)
        try {
            await User.create(req.body)
            const message = {
                from: process.env.SMTP_USER,
                to: req.body.email,
                subject: "Verifica tu cuenta",
                text: `Por favor, haz clic en el siguiente enlace para verificar tu cuenta: http://localhost:8000/auth/verify/${req.body.verify_code}`,
            };
            transporter.sendMail(message, (error, info) => {
                if (error) {
                    console.log(error);
                } else {
                    console.log(
                        "Correo electrónico de verificación enviado: " + info.response
                    );
                }
            });


            return res.status(200).json({
                succes: true,
                message: 'user registered!'
            })
        } catch (error) {
            next(error)
        }
    },

    sign_in: async (req, res, next) => {
        try {
            let user = await User.findOneAndUpdate(
                { email: req.user.email }, //parametro de busqueda
                { is_online: true }, //parámetro a modificar
                { new: true } //para que devuelva el objeto modificado
            )
            user.password = null //para proteger la contraseña
            const token = jsonwebtoken.sign(
                { id: user._id },
                process.env.SECRET,
                { expiresIn: 60 * 60 * 48 }
            )
            return res.status(200).json({
                succes: true,
                message: 'logged in user!',
                user,
                token
            })
        } catch (error) {
            next(error)
        }
    },

    sign_out: async (req, res, next) => {
        const { email } = req.user
        try {
            await User.findOneAndUpdate(
                { email },
                { is_online: false },
                { new: true }
            )
            return res.status(200).json({
                succes: true,
                message: 'offline user!'
            })
        } catch (error) {
            next(error)
        }
    },

    sign_in_token: async (req, res, next) => {
        try {
            let user = await User.findOneAndUpdate(
                { email: req.user.email }, //parametro de busqueda
                { is_online: true }, //parámetro a modificar
                { new: true } //para que devuelva el objeto modificado
            )
            user.password = null //para proteger la contraseña
            const token = res.token
            return res.status(200).json({
                succes: true,
                message: 'logged in user!'
            })
        } catch (error) {
            next(error)
        }
    },

}

export default controller