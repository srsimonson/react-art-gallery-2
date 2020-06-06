import React, {Component} from 'react';
// import axios from 'axios';

class GalleryItem extends Component {

    state = {
        toggleValue: true
    }

    // updateLikes = (item) => {
    //     console.log('item', item);
    //     let likes = item.likes;
    //     console.log('in updateLikes');
        
    //     axios.put(`/gallery/like/${item.id}` )
    //         .then(response => {
    //         // this.props.displayGallery();
    //         console.log('item.id', item.id, likes);
    //         })
    //         .catch(error => {
    //         alert(`Like button not working`);
    //         console.log('ERROR with PUT in app.js', error);
    //         })
    //     }

    clickTest = (item) => {
        // let item = this.props.item
        console.log('clickTest', item.id);
    }

    handleClick = () => {
        this.setState({
            toggleValue: !this.state.toggleValue
        })
    }

    render() {
        // let item = this.props.item
        return (
            <div>
                <button className="painting" onClick={this.handleClick}>
                    {this.state.toggleValue 
                        ? <img className="resize" src={this.props.item.path}/> 
                        : <p className="resize">{this.props.item.description}</p>}
                </button>  
                <br/>
                <button onClick={this.clickTest}>love it!</button>
                <p>{this.props.item.likes} people love this!</p>
                {/* {this.props.updateLikes} */}
            </div>
        )
    }
}

export default GalleryItem;