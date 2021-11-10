import React,{Component} from "react";
import {ToastContainer} from "../../ui/toastUi/ToastLayout";
import {getToastMessages} from "../../contexts/store/selectors";
import {connect} from "react-redux";
import ToastItem from "./components/ToastItem";

class Toast extends Component{

    render() {
        return <ToastContainer>
            {this.props.messages.map((message,index)=>
            <ToastItem
                key={`toast-item-${index}`}
                title={message.title}
                text={message.text}
                index={index}
                type={message.type}
                timeoutTime={message.time || "3000"}
            />
            )}
        </ToastContainer>
    }
}

const mapStateToProps = (state) => ({
    messages: getToastMessages(state)
})

export default connect(mapStateToProps)(Toast);