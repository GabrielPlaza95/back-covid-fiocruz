import { readFile } from 'fs/promises'

const query = await readFile('src/queries/busca.sql', { encoding: 'utf8' })

export default async (conn, term) => {
	const [rows] = await conn.execute(query, [term, term.toString(10), term.toString(10)])

	return rows
}

