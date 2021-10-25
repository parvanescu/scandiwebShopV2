import styled from "styled-components";


export const PriceLayout = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  margin-bottom: 20px;
  
  p{
    font-weight: 700!important;
    line-height: 18px!important;
    color: rgba(29,31,34,1)!important;
    margin: 0;
  }
`;

export const PriceHeader = styled.p`
  font-size: 18px!important;
  font-family: Roboto Condensed sans-serif;
`

export const PriceValue = styled.p`
  font-size: 24px!important;
  margin: 14px 0!important;
`