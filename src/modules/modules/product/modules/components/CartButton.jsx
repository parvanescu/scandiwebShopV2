import React, {Component} from "react";
import {AddToCartButton} from "../../../../core/ui/product/Button";

class CartButton extends Component {

    render() {
        return (
            <AddToCartButton
                onClick={() => this.props.clickedCallback()}
            >
                <p>ADD TO CART</p>
            </AddToCartButton>
        )
    }
}

export default CartButton