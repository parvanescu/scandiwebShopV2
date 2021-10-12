import React, {Component} from "react";
import {Redirect, Route, Switch} from "react-router-dom"
import Category from "../../modules/category/pages/Category";
import Product from "../../modules/product/pages/Product";
import Cart from "../../modules/cart/pages/Cart";

class Routes extends Component{


    render() {

        return (
                <Switch>
                    <Route path="/" exact>
                        <Redirect to={"/category"}/>
                    </Route>
                    <Route path="/category" exact>
                        <Category/>
                    </Route>
                    <Route path="/product/:id" exact>
                        <Product/>
                    </Route>
                    <Route path="/cart" exact>
                        <Cart/>
                    </Route>
                </Switch>
        )

    }
}


export default Routes;