import styled from "styled-components";
import {Component} from "react";

const LoaderWrapperUI = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
`

const LoaderUI = styled.div`
  border: 16px solid #f3f3f3;
  border-top: 16px solid #5ECE7B;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

class Loader extends Component{
    render() {
        return (
            <LoaderWrapperUI>
                <LoaderUI/>
            </LoaderWrapperUI>
        );
    }
}


export default Loader