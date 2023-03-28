import Chapter from "../../models/Chapter.js"


// const controller = {
//     update: async (req, res) => {
//       try {
//         let update = await Chapter.findOneAndUpdate(
//           {_id: req.body._id},
//           req.body,
//           {new: true}
//         );
//         if (update) {
//           return res.status(200).json({
//             succes: true,
//             data: update,
//             message: "Successfully modified chapter",
//           });
//         } else {
//           return res.status(404).json({
//             succes: false,
//             message: "Chapter not found",
//           });
//         }
//       } catch (error) {
//         return res.status(400).json({
//           succes: false,
//           message: error.message,
//         });
//       }
//     },
//   };
  
//   export default controller;


const controller = {
    
    update: async (req, res, next) => {
        try {
            let { id } = req.params
            let chapter = await Chapter.findOneAndUpdate(
                { _id: id },
                req.body,
                { new : true}
            )
            if (chapter) {
                res.status(200).json({
                    succes: true,
                    response: chapter
                })
            } else {
                res.status(404).json({
                    success: false,
                    response: "Error obtaining chapter",
                })
            }
        }
        catch (err) {
            return next()
        }
    }
}

export default controller

