import { Router } from 'express'
import * as Amostra from '../models/amostra.js'

const router = Router()

router.get('/search/:term', async (req, res) => {
	const { term } = req.params
	console.log(term)
	const pool = req.app.get('db connection pool')

	const amostras = await Amostra.search(pool, term) 
	res.json(amostras)
})

export default router
