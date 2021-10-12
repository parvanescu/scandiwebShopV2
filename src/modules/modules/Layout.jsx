import React, {Component} from "react";
import Navbar from "../core/components/Navbar";
import CenteredContent from "../core/ui/layout-content/CenteredContent";
import PageContent from "../core/ui/layout-content/PageContent";


class Layout extends Component{
    componentDidMount() {
        console.log(this.props.children)
    }


    render() {

        return(
            <CenteredContent>
                <Navbar>
                    <h1>Categories</h1>
                    <h1>Icon</h1>
                    <h1>Cart</h1>
                </Navbar>
                <PageContent>
                    {this.props.children}
                </PageContent>
            </CenteredContent>

        )
    }
}


export default Layout