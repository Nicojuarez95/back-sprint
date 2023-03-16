import manga from "../../models/Manga.js";

const controller = {
  get_me: async (req, res, next) => {
    try {
      const {author_id} = req.body
      const mangas = await manga.find({author_id});
      console.log(mangas)
      res.json(mangas);
    } catch (error) {
      next(error)
    }
  },
};

export default controller;