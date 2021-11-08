import {Component} from "react";
import {compose} from "@reduxjs/toolkit";
import {graphql} from "@apollo/client/react/hoc";
import {NavbarUI, NavigationActions, NavigationCategories, NavigationCategory} from "../../ui/navbar/NavbarUI";
import logo from "../../../../assets/icons/logo.png"
import cart from "../../../../assets/icons/empty_cart_grey.png"
import {
    ActionLogo, CartActionLogoWrapper, CartItemsCounter,
    CurrencyActionLogo,
    CurrencyActionLogoWrapper, LogoHorizontalAlign,
    LogoImg,
    LogoWrapper, VerticalAlign
} from "../LogoImg";
import {connect} from "react-redux";
import {setCategories, setCurrency, setError, setLoading} from "../../contexts/store/actions";
import {
    getCartItems,
    getCategoriesState,
    getCurrencyState,
    getErrorState,
    getLoadingState
} from "../../contexts/store/selectors";
import {getCategoriesQuery, getCurrenciesQuery} from "./gql";
import {mapCurrencyToSymbol} from "../../../../lib/utils";
import CurrencyExchange from "../CurrencyExchange";
import {withRouter} from "react-router-dom"
import CartDropdown from "../CartDropdown";


class Navbar extends Component {

    constructor(props) {
        const {getCategoryQuery, getCurrenciesQuery} = props
        super(props);
        this.state = {
            categories: [],
            selected: 0,
            currencies: null,
            loading: getCategoryQuery.loading && getCurrenciesQuery.loading,
            error: getCategoryQuery.error || getCurrenciesQuery.error,
            cartToggled: false,
            node: props.node
        }
        this.props.changeLoading(this.state.loading);
        this.props.changeError(this.state.error || null);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {getCategoryQuery, getCurrenciesQuery} = this.props;

        if (prevProps.getCategoryQuery.loading !== getCategoryQuery.loading && !getCategoryQuery.error) {
            this.setState(prevState => ({
                ...prevState,
                loading: getCategoryQuery.loading,
                categories: getCategoryQuery.categories
            }));
        }

        if (prevProps.getCategoryQuery.error !== getCategoryQuery.error) {
            this.setState(prevState => ({...prevState, error: getCategoryQuery.error}));
        }

        if (prevProps.getCurrenciesQuery.loading !== getCurrenciesQuery.loading && !getCurrenciesQuery.error) {
            this.setState(prevState => ({
                ...prevState,
                loading: getCurrenciesQuery.loading,
                currencies: getCurrenciesQuery.currencies.map(currency => ({
                    label: currency,
                    symbol: mapCurrencyToSymbol(currency)
                })),
            }))
            this.props.changeCurrency({
                label: getCurrenciesQuery.currencies[0],
                symbol: mapCurrencyToSymbol(getCurrenciesQuery.currencies[0])
            })
        }

        if (prevProps.getCurrenciesQuery.error !== getCurrenciesQuery.error) {
            this.setState(prevState => ({
                ...prevState,
                error: getCurrenciesQuery.error
            }))
        }

        if (prevState.categories !== this.state.categories) {
            const array = this.state.categories || []
            this.props.changeCategories(array.map((category, index) => ({
                ...category,
                selected: index === 0
            })));
        }

        if (prevState.selected !== this.state.selected) {
            this.props.changeCategories(this.state.categories.map((category, idx) => ({
                ...category,
                selected: this.state.selected === idx
            })));
        }

        if (prevState.loading !== this.state.loading) {
            this.props.changeLoading(this.state.loading)
        }

        if (prevState.error !== this.state.error) {
            if (!prevState.error) {
                this.props.changeError(this.state.error)
            }
        }

        if(prevProps.node !== this.props.node){
            this.setState(prevState=>({...prevState,node: this.props.node}))
        }
    }

    handleClick =() => {
        if (!this.state.showModal) {
            document.addEventListener("click", this.handleOutsideClick, false);
        } else {
            document.removeEventListener("click", this.handleOutsideClick, false);
        }
        this.setState(prevState => ({
            cartToggled: !prevState.cartToggled
        }));
        if(this.state.node)
            this.props.changeBackground();

    };

    handleOutsideClick = e => {
        if(this.state.node)
        if (!this.state.node.contains(e.target)) this.handleClick();
    };


    render() {
        const {loading, categories} = this.state

        return (
            <NavbarUI>
                <NavigationCategories>
                    {!loading && categories &&
                    categories.map((category, idx) => (
                        <NavigationCategory
                            key={idx}
                            selected={idx === this.state.selected}
                            onClick={() => {
                                this.setState((prevState) => ({
                                    ...prevState,
                                    selected: idx
                                }))
                                this.props.history.push("/category")
                            }}>{category.name.toUpperCase()}</NavigationCategory>)
                    )
                    }
                </NavigationCategories>
                <LogoWrapper>
                    <LogoHorizontalAlign>
                        <LogoImg alt="logo" src={logo}/>
                    </LogoHorizontalAlign>
                </LogoWrapper>
                <NavigationActions>
                    <CurrencyActionLogoWrapper>
                        <VerticalAlign>
                            <CurrencyActionLogo>
                                {this.props.currency?.symbol}
                            </CurrencyActionLogo>
                        </VerticalAlign>
                        <CurrencyExchange
                            currencies={this.state.currencies}
                        />
                        <CartActionLogoWrapper onClick={()=>this.handleClick()}>
                            {this.props.cartItems.length !== 0 &&
                            <CartItemsCounter><p>{this.props.cartItems.length}</p></CartItemsCounter>}
                            <ActionLogo src={cart} mL={22} pT={11}/>
                            {this.state.cartToggled && <CartDropdown/>}
                        </CartActionLogoWrapper>
                    </CurrencyActionLogoWrapper>
                </NavigationActions>
            </NavbarUI>
        );
    }
}


const mapStateToProps = state => {
    return {
        loading: getLoadingState(state),
        categories: getCategoriesState(state),
        error: getErrorState(state),
        currency: getCurrencyState(state),
        cartItems: getCartItems(state)
    }
}

const mapDispatchToProps = dispatch => ({
    changeLoading: (loading) => {
        dispatch(setLoading(loading))
    },
    changeError: (error) => {
        dispatch(setError(error))
    },
    changeCategories: (categories) => {
        dispatch(setCategories(categories))
    },
    changeCurrency: (currency) => {
        dispatch(setCurrency(currency))
    }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(
    compose(
        graphql(getCategoriesQuery, {name: "getCategoryQuery"}),
        graphql(getCurrenciesQuery, {name: "getCurrenciesQuery"})
    )
    (Navbar)
));

