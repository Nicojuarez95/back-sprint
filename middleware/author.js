export function authorIsactive (req,res,next){

    req.user = {
        is_author: true,
        is_active: true,
    }
    if(req, user.is_active){
        return next()
    }
    return res.status(400).json({
        message: "Author no esta activo"
    })
}

export function isProperty(req, res, next) {

    req.user = {
        is_author: true,
        is_active: true,
    }

    if (req.user.is_author) {
        next()
    }

    return res.status(400).json({
        message: 'No es author'
    })
}