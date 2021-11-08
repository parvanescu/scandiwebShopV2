import React, {Component} from "react";
import {ButtonsWrapper, CartButton, QuantityDisplay} from "../../../../core/ui/cart/CartItem";
import {getItemQuantityById} from "../../../../core/contexts/store/selectors";
import {updateItemQuantity} from "../../../../core/contexts/store/actions";
import {connect} from "react-redux";
import PlusMinusIcon from "../../../../core/ui/icons/PlusMinusIcon";

class CartItemButtons extends Component {
    render() {
        const {product} = this.props;

        return (
            <ButtonsWrapper>
                <CartButton width={45} height={45}>
                    <PlusMinusIcon
                        width={43}
                        height={43}
                        isPlus={true}
                        onClickCallback={() => this.props.changeQuantity(product.id, this.props.getQuantity(product.id) + 1)}/>
                </CartButton>
                <QuantityDisplay>
                    {this.props.getQuantity(this.props.product.id)}
                </QuantityDisplay>
                <CartButton width={45} height={45}>
                    <PlusMinusIcon
                        width={43}
                        height={43}
                        onClickCallback={() => this.props.changeQuantity(product.id, this.props.getQuantity(product.id) - 1)}/>
                </CartButton>
            </ButtonsWrapper>
        );
    }
}

const mapStateToProps = state => ({
    getQuantity: (id) => getItemQuantityById(state, id)
})

const mapDispatchToProps = dispatch => ({
    changeQuantity: (id, quantity) => dispatch(updateItemQuantity(id, quantity))
})


export default connect(mapStateToProps, mapDispatchToProps)(CartItemButtons);