import React, {Component} from "react";
import {
    CartDropdownButton,
    CartDropdownButtonsContainer,
    CartDropdownContainer,
    CartDropdownItemsContainer,
    CartDropdownTitleWrapper,
    CartDropdownTotalContainer, CartMoreItems
} from "../ui/cart/CartDropdown";
import {getCartItems, getCurrencyState} from "../contexts/store/selectors";
import {connect} from "react-redux";
import CartDropdownItem from "./CartDropdownItem";
import {withRouter} from "react-router-dom";

class CartDropdown extends Component {

    itemReducer(prevItem,currentItem){
        return prevItem + currentItem.prices.filter(price => price.currency === this.props.currency.label)[0].amount;
    }

    redirectToCart(){
        this.props.onDropdownRedirect();
        this.props.history.push(`/cart`);
    }

    render() {
        return (
            <CartDropdownContainer>
                <CartDropdownTitleWrapper>
                    <p className="title">My bag,{"  "}</p>
                    <p className="description">{`${this.props.items.length} ${this.props.items.length !== 1 ? "items" : "item"}`}</p>
                </CartDropdownTitleWrapper>
                <CartDropdownItemsContainer>
                    {this.props.items.map((item,idx) => {
                        return <CartDropdownItem itemIndex={idx} key={`cart-item-${idx}`} product={item}/>
                    })}
                    {this.props.items.length>2 && <CartMoreItems><p>More items</p></CartMoreItems>}
                </CartDropdownItemsContainer>
                <CartDropdownTotalContainer>
                    <p className="total">Total</p>
                    <p className="price">{this.props.currency.symbol}
                        {this.props.items.reduce((prevItem,currentItem)=>this.itemReducer(prevItem,currentItem),0).toFixed(2)}
                        </p>
                </CartDropdownTotalContainer>
                <CartDropdownButtonsContainer>
                    <CartDropdownButton onClick={()=>this.redirectToCart()}>
                        <p>VIEW BAG</p>
                    </CartDropdownButton>
                    <CartDropdownButton isCheckout onClick={()=>this.redirectToCart()}>
                        <p>CHECK OUT</p>
                    </CartDropdownButton>
                </CartDropdownButtonsContainer>
            </CartDropdownContainer>
        )
    }
}

const mapStateToProps = (state) => ({
    items: getCartItems(state),
    currency: getCurrencyState(state)
})

export default withRouter(connect(mapStateToProps)(CartDropdown));