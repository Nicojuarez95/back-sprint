import Chapter from '../models/Chapter.js'

async function nextOrder(req, res, next) {
    let { order } = req.body
    if (!order) {
        let chapter = await Chapter.find().sort({ order: "-1" }).limit(1)
        let nextOrder = chapter[0].order + 1
        req.body.order = nextOrder
        return next()
    }
    return next()
}
export default nextOrder