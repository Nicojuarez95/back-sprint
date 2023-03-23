import manga from "../../models/Manga.js";

const controller = {
  get_me: async (req, res, next) => {

    let mymangas = {}

    let pagination = {
    page: 1,
    limit: 5
    }

    if (req.query.title){
        mymangas.title = new RegExp(req.query.title.trim(),'i')
    }
    if (req.query.category) {
        mymangas.category_id = req.query.category.split(",")
    }

    if (req.query.page) {
        pagination.page = req.query.page
    }
    if (req.query.quantity) {
        pagination.limit = req.query.quantity
    }

    try {
      const {author_id} = req.body
      mymangas.author_id = author_id
      const mangas = await manga.find(mymangas)
      .select('title category_id cover_photo _id')
      .sort({title: 1})
      .skip(pagination.page > 0 ? (pagination.page-1)*pagination.limit : 0)
      .limit(pagination.limit > 0 ? pagination.limit : 0)
      res.json(mangas);
    } catch (error) {
      next(error)
    }
  },
};

export default controller;