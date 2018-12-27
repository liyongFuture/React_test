import React, {
  Component,
  Fragment
} from 'react';
import {
  Col,
  Button,
  Modal,
  message
} from 'antd';

import Axios from 'axios'
const qs = require('qs');
const confirm = Modal.confirm;



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

  //删除某一项
  showDeleteConfirm(id) {
    let that = this
    try {
      confirm({
        title: '你确定删除该产品吗？',
        okText: 'Yes',
        okType: 'danger',
        cancelText: 'No',
        async onOk() {
          let result = await Axios.post('http://localhost:3030/handleRemove', qs.stringify({
            id
          }))
          if (result.status === 200) {
            message.success('删除成功', 1);
            that.props.getAllList()
          }
        },
        onCancel() {
          message.error('您取消删除该产品', 1);
        },
      });

    } catch (err) {
      console.log(err)
    }


  }

  handleRemove() {

  }


  render() {
    return (
      <Fragment>
       <Col span={12}>
            <div style={{borderBottom:'1px solid #999',marginRight:'10px',position:'relative'}}>
                <span className='closeFruit' onClick={this.showDeleteConfirm.bind(this,this.props.id)}>X</span>
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