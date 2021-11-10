import React, {Component} from "react";
import styled from "styled-components";
import {getCurrencyState, getItemQuantityById} from "../contexts/store/selectors";
import {connect} from "react-redux";
import PlusMinusIcon from "../ui/icons/PlusMinusIcon";
import {CartButton} from "../ui/cart/CartItem";
import {updateItemQuantity, updateOptionChoice} from "../contexts/store/actions";

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
    line-height: 160%!important;
    margin: 0 !important;
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
  flex-direction: column;
  row-gap: 8px;
  justify-content: flex-start;
  max-height: 30px;
  overflow: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`

const InfoOptionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 8px;
  justify-content: flex-start;
`


const InfoQuantityWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 32px;
  text-align: center;
  
  .quantity{
    font-weight: 500!important;
    font-family: Raleway,sans-serif!important;
    font-size: 16px;
    line-height: 25.6px;
  }
  
  
  p {
    margin: 0 !important;
  }
`

class CartDropdownItem extends Component {

    handleChangeProduct(isPlus) {
        let newQuantity = this.props.itemQuantity(this.props.product.id,this.props.itemIndex)
        if (isPlus)
            newQuantity += 1
        else
            newQuantity -= 1
        this.props.updateItemQuantity(this.props.product.id,this.props.itemIndex, newQuantity)
    }

    handleOptionChoice(id,attrIdx,newOptionId){
        this.props.updateOptionChoice(id,this.props.itemIndex,attrIdx,newOptionId)
    }


    render() {
        return (
            <MainContainer>
                <InfoContainer>
                    <InfoWrapper>
                        <InfoTextWrapper>
                            <p className="title">{this.props.product.brand}</p>
                            <p className="title">{this.props.product.name.substring(0,12)}</p>
                            <p className="price">
                                {this.props.currency.symbol}
                                {this.props.product.prices.filter(price => price.currency === this.props.currency.label)[0].amount}
                            </p>
                        </InfoTextWrapper>
                        <InfoOptionsWrapper>
                            {this.props.product.attributes.map((attribute, aIdx) => {
                                return <InfoOptionsContainer key={`option-container-${aIdx}`}>
                                    {attribute.items.map((option, oIdx) => {
                                        return <CartButton
                                            key={`option-button-${aIdx}-${oIdx}`}
                                            width={24} height={24} isSwatch={attribute.type === "swatch"}
                                            color={option.value}
                                            isOption
                                            selected={option.selected}
                                            onClick={()=>this.handleOptionChoice(this.props.product.id,aIdx,option.id)}
                                        >{attribute.type !== "swatch" && <p>{option.value}</p>}</CartButton>
                                    })}
                                </InfoOptionsContainer>
                            })}
                        </InfoOptionsWrapper>
                    </InfoWrapper>
                    <InfoQuantityWrapper>
                        <CartButton width={24} height={24}>
                            <PlusMinusIcon isPlus width={22} height={22}
                                           onClickCallback={() => this.handleChangeProduct(true)}/>
                        </CartButton>
                        <p className="quantity">{this.props.itemQuantity(this.props.product.id,this.props.itemIndex)}</p>
                        <CartButton width={24} height={24}>
                            <PlusMinusIcon width={22} height={22}
                                           onClickCallback={() => this.handleChangeProduct(false)}/>
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
    itemQuantity: (id,itemIndex) => getItemQuantityById(state, id,itemIndex)
})

const mapDispatchToProps = (dispatch) => ({
    updateItemQuantity: (id,itemIndex, quantity) => dispatch(updateItemQuantity(id,itemIndex, quantity)),
    updateOptionChoice: (id,itemIndex,attrIdx,optionId) => dispatch(updateOptionChoice(id,itemIndex,attrIdx,optionId))
})

export default connect(mapStateToProps, mapDispatchToProps)(CartDropdownItem);