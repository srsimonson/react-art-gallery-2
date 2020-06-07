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

  getGallery = () => {
    axios.get('/gallery')
    .then(response => {
      this.setState({
        displayGallery: response.data
      })
    })
    .catch( error => {
      alert('Can not display gallery, please refresh your browser.');
      console.log('Error with GET in App.js:', error);
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Selected Works</h1>
        </header>
        <br/>
        <GalleryList displayGallery={this.state.displayGallery}
                     getGallery={this.getGallery}
                     />
        {/* <GalleryItem getGallery={this.getGallery}/> */}
      </div>
    );
  }
}

export default App;
