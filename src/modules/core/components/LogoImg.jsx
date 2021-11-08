import styled, {css} from "styled-components";

export const LogoImg = styled.img`
  width: 31px;
  height: 30px;
`

export const LogoWrapper = styled.div`
  width: 100%;
  height: 41px;
  position: absolute;
  display: flex;
  padding-top: 24px;
  flex-direction: column;
  justify-content: center;
  z-index: 5;
`

export const LogoHorizontalAlign = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`


export const ActionLogo = styled.img`
  color: #43464E;
  width: ${props=>props.width? `${props.width}px`:"20px"};
  height: ${props=>props.height? `${props.height}px`: "20px"};
  cursor: pointer;
  margin-left: ${props=>props.mL? `${props.mL}px`:"0"};
  ${props=>props.pT && css`padding-top: ${props.pT}px`}
`

export const CartActionLogoWrapper = styled.div`
  position: relative;
`

export const CartItemsCounter = styled.div`
  top:1px;
  left: 33px;
  position: absolute;
  width: 20px;
  height: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(29,31,34,1);
  border-radius: 60px;
  
  p{
    font-weight: 700!important;
    font-size: 14px!important;
    line-height: 16px!important;
    margin:0!important;
    color: rgba(255,255,255,1)!important;
  }
`

export const CurrencyActionLogoWrapper = styled.div`
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const CurrencyActionLogo = styled.p`
  width: 12px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  font-size: 18px!important;
  font-weight: 500!important;
  line-height: 160%!important; 
  cursor: pointer;
  color: #1d1d22;
  margin: 0;
`

export const VerticalAlign = styled.div`
  margin-top: 5.5px;
`