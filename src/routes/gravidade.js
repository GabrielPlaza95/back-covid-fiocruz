import { Router } from 'express'
import list from '../models/gravidade.js'

const router = Router()

router.get('/', async (req, res) => {
	const pool = req.app.get('db connection pool')

	const severity = await list(pool) 
	res.json(severity)
})

export default router
