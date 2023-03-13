import Joi from "joi-oid";

const schema = Joi.object({
  name: Joi.string().required().min(3).max(20).messages({
    "string.min": "The name must have at least 3 characters",
    "string.max": "The name must have a maximum of 20 characters",
  }),
  last_name: Joi.string().min(3).max(20).messages({
    "string.min": "The last name must have at least 3 characters",
    "string.max": "The last name must have a maximum of 20 characters",
  }),
  city: Joi.string().required().max(60).messages({
    "string.max": "The city must have a maximum of 60 characters",
  }),
  country: Joi.string().required().max(60).messages({
    "string.max": "The country must have a maximum of 60 characters",
  }),
  date: Joi.date().less("now").messages({
    invalid: "Not a date",
    "date.less": "The date is greater than the current date",
  }),
  photo: Joi.string().required().min(8).messages({
    "string.min": "The photo url must have at least 8 characters",
  }),
  active: Joi.boolean().required().messages({
    invalid: "Not a Boolean",
  }),
});

export default schema;