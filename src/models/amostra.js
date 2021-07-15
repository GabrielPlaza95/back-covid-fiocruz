import { readFileSync } from 'fs'

export async function search(conn, term) {
	const query = readFileSync('src/queries/amostra_select.sql', { encoding: 'utf8' })

	const [rows] = await conn.query(query, [term, term, term])

	return rows
}

