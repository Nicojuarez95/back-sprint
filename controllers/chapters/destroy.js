import Chapter from "../../models/Chapter.js";

const controller = {

    destroy: async (req, res, next) => {
        try{
            let { id } = req.params //destructurar id
            let dest = await Chapter.findByIdAndDelete(
                {_id: id} //objetos que recibe el findBy
                )
            if(dest){
                res.status(200).json({
                    succes: true,
                    message: 'Chapter removed successfully'
                })
            }else{
                res.status(400).json({
                    succes: false,
                    message: 'Could not delete chapter'
                })
            }
        }
        catch(error){
            next(error)
        }
    }
}
export default controller