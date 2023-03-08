import express from 'express';
import chapterController from '../controllers/chapters/get_one.js'


let router = express.Router()

const { get_one } = chapterController;

router.get('/', get_one );

export default router