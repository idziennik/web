const 	app = require('express')(),
		cookieParser = require('cookie-parser'),
		bodyParser = require('body-parser'),
		path = require('path'),
		idziennik = require('idziennik'),
		Chance = require('chance'),
		chance = new Chance()

var data = {};

app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'pug')
app.listen(8080, () => {
	console.log('App is listening on port 8080.')
})

app.get('*', (req, res) => {
	res.status(404).sendFile(path.join(__dirname, 'res', '404.html'))
})