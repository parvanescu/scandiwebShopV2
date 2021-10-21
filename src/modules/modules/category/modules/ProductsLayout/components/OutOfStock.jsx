import React, {Component} from "react";
import styled from "styled-components";

const OutOfStockContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  width: 354px;
  height: 330px;
  position: absolute;
  
  p{
    color: rgba(141, 143, 154, 1)!important;
    font-weight: 400!important;
    font-size: 24px!important;
    line-height: 38.4px!important;
  }
`

class OutOfStock extends Component {
    render() {
        return (
            <OutOfStockContainer>
                <p>OUT OF STOCK</p>
            </OutOfStockContainer>
        );
    }
}

export default OutOfStock