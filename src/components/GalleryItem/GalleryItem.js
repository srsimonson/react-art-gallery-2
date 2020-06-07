import React, {Component} from 'react';
import axios from 'axios';

class GalleryItem extends Component {

    state = {
        toggleValue: true,
    }

    // Toggle displayPainting or displayDescription
    togglePainting = () => {
        this.setState({
            toggleValue: !this.state.toggleValue
        })
    }

    // PUT request to update like counter
    updateLikes = () => {
        let id = this.props.item.id;
        axios.put( `/gallery/like/${id}` )
            .then(response => {
              this.props.getGallery()
            })
            .catch(error => {
            alert(`Like button not working`);
            console.log('ERROR with PUT in app.js', error);
            })
        }

    render() {
        let displayPainting = <img className="resize" src={this.props.item.path} alt=''/>;
        let displayDescription = <p className="resize"> {this.props.item.description}</p>;
        let likes = this.props.item.likes;

        return (
            <div className="box">
                <button className="painting" onClick={this.togglePainting}>
                    {this.state.toggleValue ? displayPainting : displayDescription}
                </button>  
                <br/>
                <button onClick={this.updateLikes}>love it!</button>
                <p>{likes === 0 ? 'No people love this :(' : `${likes} people love this!`}</p>
            </div>
        )
    }
}

export default GalleryItem;