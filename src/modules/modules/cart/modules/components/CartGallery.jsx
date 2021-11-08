import React,{Component} from "react";
import {
    CartGalleryButtonContainer,
    CartGalleryContainer, CartGalleryIcon,
    CartGalleryNavigationOverlay,
    CartImage
} from "../../../../core/ui/cart/CartItem";
import leftButton from "../../../../../assets/icons/chevron-left.png"
import rightButton from "../../../../../assets/icons/chevron-right.png"


class CartGallery extends Component{
    constructor(props) {
        super(props);
        this.state={
            currentImage: 0,
            images: props.images
        }
    }

    handleNextImage(currentImage,images){
        console.log(this.state);
        this.setState(prevState=>({...prevState,currentImage:(currentImage+1)%images.length}))
        console.log((this.state.currentImage+1)%images.length);
    }

    handlePrevImage(currentImage,images){
        console.log(this.state);
        this.setState(prevState=>({...prevState,currentImage:(currentImage-1 + images.length)%images.length}))
        console.log((currentImage-1 + images.length)%images.length);
    }


    render() {
        const {currentImage,images} = this.state;

        return (
            <CartGalleryContainer>
                <CartGalleryNavigationOverlay>
                    <CartGalleryButtonContainer>
                        <CartGalleryIcon src={leftButton} onClick={()=>this.handlePrevImage(currentImage,images)}/>
                    </CartGalleryButtonContainer>
                    <CartGalleryButtonContainer>
                        <CartGalleryIcon src={rightButton} onClick={()=>this.handleNextImage(currentImage,images)}/>
                    </CartGalleryButtonContainer>
                </CartGalleryNavigationOverlay>
                <CartImage src={this.state.images[this.state.currentImage]}/>
            </CartGalleryContainer>
        );
    }
}


export default CartGallery;