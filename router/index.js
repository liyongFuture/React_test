const express = require('express')
const router = express.Router()
var Fruit = require('../models/fruit.js')



router.get('/allFruits', (req, res) => {
	Fruit.find((err, fruits) => {
		res.header('Access-Control-Allow-Origin', "http://localhost:3000");
		if (err) {
			return res.status(500).send('服务器错误')
		}
		console.log()
		let arr = fruits.map((v, i) => ({
			index: i,
			name: v.name,
			price: v.price,
			quantity: v.quantity
		}))
		res.send(arr)
		// res.render('index.html',{
		// 	students
		// })
	})

})

router.post('/addFruits', (req, res) => {
	res.header('Access-Control-Allow-Origin', "http://localhost:3000");

	console.log(req.body)
	let fruit = new Fruit(req.body)
	fruit.save((err, ret) => {
		if (err) {
			console.log(err)
			return res.status(500).send('服务器错误')
		}
		res.status(200).send('success')
	})


})

module.exports = router