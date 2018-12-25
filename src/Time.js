import React, {
	Component
} from 'react';

// 组件生成的方法有两种，一种函数，一种构造函数

function FormattedDate(props) {
	return <h2>It is {props.time}.</h2>;
}

function UserGreeting(props) {
	return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
	return <h1>Please sign up.</h1>;
}

function Greeting(props) {
	const isLoggedIn = props.isLoggedIn;
	if (isLoggedIn) {
		return <UserGreeting />;
	}
	return <GuestGreeting />;
}

function Logout(props) {
	return <button onClick = { props.onClick }> logout </button>
}

function Login(props) {
	return <button  onClick = { props.onClick }> login </button>
}

class Time extends Component {
	constructor(props) {
		super(props)
		this.state = {
			time: new Date().toLocaleTimeString(),
			isLoggedIn: true
		}
		// this.handleClick = this.handleClick.bind(this)
		this.handleLogoutClick = this.handleLogoutClick.bind(this)
		this.handleLoginClick = this.handleLoginClick.bind(this)
	}

	tick() {
		this.setState({
			time: new Date().toLocaleTimeString()
		});
	}

	componentDidMount() {
		// 组件插入 DOM 后执行的函数
		this.timerID = setInterval(
			() => this.tick(),
			1000
		);
	}

	componentWillUnmount() {
		// 组件卸载后执行的函数
		clearInterval(this.timerID);
	}

	// handleClick() {
	// 	this.setState(prevState => ({
	// 		isLoggedIn: !prevState.isToggleOn
	// 	}));
	// }

	handleLogoutClick() {
		this.setState({
			isLoggedIn: false
		})
	}

	handleLoginClick() {
		this.setState({
			isLoggedIn: true
		})
	}

	render() {
		const isLoggedIn = this.state.isLoggedIn;

		// let button = null;

		// if (isLoggedIn) {
		// 	button = ;
		// } else {
		// 	button = ;
		// }


		return (
			<div>
		      <h2> {this.state.time} </h2>
		      <FormattedDate time = { this.state.time } />
			  <Greeting  isLoggedIn = {isLoggedIn}/> 

			  {
			  	isLoggedIn ? <Logout onClick = {this.handleLogoutClick} /> : <Login onClick={this.handleLoginClick} />
			  }

		    </div>
		)
	}
}



export default Time;