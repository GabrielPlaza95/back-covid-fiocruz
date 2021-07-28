import { Router } from 'express'
import getPath from '../models/download.js'

const router = Router()

router.get('/:num', async (req, res) => {
	const { num } = req.params
	const pool = req.app.get('db connection pool')

	const path = await getPath(pool, num) 

	if (path !== null)
		res.download(path)
	else
		res.status(404)
})

export default router
