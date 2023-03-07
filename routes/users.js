import express from 'express'
import User from './../models/User.js'
let router = express.Router();

function authorIsActive(req, res, next) {
    //esto viene de passport
    req.user = {
        is_author: false,
        is_active: false
    }
    //tener otro middle o dentro del mismo para verificar si es autor
    if (req.user.is_author) {
        if (req.user.is_active) {
            return next()
        }
    }
    res.status(400).json({
        message: "bad request"
    })
}



/* GET users listing. */
router.get('/', /*passport.authenticate()*/ authorIsActive, function (req, res, next) {
    res.send('Aca se ven los usuarios');
});

router.post(//metodo para crear usuarios
    '/',
    async (req, res) => {
        try {
            req.body.is_online = false
            req.body.is_admin = false
            req.body.is_author = false
            req.body.is_company = false
            req.body.is_verified = false
            req.body.verify_code = "acvnewi92emodsqisj129mxskal2121wsaz"

            let user = await User.create(req.body)
            return res.json({
                success: true,
                user: user,
                id: user._id
            })
        } catch (error) {
            console.log(error)
            return res.json({
                success: false,
                messagge: "no se pudo crear el usuario",
            })
        }
        res.status(200).json({
            message: "Legaste al controlador",
        })
    }

)

// module.exports = router;
export default router