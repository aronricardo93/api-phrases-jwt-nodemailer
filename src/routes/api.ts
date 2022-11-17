import { Router } from "express";
import * as apiController from '../controllers/apiController'

const router = Router()

router.get('/random', apiController.getRandomNumber)
router.get('/name/:name', apiController.sendName)

export default router