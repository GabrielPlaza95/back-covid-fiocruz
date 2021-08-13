import { list_query } from '../queries/general_queries.js';

export default async (conn, table) => {
	const [rows] = await conn.query(list_query(table))

	return rows
}

