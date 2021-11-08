import React, {Component} from "react";
import {
    AttributeGroup,
    CartItemHeader,
    CartItemInfo, CartItemInfoTextGroup,
    CartItemInteraction,
    CartItemName, CartItemPrice,
    CartItemWrapper, CartOptionsContainer
} from "../../../core/ui/cart/CartItem";
import {getCurrencyState} from "../../../core/contexts/store/selectors";
import {connect} from "react-redux";
import {Option} from "../../../core/ui/product/Options";
import CartItemButtons from "./components/CartItemButtons";
import CartGallery from "./components/CartGallery";


class CartItem extends Component {
    render() {
        return (
            <CartItemWrapper>
                <CartItemInfo>
                    <CartItemInfoTextGroup>
                        <CartItemHeader>{this.props.product.brand}</CartItemHeader>
                        <CartItemName>{this.props.product.name}</CartItemName>
                    </CartItemInfoTextGroup>
                    <CartItemPrice>
                        {this.props.currency.symbol}
                        {this.props.product.prices.filter(price => price.currency === this.props.currency.label)[0].amount}
                    </CartItemPrice>
                    <CartOptionsContainer>
                        {this.props.product.attributes.map((attrList, attrIdx) => {
                            return <AttributeGroup>
                                {
                                    attrList.items.map((attribute, idx) => (
                                        <Option key={`cart-option-${attrIdx}-${idx}`}
                                                backgroundColor={attrList.type === "swatch" ? attribute.value : null}>
                                            {attrList.type !== "swatch" && <p>{attribute.displayValue}</p>}
                                        </Option>
                                    ))
                                }
                            </AttributeGroup>
                        })}
                    </CartOptionsContainer>
                </CartItemInfo>
                <CartItemInteraction>
                    <CartItemButtons product={this.props.product}/>
                    <CartGallery images={this.props.product.gallery}/>
                </CartItemInteraction>
            </CartItemWrapper>
        );
    }
}

const mapStateToProps = state => ({
    currency: getCurrencyState(state)
})

export default connect(mapStateToProps)(CartItem);