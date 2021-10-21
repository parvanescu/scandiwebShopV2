import React, {Component} from "react";
import Navbar from "../core/components/Navbar/Navbar";
import CenteredContent from "../core/ui/layout-content/CenteredContent";
import PageContent from "../core/ui/layout-content/PageContent";
import {connect} from "react-redux";
import {getErrorState, getLoadingState} from "../core/contexts/store/selectors";
import MessageOverlay from "../core/components/MessageOverlay";


class Layout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: props.loading,
            error: props.error,
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {loading, error} = this.props;
        if (prevProps.loading !== loading){
            this.setState(prevState => ({...prevState, loading: loading}))
        }


        if (prevProps.error !== error) {
            this.setState(prevState => ({...prevState, error: error}))
        }
    }

    render() {

        return (
            <div style={{width: "100%"}}>
                <CenteredContent>
                    {this.state.loading && <MessageOverlay/>}
                    {this.state.error && <MessageOverlay message={this.state.error.message}/>}
                    <Navbar/>
                    <PageContent>
                        {this.props.children}
                    </PageContent>
                </CenteredContent>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {loading: getLoadingState(state), error: getErrorState(state)};
}

export default connect(mapStateToProps,null)(Layout);