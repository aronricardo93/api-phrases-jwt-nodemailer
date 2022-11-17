import { Router } from 'express'
import * as phraseController from '../controllers/phraseController'

const router = Router()

router.post('/phrases', phraseController.createPhrases)
router.get('/phrases', phraseController.listPhrases)
router.get('/phrase/:id', phraseController.getPhrase)
router.put('/phrase/:id', phraseController.updatePhrase)
router.delete('/phrase/:id', phraseController.deletePhrase)

export default router