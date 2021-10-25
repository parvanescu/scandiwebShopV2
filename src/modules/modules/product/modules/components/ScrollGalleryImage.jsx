import styled from "styled-components";
import React, {Component} from "react";

const GalleryImage = styled.img`
  width: 79px;
  height: 80px;
  object-fit: contain;
`


class ScrollGalleryImage extends Component {
    render() {

        return (
                <GalleryImage src={this.props.src} onClick={()=>this.props.onClick()}/>
        )
    }
}

export default ScrollGalleryImage;