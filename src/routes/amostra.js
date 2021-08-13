import { Router } from 'express'
import { add, remove } from '../models/amostra.js'

const router = Router()

router.get('/', async (req, res) => {
	const { busca } = req.query
	const pool = req.app.get('db connection pool')

	let term = busca ? busca : ""

	const samples = await search(pool, term) 
	res.json(samples)
})


router.post('/', async (req, res) => {
	const pool = req.app.get('db connection pool')

	await add(pool, req.body) 
	res.end()
})

router.delete('/:id', async (req, res) => {
	const { id } = req.params
	const pool = req.app.get('db connection pool')

	await remove(pool, id) 
	res.end()
})

export default router
