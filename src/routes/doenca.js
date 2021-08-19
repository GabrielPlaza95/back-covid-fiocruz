import { Router } from 'express'
import { list } from '../models/generic_model.js'

const router = Router()

router.get('/', async (req, res) => {
	const pool = req.app.get('db connection pool')

	const diseases = await list(pool, "doenca") 
	res.json(diseases)
})

export default router
