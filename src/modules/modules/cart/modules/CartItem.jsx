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
import {updateOptionChoice} from "../../../core/contexts/store/actions";


class CartItem extends Component {

    handleOptionChange(id,attrIdx,optionId){
        this.props.updateOptionChoice(id,this.props.itemIdx,attrIdx,optionId)
    }

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
                            return <AttributeGroup key={`attribute-group-${attrIdx}`}>
                                {
                                    attrList.items.map((attribute, idx) => (
                                        <Option key={`cart-option-${attrIdx}-${idx}`}
                                                backgroundColor={attrList.type === "swatch" ? attribute.value : null}
                                                selected={attribute.selected}
                                                onClick={()=>this.handleOptionChange(this.props.product.id,attrIdx,attribute.id)}
                                        >
                                            {attrList.type !== "swatch" && <p>{attribute.displayValue}</p>}
                                        </Option>
                                    ))
                                }
                            </AttributeGroup>
                        })}
                    </CartOptionsContainer>
                </CartItemInfo>
                <CartItemInteraction>
                    <CartItemButtons product={this.props.product} itemIdx={this.props.itemIdx}/>
                    <CartGallery images={this.props.product.gallery}/>
                </CartItemInteraction>
            </CartItemWrapper>
        );
    }
}

const mapStateToProps = state => ({
    currency: getCurrencyState(state)
})

const mapDispatchToProps = dispatch => ({
    updateOptionChoice: (id,itemIndex,attrIdx,optionId) => dispatch(updateOptionChoice(id,itemIndex,attrIdx,optionId))
})

export default connect(mapStateToProps,mapDispatchToProps)(CartItem);