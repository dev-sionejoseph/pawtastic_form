import './App.css';
import React, {Component} from 'react';


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {value:''}

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleSubmit(event) {
    alert(`A name was submitted: ${this.state.value}`);
    event.preventDefault();

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input type="text" value={this.state.value} onChange={this.handleChange}/>

          <image src="#">Camera Icon</image>
          <a href='#'>Upload a Photo</a>

          Breed
          <input type="text" value={this.state.value} onChange={this.handleChange}/>

          Birthday
          <input type="text" value={this.state.value} onChange={this.handleChange}/>

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

          <label>
            Weight
            <select>
              <option value="0-25">0-25 lbs</option>
              <option value="25-50">25-50 lbs</option>
              <option value="50-100">50-100 lbs</option>
              <option value="100up">100+ lbs</option>
            </select>
          </label>

          <input type="submit" value="Submit!"/>
        </label>
      </form>
    );
  }

}