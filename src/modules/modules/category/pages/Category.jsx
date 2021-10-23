import React, {Component} from "react";
import {graphql} from "@apollo/client/react/hoc";
import {getCategoryQuery} from "../gql";
import {getCurrencyState, getSelectedCategory} from "../../../core/contexts/store/selectors";
import {connect} from "react-redux";
import Loader from "../../../core/components/Loader";
import ProductCard from "../modules/ProductsLayout/components/ProductCard";
import {ProductsLayout} from "../modules/ProductsLayout/ProductsLayout";

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
        if (this.props.category !== undefined && !this.props.data.loading && data.category !== this.props.data.category) {
            this.setState(prevState => ({...prevState, products: this.props.data.category.products}))
        }
    }


    render() {
        return (
            <div>
                {this.state.products.length === 0 ? <Loader/> :
                    <ProductsLayout>
                        {this.state.products.map((product,idx) => (
                            <ProductCard
                                key={`product-card-${idx}`}
                                id={product.id}
                                inStock={product.inStock}
                                pR={(idx+1)%4!==0}
                                image={product.gallery[0]}
                                name={product.name}
                                value={product.prices.filter(price=>price.currency===this.props.currency.label)[0]}
                            />))}
                    </ProductsLayout>
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    category: getSelectedCategory(state),
    currency: getCurrencyState(state)
})


export default connect(mapStateToProps)(graphql(getCategoryQuery, {
    skip: (props) => props.category === undefined,
    options: (props) => ({
        variables: {input: {title: props.category?.name}},
    }),
})(Category));