import styled from "styled-components";

export const CartItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 1098px;
`

export const CartItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`

export const CartItemInfoTextGroup = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  p{
    font-size: 30px!important;
    line-height: 27px!important;
    margin: 0;
  }
`

export const CartItemHeader = styled.p`
  font-weight: 600!important;
  
`

export const CartItemName = styled.p`
  font-weight: 400!important;
`

export const CartItemPrice = styled.p`
  font-weight: 700!important;
  font-size: 24px!important;
  line-height: 18px!important;
  color: rgba(29, 31, 34, 1)!important;
  margin: 0.875rem 0;
`

export const CartOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`

export const AttributeGroup = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 12px;
`

export const CartItemInteraction = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 12px;
`

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
`

export const QuantityDisplay = styled.p`
  font-weight: 500!important;
  font-size: 24px!important;
  line-height: 38.4px!important;
  text-align: center;
  margin: 0;
`

export const CartGalleryContainer = styled.div`
  width: 141px;
  height: 185px;
`;

export const CartImage = styled.img`
  width: 141px;
  height: 185px;
  object-fit: contain;
`

export const CartGalleryNavigationOverlay = styled.div`
  position: absolute;
  width: 141px;
  height: 186px;
  background: transparent;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CartGalleryButtonContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const CartGalleryIcon = styled.img`
  padding-left: 9px;
  width: 6px;
  height: 12px;
  &:hover{
    box-shadow: 2px 2px 5px rgba(168, 172, 176, 1);
  }
`


export const CartButton = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: ${props=>props.width-2}px;
  height: ${props=>props.width-2}px;
  border: 1px solid #1D1F22;
  p{
    margin: 0;
    font-size: 18px!important;
    line-height: 18px;
  }
`

