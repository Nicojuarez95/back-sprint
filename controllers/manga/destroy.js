import Manga from "../../models/Manga.js";

const controller = {
  dlt: async (req, res, next) => {
    try {
      let {id} = req.params
      let dlt = await Manga.deleteOne({_id: id})
      return res.status(200).json(dlt)
    } catch (error) {
      next(error)
    }
  },
};

export default controller;