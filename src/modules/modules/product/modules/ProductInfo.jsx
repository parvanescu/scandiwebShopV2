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
import {addItemToCart} from "../../../core/contexts/store/actions";
import {connect} from "react-redux";


class ProductInfo extends Component {


    constructor(props) {
        super(props);
        this.state = {
            ...props.product
        }

    }

    componentDidUpdate(prevProps, prevState, snapshot) {

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
                    <CartButton product={this.props.product} clickedCallback={()=>this.props.addItemToCart(this.props.product)}/>
                    <ProductDescription>{HTMLReactParser(this.props.product.description)}</ProductDescription>
                </ProductInteraction>
            </ProductInfoWrapper>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    addItemToCart: (item) => dispatch(addItemToCart(item))
})

export default connect(null,mapDispatchToProps)(ProductInfo);