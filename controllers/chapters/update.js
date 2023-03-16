import Chapter from "../../models/Chapter.js"

const controller = {
    
    update: async (req, res, next) => {
        try {
            const { id } = req.params
            let chapter = await Chapter.findOneAndUpdate(
                { _id: id},
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