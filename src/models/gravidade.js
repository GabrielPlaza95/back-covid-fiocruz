import { readFile } from 'fs/promises'
// import { list_query } from '../queries/general_queries';

const gravidade_table = "gravidade";

export default async (conn) => {
	const [rows] = await conn.query(`SELECT * FROM ${gravidade_table};`)

	return rows
}

