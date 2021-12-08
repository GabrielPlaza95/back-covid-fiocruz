import './loaders/dotenv.js';
import 'express-async-errors';
import express from 'express';
import passport from 'passport';
import session from 'express-session';
import flash from 'connect-flash';

import initializePassport from './loaders/passport-config.js';
import pool from './loaders/mysql.js';
import routes from './routes/index.js';
import { TOKEN } from './consts.js';

const app = express()
const port = process.env.PORT

app.set('db connection pool', pool)
app.use(express.json())

app.use(flash())

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
  });

initializePassport(passport, email => email, pass => pass);


app.use(session({  
	secret: '123',//configure um segredo seu aqui,
	resave: false,
	saveUninitialized: false,
	cookie: { maxAge: 30 * 60 * 1000 }//30min
  }));

app.use(passport.initialize());
app.use(passport.session());

const nonSecuredPaths = (path) => {
	return path === "/login";
}

const checkAuthenticated = (req, res, next) => {
	if (req.headers.token === TOKEN || nonSecuredPaths(req.path)) {
		next();
	} else {
		return res.status(403).send("Not authenticated")
	}
  };

app.use(checkAuthenticated)
app.use('/', routes)

app.use((req, res, next) => {
	const err = new Error('Not Found')
	err['status'] = 404
	next(err)
});

app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(err.status || 500);
	res.json({ errors: { message: err.message } })
})

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})

