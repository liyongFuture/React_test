import React, {
    Component
} from 'react'
import {
    Row
} from 'antd';
import Picframe from './Picframe'


class ProductsContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }



    render() {
        return (
            <div>
               <Row>
                    {
                        this.props.productsList.map((item,index)=><Picframe quantity={item.quantity} source={item.path} key = {index} name={item.name} addCart = {this.props.addCart} index = {index} price = {item.price}/>)
                    }
                </Row>
            </div>
        )
    }
}

export default ProductsContainer