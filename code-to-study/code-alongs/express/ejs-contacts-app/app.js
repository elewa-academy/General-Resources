const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))

app.set('view engine', 'ejs')

const database = []
let counter = 0

app.get('/', (req, res) => {
	res.render('index', { database })
})

app.get('/add', (req, res) => {
	res.render('add')
})

app.post('/add', (req, res) => {
	const name = req.body.name
	const phone = req.body.phone
	const email = req.body.email
	const id = counter
	const contact = {
		name,
		phone,
		email,
		id
	}
	database.push(contact)
	counter++
	
	console.log(database)
	res.redirect('/')
})

app.get('/view/:id', (req, res) => {
	const id = Number(req.params.id)
	const contact = database.find( contact => contact.id === id)
	res.render('view', { contact })
})

app.get('/update/:id', (req, res) => {
	const id = Number(req.params.id)
	const contact = database.find( contact => contact.id === id)
	res.render('update', { contact })
})

app.post('/update/:id', (req, res) => {
	const id = Number(req.params.id)
	const name = req.body.name
	const phone = req.body.phone
	const email = req.body.email

	const index = database.findIndex( contact => contact.id === id)
	const contact = {
		id,
		name,
		phone,
		email
	}

	database[index] = contact
	res.redirect('/')
})

app.post('/delete/:id', (req, res) => {
	const id = Number(req.params.id)
	const index = database.findIndex( contact => contact.id === id)
	database.splice(index, 1)
	res.redirect('/')
})


app.listen(3000, () => {
	console.log('listening on port 3000')
})