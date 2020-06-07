import React, {Component} from 'react';
import axios from 'axios';

class GalleryItem extends Component {

    state = {
        toggleValue: true,
        likes: this.props.item.likes
    }

    togglePainting = () => {
        this.setState({
            toggleValue: !this.state.toggleValue
        })
        
    }

    displayLikes = () => {
        console.log('in displayLikes');
        this.setState({
            likes: this.state.likes
        })
        console.log('hi', this.state.likes);
    }

    updateLikes = () => {
        let id = this.props.item.id;
        axios.put( `/gallery/like/${id}` )
            .then(response => {
            console.log('this.props.item.likes', this.props.item.likes);  
            console.log('id:', id);
              this.props.getGallery()
                // what goes here?! The new set.state?
            })
            .catch(error => {
            alert(`Like button not working`);
            console.log('ERROR with PUT in app.js', error);
            })
        }

    render() {
        let displayPainting = <img className="resize" src={this.props.item.path} alt=''/>;
        let displayDescription = <p className="resize">{this.props.item.description}</p>;
        // let likes = this.state.likes
        return (
            <div>
                <button className="painting" onClick={this.togglePainting}>
                    {this.state.toggleValue ? displayPainting : displayDescription}
                </button>  
                <br/>
                <button onClick={this.updateLikes}>love it!</button>
                <p>{this.props.item.likes} people love this!</p>
            </div>
        )
    }
}

export default GalleryItem;