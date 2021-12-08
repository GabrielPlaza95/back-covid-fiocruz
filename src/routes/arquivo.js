import { Router } from 'express'
import list from '../models/arquivos.js'

const router = Router()

router.get('/', async (req, res) => {
	const pool = req.app.get('db connection pool')

	const files_availables = await list(pool) 
	res.json(files_availables)
})

export default router
