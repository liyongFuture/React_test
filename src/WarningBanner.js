import React, {
  Component
} from 'react';

function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <div className="warning">
      Warning!
    </div>
  );
}

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showWarning: true,
      val: '',
      isGoing: true,
      numberOfGuests: 2
    }
    this.myRef = React.createRef();
    this.myInput = React.createRef();
    this.handleToggleClick = this.handleToggleClick.bind(this);
    this.handleChange = this.handleChange.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
    this.testRef = this.testRef.bind(this)
  }

  handleToggleClick() {
    this.setState(pre => ({
      showWarning: !pre.showWarning
    }));
  }

  handleChange(e) {
    this.setState({
      val: e.target.value
    })
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    console.log(`${value} + ${name}`)

    // es6的计算属性名
    this.setState({
      [name]: value
    });

  }

  testRef() {
    const node = this.myRef.current
    console.log(this.myInput.current.value)
  }

  handleSubmit(e) {
    console.log(this.myInput.current.value)
    e.preventDefault()
  }

  testChange() {

  }
  // 表单元素中，如 input 如果使用 value 设置默认值，后续则不能进行更新，但是需要默认值得情况下，则使用 defaultValue 来设置默认值

  // <input type="checkbox"> 和 <input type="radio"> 支持 defaultChecked，<select> 和 <textarea> 支持 defaultValue.
  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
        <br/>
        <input value = {this.state.val} onChange = { this.handleChange }/>

        <p ref = {this.myRef} onClick = { this.testRef }>测试 ref </p>

        

        <form  onSubmit={this.handleSubmit}>
        
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        
        <br />
        
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        <br/>

       <input type='text' ref = {this.myInput} defaultValue = 'liyong' onChange = {this.testChange}/>
       <input type='submit' value='submit'/>
      </form>

      </div>
    );
  }
}


export default Page;