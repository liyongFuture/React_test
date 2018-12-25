import React, {
	Component
} from 'react';
import Search from './Search'
import ProductsContainer from './ProductsContainer'
import Cart from './Cart'
import Addfruit from './Addfruit'
import Axios from 'axios'
import {
	Row,
	Col
} from 'antd';


class Shopping extends Component {
	constructor(props) {
		super(props)
		this.state = {
			productsList: [],
			cardList: {}
		}
		this.addCart = this.addCart.bind(this)
	}

	componentWillMount() {
		Axios.get('http://localhost:3030/allFruits')
			.then((res) => {
				this.setState({
					productsList: res.data
				})
			})
			.catch((err) => {
				console.log(err);
			});
	}

	searchItem() {

	}

	addCart(index) {
		let productsList = this.state.productsList;
		let cardList = this.state.cardList;
		if (parseInt(productsList[index].quantity) > 0) {
			productsList[index].quantity--;
			let arr = {
				index: productsList[index].index,
				name: productsList[index].name,
				price: productsList[index].price,
				path: productsList[index].path,
			}

			cardList[index] = {
				...arr,
				num: cardList[index] ? cardList[index].num + 1 : 1
			}
			console.log()

		} else if (parseInt(productsList[index].quantity) === 0) {
			alert('已售罄')
		}
		this.setState({
			productsList,
			cardList
		})



	}

	handleRemove() {

	}

	render() {
		return (
			<div className='box'>
				<div style={{width:'700px'}}>
					<div style={{textAlign:'center'}}>
						<h1 style={{color:'green'}}>Welcome To ReactFruit Cart</h1>
					</div>
		            <div>
		                <div style={{"marginLeft":"5%"}}>
		                    <div>
		                    	<Row>
		                    		<Col span = {5}>
		                    			<Addfruit />
		                    		</Col>
		                    		<Col span={14}>
		                    			<Search />
		                    		</Col>
		                    	</Row>
		                        
		                        <hr/>
		                        <ProductsContainer productsList = {this.state.productsList} addCart={this.addCart}  />
		                    </div>
		                </div>
		            </div>
				</div>
				<div style={{width:'300px',padding:'30px'}}>
					<Cart cardList = {this.state.cardList} />
				</div>
            </div>
		);
	}
}


export default Shopping;