import Author from "../../models/Author.js";
import User from '../../models/User.js'

const controller = {
  create: async (req, res) => {
    try {
      let user = await User.findOne({_id: req.user._id})

      req.body.user_id = req.user._id;
      
      let author = await Author.create(req.body);
      user.is_author= true
      await user.save()
     
      return res.json({
        succes: true,
        data: author,
        message: "Author created successfully",
      });
    } catch (error) {
      console.log(error);
      return res.json({
        succes: false,
        error: error,
        message: "Could not create author",
      });
    }
  },
};

export default controller;
