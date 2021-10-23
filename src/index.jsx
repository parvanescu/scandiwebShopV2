import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
import {BrowserRouter} from "react-router-dom";
import Routes from "./modules/core/routes";
import {Provider} from "react-redux";
import store from "./modules/core/contexts/store";

const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://localhost:4000/",
})



class App extends Component {
    render() {
        return <BrowserRouter>
            <ApolloProvider client={client}>
                <Provider store={store}>
                    <Routes/>
                </Provider>
            </ApolloProvider>
        </BrowserRouter>
    }
}


ReactDOM.render(<App/>, document.getElementById('root'));
