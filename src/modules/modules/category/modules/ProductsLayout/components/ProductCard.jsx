import styled, {css} from "styled-components";
import {Component} from "react";
import {getCurrencyState} from "../../../../../core/contexts/store/selectors";
import {connect} from "react-redux";
import {mapCurrencyToSymbol} from "../../../../../../lib/utils";
import OutOfStock from "./OutOfStock";
import BuyNow from "../../../../../core/ui/BuyNow";


const ProductCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &:hover{
    box-shadow: 0 4px 35px rgba(168,172,176,0.19);
    .buy_icon{
      display: flex;
    }
  }
  
  p{
    color: #1d1f22!important;
    font-size: 18px!important;
    line-height: 160%!important;
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


class ProductCard extends Component{
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <ProductCardHorizontalAlign pR={this.props.pR} pL={this.props.pL}>
                <ProductCardWrapper>
                    <ProductImageWrapper>
                        <ProductImage src={this.props.image}/>
                        <BuyNow/>
                    </ProductImageWrapper>
                    <ProductName>{this.props.name}</ProductName>
                    <ProductValue>{mapCurrencyToSymbol(this.props.value.currency)+this.props.value.amount}</ProductValue>
                </ProductCardWrapper>
                {this.props.inStock && <OutOfStock/>}
            </ProductCardHorizontalAlign>
        );
    }
}

const mapStateToProps = state => (
    {currency: getCurrencyState(state)}
)

export default connect(mapStateToProps)(ProductCard)