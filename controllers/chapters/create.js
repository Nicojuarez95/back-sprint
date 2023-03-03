import chapter from "../../models/chapter.js"

const controller = {
    create: async (req, res) => {
        try {
            await chapter.create(req.body)
            res.status(201).json({
                success: true,
                response: req.body,
            })
        } catch (error) {
            res.status(404).json({
                success: false,
                response: "Error al crear chapter",
            })
            console.log(error)
        }
    },
    read: async (req, res) => {
        try {
            let chapters = await chapter.find()
            res.status(200).json({
                success: true,
                response: chapters,
            })
        } catch {
            res.status(400).json({
                success: false,
                response: "Error al obtener el chapter",
            })
        }
    }
}
export default controller