import React, {
  Component,
  Fragment
} from 'react'
import {
  Button
} from 'antd';
import '../assets/css/style.css';


class Cart extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isHide: false
    }
  }

  // componentWillMount() {
  //     console.log(this.props.cardList)
  // }

  handleClick() {
    this.setState(pre => ({
      isHide: !pre.isHide
    }))

  }

  render() {
    let htmlStr;
    let arr = []
    for (let item in this.props.cardList) {
      arr.push(this.props.cardList[item])
    }
    if (JSON.stringify(this.props.cardList) === '{}') {
      htmlStr = <div>您暂时没有选择任何商品</div>;
    } else {
      htmlStr = arr.map((item, index) => {
        return <div className='cardItem' key = {index}>
                           <div>
                               <p>名称：{item.name}</p>
                               <p>单价：{item.price}</p>
                               <p>数量：{item.num}</p>
                           </div>
                       <div className='closeBtn'>X</div>
                   </div>
      })

    }
    return (
      <Fragment>
               <div style={{ margin:'60px 0 30px'}}>
                   <Button onClick = {this.handleClick.bind(this)}>我的购物车</Button>
               </div>
                {
                    this.state.isHide === true ? htmlStr : ''
                }
            </Fragment>
    )
  }
}

export default Cart