import styled from "styled-components";
import React, {Component} from "react";
import empty_cart from "../../../assets/icons/empty_cart.png"

const BuyNowIcon = styled.img`
  width: 24px;
  height: 24px;
  z-index: 200;
`

const BuyNowWrapper = styled.div`
  width: 54px;
  height: 54px;
  border-radius: 50%;
  background: #5ECE7B;
  z-index: 3;
  display: none;
  justify-content: center;
  flex-direction: row;
  position: absolute;
  left: 301px;
  top: 320px;
  box-shadow: 0 4px 11px 0 rgba(29, 31, 34, 0.1);
`

const BuyNowVerticalAlign = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`


class BuyNow extends Component {
    render() {
        return (
            <BuyNowWrapper className="buy_icon" onClick={(e) => this.props.onClickCallback(e)}>
                <BuyNowVerticalAlign><BuyNowIcon src={empty_cart}/></BuyNowVerticalAlign>
            </BuyNowWrapper>
        )
    }
}

export default BuyNow