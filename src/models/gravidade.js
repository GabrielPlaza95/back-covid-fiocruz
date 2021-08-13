import { readFile } from 'fs/promises'

const query = await readFile('src/queries/general_list.sql', { encoding: 'utf8' })
const gravidade_table = "gravidade";

export default async (conn) => {
	const [rows] = await conn.execute(query)

	return rows
}

