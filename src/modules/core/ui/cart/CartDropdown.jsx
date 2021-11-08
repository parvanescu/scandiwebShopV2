import styled, {css, keyframes} from "styled-components";


export const CartDropdownContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 293px;
  max-height: 540px;
  z-index: 4000;
  background-color: white;
  right:-13px;
  margin-top: 22px;
  padding: 8px 16px 20px;
`

export const CartDropdownTitleWrapper = styled.div`
  margin-bottom: 23px;
  display: flex;
  flex-direction: row;
  
  p{
    line-height: 160%!important;
    margin: 0;
    font-family: Raleway,sans-serif;
  }
  
  .title{
    font-weight: 700!important;
    
  }
  .description{
    font-weight: 500!important;
    margin-left: 0.5rem;
  }
`

export const CartDropdownItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 41px;
  margin-bottom: 43px;
  width: 100%;
  max-height: 360px;
  overflow: scroll;
  ::-webkit-scrollbar{
    display: none;
  }
  position: relative;
`

const upAndDown = keyframes`
  0%{transform: translateY(-3px); }
  50%{transform: translateY(+3px);}
  100%{transform: translateY(-3px);}
`

export const CartMoreItems = styled.div`
  position: absolute;
  animation: ${upAndDown} 2s linear infinite;
  top: 320px;
  width: 100%;
  display: flex;
  justify-content: center;
  p{
    margin: 0;
    color:rgba(94, 206, 123, 1)!important;
  }
`




export const CartDropdownTotalContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 37px;
  
  .total{
    font-weight: 500!important;
    font-size: 16px;
    line-height: 18px;
    margin: 0!important;
  }
  
  .price{
    font-family: Raleway,sans-serif;
    font-weight: 700!important;
    font-size: 16px;
    line-height: 25.6px;
    margin: 0!important;
  }
`

export const CartDropdownButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 12px;
  width: 100%;
`

export const CartDropdownButton = styled.div`
  width: ${props=>props.isCheckout?"140":"138"}px;
  height: ${props=>props.isCheckout?"43":"41"}px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  cursor: pointer;
  transition: 0.3s linear;
  
  background-color: ${props=>props.isCheckout?"rgba(94, 206, 123, 1)":"rgba(255, 255, 255, 1)"};
  ${props=>!props.isCheckout && css`
    border: 1px solid #1D1F22;
  `}
  
  &:hover{
    background-color: ${props=>props.isCheckout?"rgba(94, 206, 123, 0.3)":"rgba(255, 255, 255, 1)"};
    ${props=>!props.isCheckout && css``}
  }
  
  ${props=>props.isCheckout && css`
    p{
      color: white!important;
    }
  `}
  
  p{
    font-family: Raleway,sans-serif!important;
    font-weight: 600!important;
    font-size: 14px!important;
    line-height: 17px!important;
    margin: 13px 0!important;
  }
`