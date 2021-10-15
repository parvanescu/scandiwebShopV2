import React, {Component} from "react";
import {Redirect, Route, Switch} from "react-router-dom"
import Category from "../../modules/category/Layout";
import Product from "../../modules/product/pages/Product";
import Cart from "../../modules/cart/pages/Cart";
import Layout from "../../modules/Layout";


class Routes extends Component {

    render() {

        return (
            <Switch>
                <Route path="/" exact>
                    <Redirect to={"/category"}/>
                </Route>
                <Route path="/category" exact>
                    <Layout>
                        <Category/>
                    </Layout>
                </Route>
                <Route path="/product/:id" exact>
                    <Layout>
                        <Product/>
                    </Layout>
                </Route>
                <Route path="/cart" exact>
                    <Layout>
                        <Cart/>
                    </Layout>
                </Route>
            </Switch>
        )

    }
}

export default Routes;