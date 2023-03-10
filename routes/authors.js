import express from "express";
import controller from "../controllers/is_author/create.js";
import schema from "../schemas/authors.js";
import validator from "../middlewares/validator.js"
import passport from "../middlewares/passport.js";

const {create} = controller;
let router = express.Router();

router.post(
  "/",
  passport.authenticate("jwt", {session: false}),
  validator(schema),
  create
);

export default router;