import Joi from "joi-oid";

const schema = Joi.object({
    manga_id: Joi
        .objectId()
        .required(),
    title: Joi
        .string()
        .required()
        .min(3)
        .max(30)
        .message({
            'string.empy': 'The title cannot be empty',
            'string.min': 'The title must be at least 3 characters',
            'string.max': 'The title exceeds the maximum of 30 letters',
            'string.base': 'Must be string type'
        }),
    pages: Joi
        .string().uri()
        .required()
        .min(1)
        .message({
            'any.required': 'pages have to be URL',
            'string.empty': 'pages cannot be empty'
        }),
    order: Joi
        .any()
})
export default schema