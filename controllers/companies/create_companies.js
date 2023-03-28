import  Company  from '../../models/Company.js'

const controller = {
    create: async (req, res, next) => {
        const { user } = req
        req.body.user_id = req.user._id
        req.body.active = true
        try {
            await Company.create(req.body)
            return res.status(200).json({
                success: true,
                message: 'New company created succesfuly',
                data: req.body
            })
        } catch (error) {
            next(error)
        }
    }
}

export default controller