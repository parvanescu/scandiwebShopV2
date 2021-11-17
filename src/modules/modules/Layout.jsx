import React, {Component} from "react";
import Navbar from "../core/components/Navbar/Navbar";
import CenteredContent from "../core/ui/layout-content/CenteredContent";
import PageContent from "../core/ui/layout-content/PageContent";
import {connect} from "react-redux";
import {getErrorState, getLoadingState} from "../core/contexts/store/selectors";
import MessageOverlay from "../core/components/MessageOverlay";
import {CartBackground} from "../core/ui/CartBackground";
import Toast from "../core/components/toast/Toast";


class Layout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: props.loading,
            error: props.error,
            showBackground: false
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {loading, error} = this.props;
        if (prevProps.loading !== loading) {
            this.setState(prevState => ({...prevState, loading: loading}))
        }


        if (prevProps.error !== error) {
            this.setState(prevState => ({...prevState, error: error}))
        }
    }

    handleChangeBackground() {
        this.setState(prevState => ({
            ...prevState,
            showBackground: !this.state.showBackground
        }))
    }

    render() {

        return (
            <>
                <div style={{width: "100%", position: "relative"}}>
                    <Navbar changeBackground={() => this.handleChangeBackground()}/>
                    <CenteredContent>
                        {this.state.showBackground && <CartBackground/>}
                        {this.state.loading && <MessageOverlay/>}
                        {this.state.error && <MessageOverlay message={this.state.error.message}/>}

                        <PageContent>
                            {this.props.children}
                        </PageContent>
                    </CenteredContent>
                </div>
                <Toast/>
            </>

        )
    }
}

const mapStateToProps = state => {
    return {loading: getLoadingState(state), error: getErrorState(state)};
}

export default connect(mapStateToProps, null)(Layout);