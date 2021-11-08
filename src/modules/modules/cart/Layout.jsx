import React,{Component} from "react";
import Cart from "./pages/Cart";
import {CartWrapper} from "../../core/ui/cart/CartUI";

class Layout extends Component{
    render() {
        return (
            <CartWrapper>
                <Cart/>
            </CartWrapper>
        );
    }
}


export default Layout;