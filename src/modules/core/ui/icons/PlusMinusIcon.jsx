import React, {Component} from "react";
import styled from "styled-components";

const IconWrapper = styled.div`
  width: 43px;
  height: 43px;
  position: relative;
`

const MinusPart = styled.div`
  width: 15px;
  height: 2px;
  background-color:  #1D1F22;
  position:absolute;
  left: 14px;
  top: 20.5px;
`

const PlusPart = styled.div`
  position: absolute;
  height: 15px;
  width: 2px;
  top: 14px;
  left: 20.5px;
  background-color: #1D1F22;
`


class PlusMinusIcon extends Component {

    render() {
        return (
            <IconWrapper onClick={()=>this.props.onClickCallback()}>
                <MinusPart/>
                {this.props.isPlus && <PlusPart/>}
            </IconWrapper>
        );
    }
}

export default PlusMinusIcon;