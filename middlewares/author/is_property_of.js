import Manga from "../../models/Manga.js";
import Author from "../../models/Author.js";

async function is_property_of(req, res, next) {
  const author = await Author.findOne({
    user_id: req.user._id,
  });
  const manga = await Manga.findOne({
    _id: req.body.manga_id,
    author_id: author._id,
  });
  // console.log(author)
  console.log(req.body)
  if (manga) {
    return next();
  }
  return res.status(400).json({
    succes: false,
    message: "The manga is not by the author!",
    data: manga,
  });
}
export default is_property_of;