import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <p>Gallery goes here</p>
        <img className="resize" src="images/goat_small.jpg" alt=""/>
        <img className="resize" src='images/all_colors_smear.jpg' alt=""/>
        <img className="resize" src='images/blue_orange_x.jpg' alt=""/>
        <img className="resize" src='images/blue_red_smear.jpg' alt=""/>
        <img className="resize" src='images/green_grey_rip.jpg' alt=""/>
        <img className="resize" src='images/orange_splat_rip.jpg' alt=""/>
        <img className="resize" src='images/pink_blue_circles.jpg' alt=""/>
        <img className="resize" src='images/purple_yellow_circles.jpg' alt=""/>
        <img className="resize" src='images/red_green_circles.jpg' alt=""/>
        <img className="resize" src='images/yellow_brown_splat.jpg' alt=""/>
        
      </div>
    );
  }
}

export default App;
