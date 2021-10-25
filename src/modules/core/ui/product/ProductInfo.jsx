import styled from "styled-components";

export const ProductInfoWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  column-gap: 100px;
  max-height: 668px;
  overflow: scroll;
  &::-webkit-scrollbar{
    display: none;
  }
`

export const ProductImg = styled.img`
  width: 610px;
  height: 511px;
  object-fit: contain;
`

export const ProductInteraction = styled.div`
  display: flex;
  flex-direction: column;
  width: 292px;
  justify-content: flex-start;
  overflow: scroll;
  &::-webkit-scrollbar{
    display: none;
  }
  
`

export const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  margin-bottom: 43px;
  p{
    margin: 0;
    line-height: 27px!important;
    color: rgba(29,31,34,1);
  }
`;

export const ProductHeader = styled.p`
  font-weight: 600!important;
  font-size: 30px!important;
`

export const ProductName = styled.p`
  font-weight: 400!important;
  font-size: 30px!important;
`