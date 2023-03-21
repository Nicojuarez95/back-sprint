import express from "express";
import controller from "../controllers/is_author/create.js";
import schema from "../schemas/authors.js";
import schemaUpdate from '../schemas/authorUpdate.js'
import validator from "../middlewares/validator.js"
import passport from "../middlewares/passport.js";
import find_id from '../middlewares/auth/find_id.js';
import is_active from '../middlewares/author/is_active.js'
import updateController from '../controllers/authors/update.js';
import meController from '../controllers/authors/get_me.js';
import read_allController from '../controllers/authors/read_all.js';


const {create} = controller;
const { me } = meController;
const { read_all } = read_allController;
const { update } = updateController;


let router = express.Router();

router.post("/",passport.authenticate("jwt", {session: false}),validator(schema),create);
router.get("/me",passport.authenticate("jwt", {session: false}), find_id, me);
router.get("/", read_all);
router.put("/me",passport.authenticate("jwt", {session: false}), validator(schemaUpdate), find_id, is_active , update );

export default router;