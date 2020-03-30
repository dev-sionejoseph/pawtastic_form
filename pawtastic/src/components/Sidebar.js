import React, {Component} from 'react';

export default class Sidebar extends Component {
  
    render() {
      return (
        <div id='navWrap'>
            <nav>
                {/* here I will add the nav elements, but make them "display:none" since they have nowhere to lead yet.
                also, they aren't quite working like I'd like. */}
                <input type='radio' id='Human Profile'/>
                <label>Human Profile</label>
                <input type='radio' id='Pet Basics'/>
                <label>Pet Basics</label>
                <input type='radio' id='Pet Details'/>
                <label>Pet Details</label>
                <input type='radio' id='Confirm'/>
                <label>Confirm</label>


            </nav>
        </div>
      );
    }
  
  }

