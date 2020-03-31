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
        
        {/* placed the instances of NavButtons and Form in a seperate, nested div so I could flex them */}

        <div id='rightSide'>
          <Form id='form'/>
          <NavButtons id='navbuttons'/>
        </div>
      </div>
    );
  }

}