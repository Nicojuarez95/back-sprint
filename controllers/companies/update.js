import  Company  from '../../models/Company.js'
import  User  from '../../models/User.js'
import createError from "http-errors";


const controller = {
    update_active: async (req, res, next) => {
        try {
            let company = await Company.findOneAndUpdate(
                { _id: req.params.id },
                { active: req.body.active },
                { new: true },
            )
            if (company) {
                let user = await User.findOneAndUpdate(
                    { _id: company.user_id },
                    { is_company: req.body.active },
                    { new: true }
                )
                return res.status(200).json({
                    success: true,
                    company,
                })
            } else {
                return res.status(404).json({
                    success: false
                })
            }
        } catch (error) {
            next();
        }
    }
}

export default controller;