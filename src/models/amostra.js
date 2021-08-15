import { readFile } from 'fs/promises'

const queryAdd = await readFile('src/queries/amostra_insert.sql', { encoding: 'utf8' })
const queryRemove = await readFile('src/queries/amostra_delete.sql', { encoding: 'utf8' })
const queryGet = await readFile('src/queries/amostra_get.sql', { encoding: 'utf8' })
const queryPut = await readFile('src/queries/amostra_update.sql', { encoding: 'utf8' })

export async function add (conn, data) {
	const {
		arquivo,
		numero,
		estaInfectado,
		doenca,
		gravidade,
		tecido
	} = data

	await conn.execute(queryAdd, [numero, estaInfectado, doenca, gravidade, tecido, arquivo])
}

export async function remove (conn, id) {
	const [rows] = await conn.execute(queryRemove, [id])
}

export async function get (conn, id) {
	const [rows] = await conn.execute(queryGet, [id])
	if (rows.length === 0) {
		throw Error(`A amostra de ${id} nao pode ser encontrada`);
	}
	return rows[0];
}

export async function put (conn, data, id) {
	const {
		numero,
		estaInfectado,
		doenca,
		gravidade,
		tecido,
		arquivo,
	} = data
	const [rows] = await conn.execute(
		queryPut, 
		[numero, estaInfectado, doenca, gravidade, tecido, arquivo, id]
	)
}