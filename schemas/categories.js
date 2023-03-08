import Joi from "joi-oid";

const schema = Joi.object({
    admin_id: Joi
        .objectId(),
    name: Joi
        .string()
        .required()
        .min(3)
        .max(30)
        .messages({
            "string.min": "The name must have at least 3 characters",
            "string.max": "The name must have a maximum of 30 characters",
        }),
    description: Joi
        .string()
        .required()
        .min(20)
        .max(200)
        .messages({
            "string.min": "The name must have at least 20 characters",
            "string.max": "The name must have a maximum of 200 characters",
        }),
})

export default schema