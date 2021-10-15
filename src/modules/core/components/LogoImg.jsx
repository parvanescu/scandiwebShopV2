import styled, {css} from "styled-components";

export const LogoImg = styled.img`
  width: 41px;
  height: 41px;
  top: calc(50% - 41px/2 + 4.5px);
  position: absolute;
`

export const LogoWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 2px;
`


export const ActionLogo = styled.img`
  color: #43464E;
  width: ${props=>props.width? `${props.width}px`:"20px"};
  height: ${props=>props.height? `${props.height}px`: "18px"};
  margin: 0 11px;
  cursor: pointer;
`

export const CurrencyActionLogoWrapper = styled.div`
  width: 38px;
  height: 20px;
  padding: 0 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const CurrencyActionLogo = styled.p`
  width: 32px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  padding: 0 2px;
  font-size: 18px!important;
  font-weight: 500!important;
  line-height: 160%; 
  cursor: pointer;
  margin: 0;
  color: #1d1d22;
`