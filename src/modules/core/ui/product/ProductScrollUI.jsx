import styled from "styled-components";

export const ScrollWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  overflow: scroll;
  padding-right: 15px;
  height: 560px;
  &::-webkit-scrollbar{
    display: none;
  }
`