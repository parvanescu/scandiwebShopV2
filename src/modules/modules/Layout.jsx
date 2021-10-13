import React, {Component} from "react";
import Navbar from "../core/components/Navbar";
import CenteredContent from "../core/ui/layout-content/CenteredContent";
import PageContent from "../core/ui/layout-content/PageContent";


class Layout extends Component{

    render() {

        return(
            <CenteredContent>
                <Navbar/>
                <PageContent>
                    {this.props.children}
                </PageContent>
            </CenteredContent>

        )
    }
}


export default Layout