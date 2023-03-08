import chapter from "../../models/Chapter.js"

const controller = {
    create: async (req, res) => {
        try {
            await chapter.create(req.body)
            res.status(201).json({
                success: true,
                response: req.body,
            })
        } catch (error) {
            res.status(400).json({
                success: false,
                response: "Error al crear chapter",
            })
            console.log(error)
        }
    }
}
export default controller