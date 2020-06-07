import React, {Component} from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

class GalleryList extends Component {

    render() {
        return (
            <>
                {this.props.displayGallery.map((item) => {
                    return <div className="container" key={item.id}>
                                <GalleryItem key={item.id} item={item}
                                getGallery={this.getGallery}/>
                            </div>
                })}
            </>
        )
    }
}

export default GalleryList;