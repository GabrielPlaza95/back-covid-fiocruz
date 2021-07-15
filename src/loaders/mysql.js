import { createPool } from 'mysql2/promise'
 
const pool = createPool({
	host: 'localhost',
	user: 'covid',
	password: 'CoV1d2021Ac3ss0#!',
	database: 'covid',
	waitForConnections: true,
	connectionLimit: 5,
	namedPlaceholders: true
})

export default pool
