import React, {Component} from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
import axios from 'axios';

class GalleryList extends Component {
    state = {
        toggleValue: false
    }

    clickEvent = () =>{
        console.log('like button clicked');      
    }

    updateLikes = (item) => {
        console.log('in updateLikes');
        
        axios.put(`/gallery/like/${item.id}`, {} )
            .then(response => {
            this.getGallery()
            })
            .catch(error => {
            alert(`Like button not working`);
            console.log('ERROR with PUT in app.js', error);
            })
        }

    render() {
        return (
            <>
                {this.props.displayGallery.map((item) => {
                    return <div className="container" key={item.id}>
                                <img className="resize" src={item.path} alt={item.description}/>
                                <br/>
                                <button onClick={this.clickEvent}>love it!</button>
                                <p>{item.likes} people love this!</p>
                                <GalleryItem updateLikes={this.updateLikes}/>

                            </div>
                })}
            </>
        )
    }
}

export default GalleryList;