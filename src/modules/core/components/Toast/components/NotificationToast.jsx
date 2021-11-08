import styled from "styled-components";

export const NotificationToast = styled.div`
  position: relative;
  pointer-events: auto;
  overflow: hidden;
  margin: 0 0 15px;
  max-height: 100px;
  border-radius: 3px 3px 3px 3px;
  box-shadow: 0 0 10px #999;
  opacity: .9;
  background: #fff no-repeat 15px;
  height: 50px;
  width: 365px;
  color: #fff;
  padding: 20px 15px 10px 10px;
  bottom: 12px;
  right: 12px;
  transition: transform .6s ease-in-out;
  animation: toast-in-right .7s;
  
  &:hover{
    box-shadow: 0 0 12px #fff;
    opacity: 1;
    cursor: pointer
  }

  @keyframes toast-in-right {
    from {
      transform: translateX(100%);

    }
    to {
      transform: translateX(0);
    }
  }
`