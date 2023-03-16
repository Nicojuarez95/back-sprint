import Manga from "../../models/Manga.js";

const controller = {
  upd: async (req, res, next) => {
    try {
      let { id } = req.params
      let upd = await Manga.updateOne(
        {_id: id},//objeto de busqueda
        req.body //objeto con propiedades a modificar
      )
      return res.status(200).json(upd)
    } catch (error) {
      next(error)
    }
  },
};

export default controller;