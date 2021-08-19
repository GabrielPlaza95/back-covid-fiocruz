import { Router } from 'express'
import { list } from '../models/generic_model.js'

const router = Router()

router.get('/', async (req, res) => {
	const pool = req.app.get('db connection pool')

	const comorbidities = await list(pool, "comorbidade") 
	res.json(comorbidities)
})

export default router
