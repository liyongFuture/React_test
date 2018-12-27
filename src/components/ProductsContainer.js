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
                        this.props.productsList.map((item, index) => {
                            return <Picframe 
                                quantity={item.quantity} 
                                key = {index} 
                                name={item.name} 
                                addCart = {this.props.addCart} 
                                index = {index} 
                                price = {item.price} 
                                id = {item.id}  
                                getAllList = { this.props.getAllList } 
                            />
                        })
                    }
                </Row>
            </div>
        )
    }
}

export default ProductsContainer