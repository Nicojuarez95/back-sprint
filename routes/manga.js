import express from "express"
import MangaCreate from '../schema/MangaCreate.js'
import Manga from '../models/manga.js'
import validator from "../middleware/validator.js"


let router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
    res.status(200).send("New Manga");
});
router.post("/", validator(MangaCreate),
    async (req, res) => {
        try {
            req.body.author_id = "63fe8112f09373806fd89fe5" // momentaneo en el push 2 hay q pasarlo por passport

            
            let manga = await Manga.create(req.body);
            return res.status(201).json({
                success: true,
                message:"Se creo el Manga",
            });
        } catch (err) {
            //console.log(err);
            return res.status(400).json({
                success: false,
                message: "No se pudo crear New Manga",
            });
        }
    });

export default router;