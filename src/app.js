import express from 'express'
import './loaders/dotenv.js'
import pool from './loaders/mysql.js'
import routes from './routes/index.js'

const app = express()
const port = process.env.PORT

app.set('db connection pool', pool)
app.use(express.json())

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
  });

app.use('/', routes)

app.use((req, res, next) => {
	const err = new Error('Not Found')
	err['status'] = 404
	next(err)
});

app.use((err, req, res, next) => {
	res.status(err.status || 500);
	res.json({ errors: { message: err.message } })
})

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})

