import React, {Component} from "react";
import styled from "styled-components";
import Loader from "./Loader";

const LoadingOverlayWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 200;
  width: 100vw;
  height: 100vh;
`

const LoadingOverlayVerticalAlign = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const LoadingOverlayUI = styled.div`
  background-color: #FFFFFF;
  width: 400px;
  height: 250px;
  text-align: center;
  border-radius: 20%;
  border: 2px solid #5ECE7B;
  display: flex;
  flex-direction: column;
  justify-content: center;
`


class MessageOverlay extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: props?.message,
        }
    }

    render() {
        return (
            <LoadingOverlayWrapper>
                <LoadingOverlayVerticalAlign>
                    <LoadingOverlayUI>
                        {this.state.message ? <h1>{this.state.message}</h1> : <Loader/>}
                    </LoadingOverlayUI>
                </LoadingOverlayVerticalAlign>
            </LoadingOverlayWrapper>
        )
    }
}

export default MessageOverlay

