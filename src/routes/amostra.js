import { Router } from 'express'
import { add, remove } from '../models/amostra.js'

const router = Router()

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
