import { createPool } from 'mysql2/promise'
 
const pool = createPool({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: 'covid',
	waitForConnections: true,
	connectionLimit: 5,
	namedPlaceholders: true
})

export default pool
