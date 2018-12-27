const express = require('express')
const router = express.Router()
var Fruit = require('../models/fruit.js')

// 统一解决跨域
router.all('*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	// res.header("Access-Control-Allow-Headers", "X-Requested-With");
	// res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
	// res.header("X-Powered-By",' 3.2.1')
	// res.header("Content-Type", "application/json;charset=utf-8");
	next();
});


// 查询所有的
router.get('/allFruits', (req, res) => {
	Fruit.find((err, fruits) => {
		if (err) {
			return res.status(500).send('服务器错误')
		}
		let arr = fruits.map((v, i) => ({
			index: i,
			name: v.name,
			price: v.price,
			quantity: v.quantity,
			id: v._id
		}))
		res.send(arr)
	})
})

// 添加水果
router.post('/addFruits', (req, res) => {
	let fruit = new Fruit(req.body)
	fruit.save((err, ret) => {
		if (err) {
			return res.status(500).send('服务器错误')
		}
		res.status(200).send('success')
	})
})

// 删除某一类 
router.post('/handleRemove', (req, res) => {

	Fruit.deleteOne({
		_id: req.body.id
	}, (err) => {
		if (err) {
			return res.status(500).send('服务器错误')
		}
	})
	res.status(200).send('success')
})

module.exports = router