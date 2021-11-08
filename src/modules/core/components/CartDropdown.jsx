import React,{Component} from "react";
import {CartDropdownContainer, CartDropdownTitleWrapper} from "../ui/cart/CartDropdown";
import {getCartItems} from "../contexts/store/selectors";
import {updateItemQuantity} from "../contexts/store/actions";
import {connect} from "react-redux";

class CartDropdown extends Component{

    render() {
        return(
            <CartDropdownContainer>
                <CartDropdownTitleWrapper>
                    <p className="title">My bag,</p>
                    <p className="description">{` ${this.props.items.length} ${this.props.items.length!==1?"items":"item"}`}</p>
                </CartDropdownTitleWrapper>
            </CartDropdownContainer>
        )
    }
}

const mapStateToProps = (state)=>({
    items: getCartItems(state)
})

const mapDispatchToProps = (dispatch) => ({
  updateItemQuantity: (id,quantity) =>{
      dispatch(updateItemQuantity(id,quantity))
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(CartDropdown);