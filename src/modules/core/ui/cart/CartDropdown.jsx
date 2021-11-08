import styled from "styled-components";


export const CartDropdownContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 325px;
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
  }
`