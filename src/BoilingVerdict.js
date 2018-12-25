import React, {
  Component,
  Fragment
} from 'react';

function BoilingVerdict(props) {
  return props.celsius >= 100 ? <p>水开了</p> : <p>水没法开</p>
}

// const scaleNames = {
//   c: 'Celsius',
//   f: 'Fahrenheit'
// }

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

class TemperatureInput extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(e) {
    // this.setState({
    //   temperature: e.target.value
    // })
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const temperature = this.props.temperature;
    return (
      <Fragment>
        <input value={temperature} onChange = {this.handleInputChange}/>
      </Fragment>
    );
  }
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: '',
      scale: 'c'
    }

    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
  }

  handleCelsiusChange(temperature, abc) {
    this.setState({
      scale: 'c',
      temperature
    });
  }

  handleFahrenheitChange(temperature) {
    this.setState({
      scale: 'f',
      temperature
    });
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <div>
        温度：<TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.handleCelsiusChange} abc = { this.state.abc }/>

        <br/>
        摄氏度：<TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange} />

        <BoilingVerdict celsius={parseFloat(celsius)} />

      </div>
    );
  }
}


export default Calculator;