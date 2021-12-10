import { readFile } from 'fs/promises'

const queryAddSample = await readFile('src/queries/amostra_insert.sql', { encoding: 'utf8' })
const queryAddComorbidity = await readFile('src/queries/comorbidade_insert.sql', { encoding: 'utf8' })
const queryRemoveSample = await readFile('src/queries/amostra_delete.sql', { encoding: 'utf8' })
const queryRemoveComorbidity = await readFile('src/queries/comorbidade_delete.sql', { encoding: 'utf8' })
const queryGet = await readFile('src/queries/amostra_get.sql', { encoding: 'utf8' })
const queryPut = await readFile('src/queries/amostra_update.sql', { encoding: 'utf8' })

export async function add (conn, data) {
	const {
		id_arquivo,
		id_geo,
		versao_crc,
		param_crc,
		filtro_crc,
		celulas_infectadas,
	} = data

	const rowsInserted = await conn.execute(
		queryAddSample, 
		[
			id_arquivo,
			id_geo,
			versao_crc,
			param_crc,
			filtro_crc,
			celulas_infectadas,
		]
	)
	return rowsInserted
}

export async function remove (conn, id) {
	await conn.execute(queryRemoveSample, [id])
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
		id_geo,
		versao_crc,
		param_crc,
		filtro_crc,
		celulas_infectadas,
	} = data
	await Promise.all([
		conn.execute(
			queryPut, 
			[
				id_geo,
				versao_crc,
				param_crc,
				filtro_crc,
				celulas_infectadas,
				id
			]
		),
	])
}