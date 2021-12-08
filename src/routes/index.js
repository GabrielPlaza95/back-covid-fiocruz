import { Router } from 'express'
import busca from './busca.js'
import download from './download.js'
import transferencia from './transferencia.js'
import amostra from './amostra.js'
import gravidade from './gravidade.js'
import comorbidade from './comorbidade.js'
import doenca from './doenca.js'
import tecido from './tecido.js'
import arquivo from './arquivo.js'
import login from './login.js'

const router = Router()

router.get('/', (req, res) => {
	res.send('Hello Node!')
})

router.use('/login', login)
router.use('/busca', busca)
router.use('/download', download)
router.use('/transferencia', transferencia)
router.use('/amostra', amostra)
router.use('/gravidade', gravidade)
router.use('/comorbidade', comorbidade)
router.use('/doenca', doenca)
router.use('/tecido', tecido)
router.use('/arquivo', arquivo)

export default router
