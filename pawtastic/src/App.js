import React, {Component} from 'react';
import Form from './components/Form';
import NavButtons from './components/NavButtons'
import Sidebar from './components/Sidebar'
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div id='wrapper'> 
        <Sidebar id='sidebar'/>
        <Form id='form'/>
        <NavButtons id='navbuttons'/>
      </div>
    );
  }

}