import Manga from "../../models/Manga.js";

const controller = {
  upd: async (req, res, next) => {
    try {
      let { id } = req.params
      let upd = await Manga.updateOne(
        {_id: id},
        req.body 
      )
      return res.status(200).json({
        success: true,
        message:'Update!',
        upd
      })
    } catch (error) {
      next(error)
    }
  },
};

export default controller;