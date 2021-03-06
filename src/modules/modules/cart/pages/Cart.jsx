import React, {Component} from "react";
import {CartDivider, CartHeader, CartItemsContainer} from "../../../core/ui/cart/CartUI";
import {getCartItems} from "../../../core/contexts/store/selectors";
import {connect} from "react-redux";
import CartItem from "../modules/CartItem";

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state={
            items: this.props.items
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.items !== this.props.items){
            this.setState(prevState => ({...prevState,items:this.props.items}))
        }
    }

    render() {
        return <div>
            <CartHeader>CART</CartHeader>
            <CartItemsContainer>
                {this.state.items.map((item,idx) => {
                    return (
                        <>
                            <CartDivider key={`cart-divider-unique-${idx}`}/>
                            <CartItem key={`cart-item-container-unique-${idx}`} itemIdx={idx} product={item}/>
                        </>
                    )
                })}
            </CartItemsContainer>
        </div>
    }
}

const mapStateToProps = (state) => ({
    items: getCartItems(state)
})

export default connect(mapStateToProps, null)(Cart);