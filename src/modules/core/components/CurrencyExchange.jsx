import React, {Component} from "react";
import {ActionLogo, LogoWrapper} from "./LogoImg";
import arrowDown from "../../../assets/icons/arrow-down.png";
import arrowUp from "../../../assets/icons/arrow-up.png"
import {getCurrencyState} from "../contexts/store/selectors";
import {connect} from "react-redux";
import {setCurrency} from "../contexts/store/actions";
import {mapCurrencyToSymbol} from "../../../lib/utils";
import styled, {css} from "styled-components";


const ExchangeWrapper = styled.div`
  position: relative;
`

const ExchangeDropdown = styled.div`
  position: absolute;
  ${props=> props.display === 'true'? css`display: flex`:css`display: none`};
  flex-direction: column;
  justify-content: center;
  width: 114px;
  box-shadow: 0 4px 35px 0 rgba(168, 172, 176, 0.19);
  top: 17.5px;
  left: -55px;
  padding: 20px;
`

const ExchangeDropdownItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  ${props=> props.pB && css`
    padding-bottom: 21px;
  `}
  
  p{
    color: rgba(29, 31, 34, 1);
    font-style: normal!important;
    font-weight: 500!important;
    font-size: 18px!important;
    line-height: 28.8px!important;
    margin: 0;
    cursor: pointer;
  }
  
  &:hover{
    p{
      text-shadow: 2px 2px 5px rgba(168, 172, 176, 1);
    }
  }
`


class CurrencyExchange extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currencies: props.currencies,
            toggled: false
        }
    }

    changeCurrency(currency) {
        this.props.changeCurrency({
            label: currency,
            symbol: mapCurrencyToSymbol(currency)
        })
    }

    render() {
        return (
            <LogoWrapper>
                <ExchangeWrapper>
                    <ActionLogo src={this.state.toggled?arrowUp:arrowDown} width={6} height={3} pT onClick={()=>this.setState(prevState => ({...prevState,toggled: !this.state.toggled}))}/>
                    <ExchangeDropdown display={`${this.state.toggled}`}>
                        {this.props.currencies && this.props.currencies.map((currency, idx) => (
                            <ExchangeDropdownItem key={`currency-${idx}`} pB={idx!==this.props.currencies.length-1} onClick={()=>this.props.changeCurrency(currency)}>
                                <p>{currency.symbol}</p>
                                <p>{currency.label}</p>
                            </ExchangeDropdownItem>
                        ))}
                    </ExchangeDropdown>
                </ExchangeWrapper>
            </LogoWrapper>
        );
    }
}

const mapStateToProps = state => {
    return {currency: getCurrencyState(state)}
}

const mapDispatchToProps = dispatch => ({
    changeCurrency: (currency) => {
        dispatch(setCurrency(currency))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyExchange);