import styled from "styled-components";

export const NotificationContainer = styled.div`
  font-size: 16px;
  box-sizing: border-box;
  position: fixed;
  z-index: 999999999;
  bottom: 12px;
  right: 12px;
  transition: transform .6s ease-in-out;
  animation: toast-in-right .7s;

  @keyframes toast-in-right {
    from {
      transform: translateX(100%);

    }
    to {
      transform: translateX(0);
    }
  }
`