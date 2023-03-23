
import Manga from "../../models/Manga.js";
import Chapter from "../../models/Chapter.js";

const controller = {
  dlt: async (req, res, next) => {
    try {
      let {id} = req.params
      let dlt = await Manga.deleteOne({_id: id})
      let dltChapter = await Chapter.deleteMany({manga_id: id})
      return res.status(200).json(dlt, dltChapter)
    } catch (error) {
      next(error)
    }
  },
};

export default controller;