import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
import {BrowserRouter} from "react-router-dom";
import Routes from "./modules/core/routes";

const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri:"http://localhost:4000/",
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
