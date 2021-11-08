import React, {Component} from "react";
import styled from "styled-components";
import { getCurrencyState, getItemQuantityById} from "../contexts/store/selectors";
import {connect} from "react-redux";
import PlusMinusIcon from "../ui/icons/PlusMinusIcon";
import { CartButton} from "../ui/cart/CartItem";
import {updateItemQuantity} from "../contexts/store/actions";

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  height: 137px;
  width: 100%;
`

const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  max-width: 178px;
`

const PhotoContainer = styled.img`
  width: 105px;
  height: 137px;
  object-fit: contain;
`

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 27px;
`

const InfoTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;

  p {
    font-family: Raleway, sans-serif !important;
    font-size: 16px !important;
    line-height: 160%;
    margin: 0!important;
  }

  .title {
    font-weight: 300 !important;
  }

  .price {
    font-weight: 600 !important;
  }
`

const InfoOptionsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 8px;
  justify-content: flex-start;
`


const InfoQuantityWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  text-align: center;
  
  p{
    margin:0!important;
  }
`

class CartDropdownItem extends Component {

    handleChangeProduct(isPlus){
        let newQuantity = this.props.itemQuantity(this.props.product.id)
        if(isPlus)
            newQuantity+=1
        else
            newQuantity-=1
        this.props.updateItemQuantity(this.props.product.id,newQuantity)
    }


    render() {
        return (
            <MainContainer>
                <InfoContainer>
                    <InfoWrapper>
                        <InfoTextWrapper>
                            <p className="title">{this.props.product.brand}</p>
                            <p className="title">{this.props.product.name}</p>
                            <p className="price">
                                {this.props.currency.symbol}
                                {this.props.product.prices.filter(price => price.currency === this.props.currency.label)[0].amount}
                            </p>
                        </InfoTextWrapper>
                        <InfoOptionsWrapper>

                        </InfoOptionsWrapper>
                    </InfoWrapper>
                    <InfoQuantityWrapper>
                        <CartButton width={24} height={24}>
                            <PlusMinusIcon isPlus width={22} height={22} onClickCallback={()=>this.handleChangeProduct(true)}/>
                        </CartButton>
                        <p>{this.props.itemQuantity(this.props.product.id)}</p>
                        <CartButton width={24} height={24}>
                            <PlusMinusIcon width={22} height={22} onClickCallback={()=>this.handleChangeProduct(false)}/>
                        </CartButton>
                    </InfoQuantityWrapper>
                </InfoContainer>
                <PhotoContainer src={this.props.product.gallery[0]}/>
            </MainContainer>
        );
    }
}

const mapStateToProps = (state) => ({
    currency: getCurrencyState(state),
    itemQuantity: (id)=>getItemQuantityById(state,id)
})

const mapDispatchToProps = (dispatch) => ({
    updateItemQuantity: (id,quantity)=>dispatch(updateItemQuantity(id,quantity))
})

export default connect(mapStateToProps,mapDispatchToProps)(CartDropdownItem);