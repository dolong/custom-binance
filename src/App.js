import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import BootstrapTable1 from 'react-bootstrap-table-next';
import binApi from'./binance.js';

// es5 
const test = binApi.test
const products = [ {id: 'test', name:'test2', price: test }];
const columns = [{
  dataField: 'id',
  text: 'Product ID'
}, {
  dataField: 'name',
  text: 'Product Name'
}, {
  dataField: 'price',
  text: 'Product Price'
}];

  
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <div className="row">
          <div class="col-md-2 col-md-offset-5">
          <BootstrapTable1 className="table table-bordered" keyField='id' data={ products } columns={ columns } /></div> 
                   
          </div>
        </p>
      </div>
    );
  }
}

export default App
