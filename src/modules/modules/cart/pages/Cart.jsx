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
            console.log("changed");
            console.log(prevProps.items);
            console.log(this.props.items);
        }
    }

    render() {
        return <div>
            <CartHeader>CART</CartHeader>
            <CartItemsContainer>
                {this.state.items.map(item => {
                    return (
                        <>
                            <CartDivider/>
                            <CartItem product={item}/>
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