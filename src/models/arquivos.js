import { readFile } from 'fs/promises'

const query = await readFile('src/queries/busca_arquivos.sql', { encoding: 'utf8' })

export default async (conn, num) => {
	const [rows] = await conn.execute(query)
	return rows
}

