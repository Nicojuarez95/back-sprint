import Manga from "../../models/Manga.js";

const createManga = {
  create: async (req, res) => {
    try {
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
  },
};

export default createManga;