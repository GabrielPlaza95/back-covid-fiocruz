import { list_query } from '../queries/general_queries.js';

export async function list(conn, table) {
	const [rows] = await conn.query(list_query(table))

	return rows
}
