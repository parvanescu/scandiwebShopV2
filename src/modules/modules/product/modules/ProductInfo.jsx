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
            product: {...props.product,
                attributes: props.product.attributes.map((attr => ({...attr,items: attr.items.map(item=>({...item,selected:false}))})))}
        }

    }

    handleAddToCart() {
        let selectedOptions = Array(this.state.product.attributes.length).fill(false);
        this.state.product.attributes.forEach((attr,idx)=>attr.items.forEach(item=>selectedOptions[idx]=selectedOptions[idx]||item.selected))
        if(!selectedOptions.includes(false) && this.state.product.inStock)
        this.props.addItemToCart(this.state.product)
        //todo: add message to toast
        else console.log("can't add")
    }

    handleChangeOption(attrIdx, optionId) {
        this.setState(prevState => ({
            ...prevState,
            product: {
                ...prevState.product,
                attributes: prevState.product.attributes.map((attribute, attributeIndex) =>
                    attributeIndex === attrIdx ? {
                        ...attribute,
                        items: attribute.items.map(item => item.id === optionId ? {...item, selected: true} : {
                            ...item,
                            selected: false
                        })
                    } : attribute
                )
            }
        }))
    }

    render() {
        return (
            <ProductInfoWrapper>
                <ProductImg src={this.props.src}/>
                <ProductInteraction>
                    <TitleWrapper>
                        <ProductHeader>{this.state.product.brand}</ProductHeader>
                        <ProductName>{this.state.product.name}</ProductName>
                    </TitleWrapper>
                    <OptionsChoice attributes={this.state.product.attributes}
                                   changeOption={(attrIdx, id) => this.handleChangeOption(attrIdx, id)}/>
                    <PriceDisplay prices={this.state.product.prices}/>
                    <CartButton product={this.state.product} clickedCallback={() => this.handleAddToCart()}/>
                    <ProductDescription>{HTMLReactParser(this.state.product.description)}</ProductDescription>
                </ProductInteraction>
            </ProductInfoWrapper>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    addItemToCart: (item) => dispatch(addItemToCart(item))
})

export default connect(null, mapDispatchToProps)(ProductInfo);