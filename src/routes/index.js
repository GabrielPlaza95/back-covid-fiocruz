import { Router } from 'express'
import busca from './busca.js'
import download from './download.js'
import transferencia from './transferencia.js'

const router = Router()

router.get('/', (req, res) => {
	res.send('Hello Node!')
})

router.use('/busca', busca)
router.use('/download', download)
router.use('/transferencia', transferencia)

export default router
