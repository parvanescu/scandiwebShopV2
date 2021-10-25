import React, {Component} from "react";
import { ScrollWrapper} from "../../../core/ui/product/ProductScrollUI";
import ScrollGalleryImage from "./components/ScrollGalleryImage";


class ProductScrollGallery extends Component {

    constructor(props) {
        super(props);
        this.state = {
            images: props.images
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.images !== this.props.images){
            this.setState(prevState => ({...prevState,images:this.props.images}))
        }
    }


    render() {

        return (
                <ScrollWrapper>
                    {this.state.images.map((img,idx)=>(
                        <ScrollGalleryImage src={img} key={`gallery-${idx}`} onClick={()=>this.props.setImage(img)}/>
                    ))}
                </ScrollWrapper>
        )
    }
}

export default ProductScrollGallery