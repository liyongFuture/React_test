// react  and  node
const express = require('express');
const app = express();
const router = require('./router/index.js');


// 解析 POST 请求
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
	extended: false
}))
app.use(bodyParser.json())

// app.get('/health/fetchdorm', router.fetchDorm);
// app.get('/', function(req, res) {
// 	res.header('Access-Control-Allow-Origin', "http://localhost:3000");
// 	res.send("success")
// });

app.use(router)

app.listen(3030, () => {
	console.log('running.....');
})