var express = require('express')
var app = express()



// import React, {
// 	Component,
// 	Fragment
// } from 'react';
// import './App.css';
// import ListItem from './ListItem'
// import Time from './Time'
// import WarningBanner from './WarningBanner'
// import BoilingVerdict from './BoilingVerdict'

// class App extends Component {
// 	constructor(props) {
// 		super(props)
// 		this.state = {
// 			list: ['ly', 'wj'],
// 			val: ''
// 		}
// 		this.handleInput = this.handleInput.bind(this)
// 		this.handleClick = this.handleClick.bind(this)
// 		this.handleDel = this.handleDel.bind(this)
// 	}

// 	handleClick() {
// 		this.setState({
// 			list: [...this.state.list, this.state.val],
// 			val: ''
// 		})
// 	}

// 	handleInput(e) {
// 		this.setState({
// 			val: e.target.value
// 		})
// 	}

// 	handleDel(index) {
// 		let list = [...this.state.list]
// 		list.splice(index, 1)
// 		this.setState({
// 			list
// 		})
// 	}



// 	// 调用这个函数的时候 this 指向这个 button ，后面加上 bind ，改变 this 的指向，指向 react
// 	render() {
// 		return (
// 			<Fragment>
// 				<div>
// 					<input value = {this.state.val} onChange = {this.handleInput} />
// 					<button onClick = {this.handleClick} >add</button>
// 				</div>


// 				<ListItem list = {this.state.list} del = {this.handleDel} />

// 				<Time />

// 				<WarningBanner />

// 				<BoilingVerdict />

// 			</Fragment>
// 		);
// 	}
// }

// export default App;


// // {
// // 						this.state.list.map((item, index) => {
// // 							// 父组件像子组件传值的时候，可以直接通过属性的方式传值，子组件使用 this.props.属性名 接受值
// // 							return <ListItem del = {this.handleDel.bind(this)} content = {item} idx = {index} key = {index} />
// // 										// return <li key = {index} onClick = {this.handleDel.bind(this,index)}> {item} </li>
// // 									})
// // 					}