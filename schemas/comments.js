import Joi from "joi-oid"

export const createSchema = Joi.object({
    chapter_id: Joi.objectId(),
    user_id: Joi.objectId(),
    text: Joi.string().required().min(1).max(200).messages({
        "string.empty": `Comment cannot be an empty field`,
        "string.min": `Comment must have a minimum length of {#limit}`,
        "string.max": `Comment must have a maximum length of {limit}`,
        "string.base": `Comment must be a type of 'text'`,
        "any.required": `Comment is a required field`,
    }),
    commentable_id: Joi.objectId(),
})