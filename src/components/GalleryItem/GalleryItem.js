import React, {Component} from 'react';

class GalleryItem extends Component {
    
    render() {
        return (
            <div>
                <p>hi</p>
                
                {this.props.updateLikes}
            </div>
        )
    }

}

export default GalleryItem;