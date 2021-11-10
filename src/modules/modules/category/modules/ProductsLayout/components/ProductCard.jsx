import styled, {css} from "styled-components";
import {Component} from "react";
import {getCurrencyState} from "../../../../../core/contexts/store/selectors";
import {connect} from "react-redux";
import {mapCurrencyToSymbol} from "../../../../../../lib/utils";
import OutOfStock from "./OutOfStock";
import BuyNow from "../../../../../core/ui/BuyNow";
import {withRouter} from "react-router-dom";
import {addItemToCart, addToastItem} from "../../../../../core/contexts/store/actions";


const ProductCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    box-shadow: 0 4px 35px rgba(168, 172, 176, 0.19);

    .buy_icon {
      ${props => props.displayBuyNow && css`display: flex`};
    }
  }

  p {
    color: #1d1f22 !important;
    font-size: 18px !important;
    line-height: 160% !important;
  }
`

const ProductCardHorizontalAlign = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 386px;
  height: 444px;
`

const ProductImage = styled.img`
  width: 354px;
  height: 330px;
  object-fit: contain;
  padding: 16px 16px 24px 16px;
`

const ProductImageWrapper = styled.div`
  position: relative;
`

const ProductName = styled.p`
  margin: 0;
  font-weight: 300;
  text-align: left;
  padding: 0 16px;
`

const ProductValue = styled.p`
  margin: 0;
  font-weight: 600;
  text-align: left;
  padding: 0 16px 16px 16px;
`


class ProductCard extends Component {

    redirectTo(e, productId) {
        e.stopPropagation();
        this.props.history.push(`/product/${productId}`);
    }


    render() {
        return (
            <ProductCardHorizontalAlign pR={this.props.pR} pL={this.props.pL}
                                        onClick={(e) => this.redirectTo(e, this.props.id)}>
                <ProductCardWrapper className="product_card_wrapper" displayBuyNow={this.props.inStock}>
                    <ProductImageWrapper>
                        <ProductImage src={this.props.image}/>
                        <BuyNow onClickCallback={(e) => {
                            e.stopPropagation();
                            if (this.props.inStock) {
                                let productForCart = {
                                    ...this.props.product,
                                    attributes: this.props.product.attributes.map((attr => ({
                                        ...attr,
                                        items: attr.items.map((item,idx) => idx===0?({...item,selected:true}):({...item, selected: false}))
                                    })))
                                }
                                this.props.addItemToCart(productForCart)
                                this.props.addMessageToToast("Success","Item added successfully to cart","success",3000)
                            }
                        }
                        }/>
                    </ProductImageWrapper>
                    <ProductName>{this.props.name}</ProductName>
                    <ProductValue>{mapCurrencyToSymbol(this.props.value.currency) + this.props.value.amount}</ProductValue>
                </ProductCardWrapper>
                {!this.props.inStock && <OutOfStock/>}
            </ProductCardHorizontalAlign>
        );
    }
}

const mapStateToProps = state => (
    {currency: getCurrencyState(state)}
)

const mapDispatchToProps = dispatch => ({
    addItemToCart: (item) => dispatch(addItemToCart(item)),
    addMessageToToast: (title,text,type,time)=> dispatch(addToastItem(title,text,type,time))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductCard));