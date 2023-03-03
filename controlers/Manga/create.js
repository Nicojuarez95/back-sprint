import Manga from "../../models/Manga.js";
const createManga = {
        create: async (req, res) => { //create es el metodo
                try {
                        // req.body.category_id = "63fe8112f09373806fd89fe5"
                        req.body.author_id = "63fe8112f09373806fd89fe5"

                        let manga = await Manga.create(req.body);
                        return res.status(201).json({
                                success: true,
                                message: "New Manga created succesfully",

                        });
                } catch (err) {
                        console.log(err);
                        return res.status(400).json({
                                success: false,
                                message: "Could not create new Manga",
                        });
                }
        }
}

export default createManga // exporta el controlador 