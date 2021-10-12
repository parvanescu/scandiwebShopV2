import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {ApolloClient, ApolloProvider, HttpLink, InMemoryCache} from "@apollo/client";
import {BrowserRouter} from "react-router-dom";
import Routes from "./modules/core/routes";

const defaultOptions = {
    watchQuery: {
        fetchPolicy: "no-cache",
        errorPolicy: "none",
    },
    query: {
        fetchPolicy: "no-cache",
        errorPolicy: "none",
    },
    mutate: {
        fetchPolicy: "no-cache",
        errorPolicy: "none",
    },
};

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({uri:""}),
    defaultOptions
})

class App extends Component{
    render() {
        return <BrowserRouter>
            <ApolloProvider client={client}>
                <Routes/>
            </ApolloProvider>
        </BrowserRouter>
    }
}


ReactDOM.render(<App />, document.getElementById('root'));
