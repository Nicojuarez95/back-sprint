import Joi from 'joi-oid';

const schema = Joi.object({
    company_id: Joi
        .objectId(),
    title: Joi
        .string()
        .required()
        .min(3)
        .max(30),
    cover_photo: Joi
        .string()
        .required(),
    description: Joi
        .string()
        .required()
        .min(20)
        .max(200),
    category_id: Joi
        .objectId()
        .required(),


})

export default schema