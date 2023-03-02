import  chapter  from "../models/Chapter.js"

async function exists_order(req, res, next) {
    let { order } = req.body
    if (!order) {
        let Chapter = await chapter.find().sort({ order: "-1" }).limit(1)
        let nextOrder = chapter[0].order + 1
        req.body.order = nextOrder
        return next()
    }
    let foundChapter = await chapter.findOne({ order })
    if (foundChapter) {
        req.body.success = false
        req.body.sc = 400
        req.body.data = [{ message: "Order already exists" }]
        return defaultResponse(req, res)
    }
    return next()
}

export default exists_order