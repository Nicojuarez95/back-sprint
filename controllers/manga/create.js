import Manga from "../../models/Manga.js";
import Author from '../../models/Author.js'

const createManga = {
  create: async (req, res) => {
    try {
      let author = await Author.findOne({user_id: req.user._id})

      req.body.author_id= author._id
      let manga = await Manga.create(req.body);
      
      return res.status(201).json({
        success: true,
        message: "New Manga created succesfully",
        manga,
      });
    } catch (err) {
      console.log(err);
      return res.status(400).json({
        success: false,
        message: "no autorizado",
      });
    }
  },
};

export default createManga;
