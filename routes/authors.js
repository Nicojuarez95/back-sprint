import express from "express";
import controller from "../controllers/is_author/create.js";
import schema from "../schemas/authors.js";
import validator from "../middlewares/validator.js"
import passport from "../middlewares/passport.js";

let router = express.Router();
const {create} = controller;

router.post("/", passport.authenticate("jwt", {session: false}), validator(schema), create);

export default router;