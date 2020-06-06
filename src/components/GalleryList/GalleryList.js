import React, {Component} from 'react';

class GalleryList extends Component {
    state = {
        toggleValue: false
    }

    render() {
        return (
            <>
                {this.props.displayGallery.map((item) => {
                    return <>
                        <div class="container">
                            <img className="resize" src={item.path} alt={item.description}/>
                            <br/>
                            <button>Like</button>
                        </div>
                        </>
                })}
            </>
        )
    }
}

export default GalleryList;