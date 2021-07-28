import { Router } from 'express'
import search from '../models/busca.js'

const router = Router()

router.get('/:term', async (req, res) => {
	const { term } = req.params
	const pool = req.app.get('db connection pool')

	const samples = await search(pool, term) 
	res.json(samples)
})

export default router
