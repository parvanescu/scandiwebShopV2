import React, {Component} from "react";
import styled from "styled-components";

const IconWrapper = styled.div`
  width: ${props=>props.width}px;
  height: ${props=>props.width}px;
  position: relative;
`

const MinusPart = styled.div`
  width: ${props=>(props.width+2)/3}px;
  height: 2px;
  background-color:  #1D1F22;
  position:absolute;
  left: ${props=>(props.width+2)/3 -1}px;
  top: ${props=>(props.width-2)/2}px;
`

const PlusPart = styled.div`
  position: absolute;
  height: ${props=>(props.width+2)/3}px;
  width: 2px;
  top: ${props=>(props.width+2)/3 -1}px;
  left: ${props=>(props.width-2)/2}px;
  background-color: #1D1F22;
`


class PlusMinusIcon extends Component {

    render() {
        return (
            <IconWrapper onClick={()=>this.props.onClickCallback()} width={this.props.width} height={this.props.height}>
                <MinusPart width={this.props.width} height={this.props.height}/>
                {this.props.isPlus && <PlusPart width={this.props.width} height={this.props.height}/>}
            </IconWrapper>
        );
    }
}

export default PlusMinusIcon;