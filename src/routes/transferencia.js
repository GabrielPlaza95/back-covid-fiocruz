import { Router } from 'express'
import proc from 'child_process'
import { promisify } from 'util'

const exec = promisify(proc.exec)

const router = Router()

router.get('/:num', async (req, res) => {
	const { num } = req.params

	const {
		TRANSFER_SCRIPT_DIR: cwd,
		TRANSFER_SRC_DIR: src,
		TRANSFER_DEST_DIR: dest,
	} = process.env

	const cmd = `poetry run python3 ${cwd}/covid_etl/ssh_connect.py -s ${src}/${num} -d ${dest}` 

	exec(cmd, { cwd }) 

	res.end()
})

export default router
