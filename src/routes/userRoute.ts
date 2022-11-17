import { Router } from 'express'
import { Auth } from '../middlewares/auth'
import * as userController from '../controllers/userController'

const router = Router()

router.post('/register', userController.register)
router.post('/login', userController.login)
router.get('/list', Auth.private, userController.list)

export default router