import React, {
  Component,
  Fragment
} from 'react';
import {
  Col,
  Button
} from 'antd';



class Picframe extends Component {

  constructor(props) {
    super(props)
    this.state = {

    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.addCart(this.props.index)
  }

  // <p><img src = {this.props.source} alt={this.props.name}/></p>

  render() {
    return (
      <Fragment>
       <Col span={12}>
            <div>
                
                <h6>名称：{this.props.name}</h6>
                <p>单价：{this.props.price}</p>
                    <p>
                        <span style={{ marginRight:'40px'}}>数量：{this.props.quantity}</span>
                        <Button type='primary' onClick={this.handleClick}>加入购物车</Button>
                    </p>
            </div>
          </Col>
      </Fragment>
    )
  }
}

export default Picframe