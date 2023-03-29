import express from 'express'
import controller from '../controllers/companies/create_companies.js'
import readAll from '../controllers/companies/read_all.js'
import schema from '../schemas/companies.js'
import validator from "../middlewares/validator.js"
import passport from "../middlewares/passport.js";
import readAllActive from '../controllers/companies/read_all_active.js'
import updateActive from '../controllers/companies/update.js'


const { create } = controller
const { read_all } = readAll
const {read_all_active}= readAllActive
const {update_active}=updateActive

let router = express.Router();

router.post('/', passport.authenticate('jwt', { session: false }), validator(schema), create)
router.get('/', read_all)
router.get('/admin', passport.authenticate('jwt', { session: false }),read_all_active)
router.put('/admin/:id', passport.authenticate('jwt', { session: false }),update_active)

export default router;