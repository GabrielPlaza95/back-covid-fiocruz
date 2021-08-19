import { Router } from 'express'

import { add, remove, get, put } from '../models/amostra.js'
import search from '../models/busca.js'
import getPath from '../models/download.js'
import { zipFiles } from '../utils.js'

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

router.get('/:id', async (req, res) => {
	const { id } = req.params
	const pool = req.app.get('db connection pool')

	const sample = await get(pool, parseInt(id)) 
	res.json(sample)
})

router.put('/:id', async (req, res) => {
	const { id } = req.params
	const pool = req.app.get('db connection pool')
	await put(pool, req.body, parseInt(id)) 
	res.end()
})


router.delete('/:id', async (req, res) => {
	const { id } = req.params
	const pool = req.app.get('db connection pool')

	await remove(pool, id) 
	res.end()
})

router.get('/:id/download', async (req, res) => {
	const { id } = req.params
	const pool = req.app.get('db connection pool')

	const path = await getPath(pool, id)
	const zipBuffer = zipFiles(path)
	if (path !== null)
		res.end(Buffer.from(zipBuffer))
	else
		res.status(404)
})

export default router

