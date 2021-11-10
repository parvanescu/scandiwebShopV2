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
                        onClickCallback={() => this.props.changeQuantity(product.id,this.props.itemIdx, this.props.getQuantity(product.id,this.props.itemIdx) + 1)}/>
                </CartButton>
                <QuantityDisplay>
                    {this.props.getQuantity(this.props.product.id,this.props.itemIdx)}
                </QuantityDisplay>
                <CartButton width={45} height={45}>
                    <PlusMinusIcon
                        width={43}
                        height={43}
                        onClickCallback={() => this.props.changeQuantity(product.id,this.props.itemIdx, this.props.getQuantity(product.id,this.props.itemIdx) - 1)}/>
                </CartButton>
            </ButtonsWrapper>
        );
    }
}

const mapStateToProps = state => ({
    getQuantity: (id,itemIdx) => getItemQuantityById(state, id,itemIdx)
})

const mapDispatchToProps = dispatch => ({
    changeQuantity: (id,itemIndex, quantity) => dispatch(updateItemQuantity(id,itemIndex, quantity))
})


export default connect(mapStateToProps, mapDispatchToProps)(CartItemButtons);