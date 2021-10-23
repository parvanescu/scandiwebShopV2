import React, {Component} from "react";
import {graphql} from "@apollo/client/react/hoc";
import {getItemById} from "../gql";

class Product extends Component {

    constructor(props) {
        super(props);
        this.state={
            product: null
        }

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.data !== this.props.data){
            this.setState(prevState=>({...prevState,product:this.props.data.product}))
        }
    }


    render() {
        return <h1>{this.state.product && JSON.stringify(this.state.product)}</h1>
    }
}

export default graphql(getItemById, {
    options: (props) => ({
        variables: {id:props.id},
    }),
})(Product);