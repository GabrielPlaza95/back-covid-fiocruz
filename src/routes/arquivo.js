import { Router } from 'express'

const router = Router()

router.get('/', async (req, res) => {
	res.json([{nomeArquivo: "21321", criado: "2021-08-12"}])
})

export default router
