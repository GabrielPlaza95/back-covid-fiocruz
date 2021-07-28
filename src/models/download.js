import { readFile } from 'fs/promises'

const query = await readFile('src/queries/download.sql', { encoding: 'utf8' })

export default async (conn, num) => {
	const [rows] = await conn.execute(query, [num])

	if (rows.length < 1) return null
	
	return rows[0].caminho_salvo_servidor || null
}

