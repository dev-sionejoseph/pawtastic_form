import React, {Component} from 'react';

export default class NavButtons extends Component {
    constructor(props) {
      super(props)
      this.state = {
          pages:[], // this would be a pages array, maybe?
          pageNum: 0, // I'd increment or decrement this number when back or next is clicked
          currentPage: '' // I would set this to this.state.pages and set the index to pageNum 
      }
      this.handleNext = this.handleNext.bind(this)
      this.handleBack = this.handleBack.bind(this)
      }
    
  // I would set up the following methods to handle the clicking of the nav buttons.
   
    handleBack(event) { 
    }

    handleNext(event) {
      event.preventDefault();
    }
  
    render() {
      return (
        <div id='navButtons'>
            <button value="Back">Back</button>
            <button value="Next">Next</button>
        </div>
      );
    }
  
  }