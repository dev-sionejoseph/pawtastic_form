import './App.css';
import React, {Component} from 'react';


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
        name:'',
        breed:'',
        birthday:'', 
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    }
  

  handleChange(event) {
    event.preventDefault()

    let title = event.target.name

    this.setState({
      [title]: event.target.value,
    })
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <div>

        </div>
        <div>
          <p>Yay, we love dogs! Give us the basics about your pup.</p>
          <form onSubmit={this.handleSubmit}>
            <label>
              Name
              <input type="text" name='name' value={this.state.name} onChange={this.handleChange}/>
              
            </label>
            <label>
             <img src='#' alt='Camera Icon'></img>
             <input type="file" name='photo' value={this.state.photo} placeholder='Upload a photo'/>
            </label>

            <br/>

            <label>  
              Breed
              <input type="text" name='breed' value={this.state.breed} onChange={this.handleChange}/>
            </label>
            <label>
              Birthday
              <input type="text" name='birthday' value={this.state.birthday} onChange={this.handleChange}/>
            </label>

            <br />

            <label>
              Gender
              <select>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
              </select>
            </label>
            <label>
              Spayed or Neutered
              <select>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </label>

            <br />
            
            <label>
              Weight
              <select>
                <option value="0-25">0-25 lbs</option>
                <option value="25-50">25-50 lbs</option>
                <option value="50-100">50-100 lbs</option>
                <option value="100up">100+ lbs</option>
              </select>
            </label>
          </form>
        </div>
        <div>
          <button value="Back">Back</button>
          <button value="Next">Next</button>
        </div>

      </div>
    );
  }

}