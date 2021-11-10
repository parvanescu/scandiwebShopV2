import React,{Component} from "react";
import {ToastButton, ToastItemContainer, ToastText, ToastTitle} from "../../../ui/toastUi/ToastLayout";
import {deleteToastItem} from "../../../contexts/store/actions";
import {connect} from "react-redux";

class ToastItem extends Component{

    componentDidMount() {
        setTimeout(()=>{
            this.props.deleteToastItem(this.props.index)
        },this.props.timeoutTime)
    }

    render() {
        return  <ToastItemContainer isError={this.props.type==="error"}>
            <ToastTitle>{this.props.title}</ToastTitle>
            <ToastText>{this.props.text}</ToastText>
            <ToastButton onClick={()=>this.props.deleteToastItem(this.props.index)}><p>x</p></ToastButton>
        </ToastItemContainer>
    }
}

const mapDispatchToProps = (dispatch) => ({
    deleteToastItem: (index) => dispatch(deleteToastItem(index))
})

export default connect(null,mapDispatchToProps)(ToastItem)