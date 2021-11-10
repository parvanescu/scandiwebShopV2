import styled from "styled-components";

export const ToastContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`

export const ToastItemContainer = styled.div`
  position: relative;
  width: 300px;
  height: 75px;
  background-color: ${props=>props.isError?"red":"white"};
  border: 3px solid rgba(94, 206, 123, 1);
  border-radius: 10%;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  padding: 8px;
  p{
    color: ${props=>props.isError?"white":"black"}!important;
  }
`

export const ToastTitle = styled.p`
  margin:0 !important;
  
`

export const ToastText = styled.p`
  margin: 0!important;
`

export const ToastButton = styled.div`
  position: absolute;
  top: 2px;
  right: 3px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  cursor: pointer;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  p{
    font-family: Raleway,sans-serif!important;
    margin:0!important;
    line-height: 10px!important;
    font-size: 10px!important;
  }
`