import Joi from "joi-oid";

export const schema = Joi.object({
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

export  const schemaUpdate = Joi.object({
    manga_id: Joi
        .objectId()
        .required(),
    id: Joi
        .string(),
    title: Joi.string().min(1).max(200).message({
        "any.required" : "Title is a required field",
        "string.empty" : "Title cannot be an empty field",
        "string.min" : "Title must have a minimum length {#limit}",
        "string.max": "Title must have a maximum length {#limit}",
        "string.base": "Title must be a type of 'text'",
    }
    )
})

