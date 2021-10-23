import React,{Component} from "react";
import {withRouter} from "react-router-dom";
import Product from "./pages/Product";


class Layout extends Component{

    render() {
        return (
            <Product id={this.props.match.params.id}/>
        )
    }

}

export default withRouter(Layout);