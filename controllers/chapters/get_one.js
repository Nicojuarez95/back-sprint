import  Chapter  from '../../models/Chapter.js'

const controller = {
    get_one: async (req, res) => {
        console.log(req.params.id)
        try {
            const one = await Chapter.findOne({ _id: req.params.id }).select('-_id -updatedAt -createdAt -__v').sort({ pages: 1, });
            console.log(one)
            if (one) {
                return res.status(200).json({ Chapter: one });
            } else {
                return res.status(400).json({
                    success: false,
                    message: "This chapter does not exist",
                });
            }
        } catch (err) {
            console.error(err);
            return res.status(500).json({
                success: false,
                message: "Internal server error",
            });
        }
    },
};

export default controller;


