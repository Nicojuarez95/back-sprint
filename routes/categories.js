import express from 'express'
import allController from '../controllers/categories/all.js'
let router = express.Router()
const { all } = allController
router.get('/',all)

export default router;