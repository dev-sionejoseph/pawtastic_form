import './App.css';
import React, {Component} from 'react';
import Form from './components/Form';
import NavButtons from './components/NavButtons'


export default class App extends Component {
  render() {
    return (
      <div id='wrapper'>
      
        <Form id='form'/>
        <NavButtons id='navbuttons'/>

      </div>
    );
  }

}