import express from 'express'
import validator from '../middlewares/validator.js'
import schema from '../schemas/users.js'
import schema_signin from '../schemas/sign_in.js'
import controller from '../controllers/auth/auth.js'
import accountExistsSignUp from '../middlewares/accountExistsSignUp.js'
import accountExistsSignIn from '../middlewares/accountExistsSignIn.js'
import accountHasBeenVerified from '../middlewares/accountHasBeenVerified.js'
import passwordIsOk from '../middlewares/passwordIsOk.js'
import passport from '../middlewares/passport.js'


const {sign_up, sign_in, sign_out} = controller

let router = express.Router();


router.post('/signup', validator(schema), accountExistsSignUp, sign_up)
router.post('/signin', validator(schema_signin), accountExistsSignIn,accountHasBeenVerified, passwordIsOk, sign_in )
router.post('/signout', passport.authenticate('jwt',{session:false}, sign_out)) 

// module.exports = router;
export default router