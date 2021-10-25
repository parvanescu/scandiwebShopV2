import React, {Component} from "react";
import {
    ProductHeader,
    ProductImg,
    ProductInfoWrapper,
    ProductInteraction,
    ProductName, TitleWrapper
} from "../../../core/ui/product/ProductInfo";
import OptionsChoice from "./components/OptionsChoice";
import PriceDisplay from "./components/PriceDisplay";
import CartButton from "./components/CartButton";
import {ProductDescription} from "../../../core/ui/product/ProductDescription";
import HTMLReactParser from "html-react-parser";


class ProductInfo extends Component {


    constructor(props) {
        super(props);
        console.log(props);
        this.state = {}
    }

    render() {
        return (
            <ProductInfoWrapper>
                <ProductImg src={this.props.src}/>
                <ProductInteraction>
                    <TitleWrapper>
                        <ProductHeader>{this.props.product.brand}</ProductHeader>
                        <ProductName>{this.props.product.name}</ProductName>
                    </TitleWrapper>
                    <OptionsChoice attributes={this.props.product.attributes}/>
                    <PriceDisplay prices={this.props.product.prices}/>
                    <CartButton product={this.props.product}/>
                    <ProductDescription>{HTMLReactParser(this.props.product.description)}</ProductDescription>
                </ProductInteraction>
            </ProductInfoWrapper>
        )
    }
}

export default ProductInfo;