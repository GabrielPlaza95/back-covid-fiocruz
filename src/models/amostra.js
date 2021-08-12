import { readFile } from 'fs/promises'

const queryAdd = await readFile('src/queries/amostra_insert.sql', { encoding: 'utf8' })
const queryRemove = await readFile('src/queries/amostra_delete.sql', { encoding: 'utf8' })

export async function add (conn, data) {
	const {
		numero,
		estaInfectado,
		doenca,
		gravidade,
		tecido
	} = data

	await conn.execute(queryAdd, [numero, estaInfectado, doenca, gravidade, tecido])
}

export async function remove (conn, id) {
	console.log(id)
	const [rows] = await conn.execute(queryRemove, [id])
}
