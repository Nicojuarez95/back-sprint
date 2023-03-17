import Chapter from "../../models/Chapter.js";

const controller = {

    destroy: async (req, res, next) => {
        try {
            await Chapter.findOneAndDelete(
                {_id: req.body._id}
            )
            res.status(200).json({
                succes: true,
                response: "deleted chapter"
            })
        }
        catch (err) {
            console.log(err)
        }
    }
}
export default controller