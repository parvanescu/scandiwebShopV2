import React, {Component} from "react";
import {graphql} from "@apollo/client/react/hoc";
import {getCategoryQuery} from "../gql";
import {getSelectedCategory} from "../../../core/contexts/store/selectors";
import {connect} from "react-redux";
import Loader from "../../../core/components/Loader";

class Category extends Component {

    constructor(props) {
        super(props);
        this.state = {
            category: props.category,
            products: [],
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {category, data} = prevProps;
        if (category !== this.props.category) {
            this.setState(prevState => ({...prevState, category: this.props.category}))
        }
        if(!this.props.data.loading &&data.category !== this.props.data.category){
            this.setState(prevState => ({...prevState,products: this.props.data.category.products}))
        }
    }


    render() {
        return (
            <div>
                {this.state.products.length === 0 ? <Loader/>:
                <>
                    {this.state.products.map(product=> <h1>{JSON.stringify(product)}</h1>)}
                </>
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    category: getSelectedCategory(state)
})


export default connect(mapStateToProps)(graphql(getCategoryQuery, {
    skip: (props) => props.category === undefined,
    options: (props) => ({
        variables: {input: {title: props.category?.name}},
    }),
})(Category));