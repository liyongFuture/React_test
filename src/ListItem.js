import React, {
	Component
} from 'react';
import './style.css'

class ListItem extends Component {
	// 子组件向父组件通信，子组件必须要调用父组件传递过来的方法
	del(index) {
		// console.log(index)
		const {
			del
		} = this.props;

		del(index)
	}
	// handleDel(index) {
	// 	let list = [...this.props.list]
	// 	list.splice(index, 1)
	// 	this.props.getNewList()
	// }

	render() {
		return (
			// <li onClick = {this.del.bind(this)} >{ this.props.content } </li>
			<div>
				<WelcomeDialog />
				<BlueDatePicker />
				<ul>
				{

					this.props.list.map((item,index) => {
						return <li key = {index} onClick = {this.del.bind(this,index)} className = 'li'> {item} </li>
					})
				}
			</ul>
			</div>
		)
	}
}

// 可以在这个给子组件传标签
function WelcomeDialog() {
	return (
		<FancyBorder>
			<p>p标签</p>
	    </FancyBorder>
	);
}
// 子组件通过 props.children 接收
function FancyBorder(props) {
	return (
		<div className={'FancyBorder FancyBorder-' + props.color}>
	      {props.children}
	    </div>
	);
}

const MyComponents = {
	DatePicker: function DatePicker(props) {
		return <div>Imagine a {props.color} datepicker here.</div>;
	}
}

function BlueDatePicker() {
	return <MyComponents.DatePicker color="blue" />;
}

export default ListItem;