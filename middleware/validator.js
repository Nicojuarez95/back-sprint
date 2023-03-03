import router from '../routes/users.js';
import schema from '../schema/mangas.js';

// @schema es el esquema de validación del joi (es necesario importar el shcema en el archivo donde se ejecute el middleware)
// @validate es un método de joi para validar los datos del schema requiere que invoquemos el schema de validación y necesita dos parámetros para funcionar
// @req body  es el objeto que envia el usuario del formulario
// {abortEarly:false} es la configuración necesaria para que se envien todos los errores de validación del formulario

const validator = (schema) => [
    (req, res, next) => {
        const validation = schema.validate(req.body, { abortEarly: false });
        if (validation.error) {
            //Si existe la propiedad error en la validación hay almenos 1 error en los datos del formulario
            return res.status(200).json({
                succes: false,
                message: validation.error.details.map((error) => error.message),
            });
        }
        next();
    },
];

export default validator;