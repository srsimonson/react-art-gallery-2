import React, { Component } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
// import GalleryItem from '../GalleryItem/GalleryItem';
import axios from 'axios';

class App extends Component {

  state = {
    displayGallery: [],
  }

  componentDidMount() {
    this.getGallery();
  }

  // Display gallery to DOM
  getGallery = () => {
    axios.get('/gallery')
    .then(response => {
      this.setState({
        displayGallery: response.data
      })
    })
    .catch( error => {
      alert('Can not display gallery. ERROR in GET request in app.js');
      console.log('Error with GET in App.js:', error);
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Steven Simonson | IMPULSE MOLD MINIMIZE BLOCK (selected works) | 2006 - 2010</h1>
          <p> REACT demo. Click on picture to toggle description.</p>
        </header>
        <br/>
        <GalleryList displayGallery={this.state.displayGallery}
                     getGallery={this.getGallery}/>
      </div>
    );
  }
}

export default App;
