import React, {Component} from "react";
import {graphql} from "@apollo/client/react/hoc";
import {getItemById} from "../gql";
import {ProductWrapperUI} from "../../../core/ui/product/ProductWrapperUI";
import ProductScrollGallery from "../modules/ProductScrollGallery";
import ProductInfo from "../modules/ProductInfo";

class Product extends Component {

    constructor(props) {
        super(props);
        this.state = {
            product: null,
            selectedImage: null,
        }

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.data.product !== this.props.data.product) {
            this.setState(prevState => ({
                ...prevState,
                product: this.props.data.product,
                selectedImage: this.props.data.product.gallery[0]
            }))
        }
    }


    render() {
        return (
            <ProductWrapperUI
            >
                {this.state.product && (
                    <>
                        <ProductScrollGallery images={this.state.product.gallery}
                                              setImage={(image) => this.setState(prevState => {
                                                  return ({
                                                  ...prevState,
                                                  selectedImage: image
                                              })})}/>
                        <ProductInfo src={this.state.selectedImage} product={this.state.product}/>
                    </>
                )}

            </ProductWrapperUI>

        )
    }
}

export default graphql(getItemById, {
    options: (props) => ({
        variables: {id: props.id},
    }),
})(Product);