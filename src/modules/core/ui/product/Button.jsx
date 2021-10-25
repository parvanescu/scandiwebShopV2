import styled from "styled-components";


export const AddToCartButton = styled.div`
  margin-bottom: 40px;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 100%;
  
  background-color: rgba(94,206,123,1);
  transition: background-color 0.2s ease;
  
  p{
    font-weight: 600!important;
    line-height: 19.2px!important;
    text-align: center;
    color: #FFFF!important;
    cursor: pointer;
  }
  
  &:hover{
    background-color: rgba(94,206,123,0.5);
  }
  
`