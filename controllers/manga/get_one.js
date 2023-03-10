import Manga from '../../models/Manga.js'

const controller = {
    getOne: async (req, res) => {
        const manga = await Manga.findOne({ _id: req.params.id }).select('title description -_id')
        if(manga){
            return res.status(200).json({category: manga})
        } else {
            return res.status(400).json({
                success: false,
                message: "Este manga no existe"
            })
        }
    }
}

export default controller