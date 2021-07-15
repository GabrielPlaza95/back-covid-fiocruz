import { Router } from 'express'
import amostra from './amostra.js'

const router = Router()

router.get('/', (req, res) => {
	res.send('Hello Node!')
})

router.use('/amostra', amostra)

export default router
