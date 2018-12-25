import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/css/style.css'
// import App from './App';
import Shopping from './components/Shopping'

// const express = require('express')
// const app = express()
ReactDOM.render(<Shopping />, document.getElementById('root'));



//  React   生命周期
// 当 DOM 节点被销毁时，组件调用 componentWillUnmount()
// 当 新插入一个 DOM 节点时，组件调用 componentWillMount() 和 componentDidMount()