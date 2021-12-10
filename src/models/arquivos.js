import { readFile } from 'fs/promises'

const query_list = await readFile('src/queries/arquivo_get.sql', { encoding: 'utf8' })
const query_update = await readFile('src/queries/arquivo_update.sql', { encoding: 'utf8' })

export async function list(conn){
	const [rows] = await conn.execute(query_list)
	return rows
}

export async function file_linked(conn, num, isLinked){
	const [rows] = await conn.execute(query_update, [isLinked, num])
	return rows
}


