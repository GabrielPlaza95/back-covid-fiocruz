import { readFile } from 'fs/promises'
import { list_query } from '../queries/general_queries.js';

const gravidade_table = "gravidade";

export default async (conn) => {
	const [rows] = await conn.query(list_query(gravidade_table))

	return rows
}

