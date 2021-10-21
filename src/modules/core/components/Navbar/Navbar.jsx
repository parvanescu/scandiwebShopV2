import {Component} from "react";
import {compose} from "@reduxjs/toolkit";
import {graphql} from "@apollo/client/react/hoc";
import {NavbarUI, NavigationActions, NavigationCategories, NavigationCategory} from "../../ui/navbar/NavbarUI";
import logo from "../../../../assets/icons/logo.png"
import cart from "../../../../assets/icons/empty_cart_grey.png"
import arrowDown from "../../../../assets/icons/arrow-down.png"
import {
    ActionLogo,
    CurrencyActionLogo,
    CurrencyActionLogoWrapper,
    LogoImg,
    LogoWrapper
} from "../LogoImg";
import {connect} from "react-redux";
import {setCategories, setCurrency, setError, setLoading} from "../../contexts/store/actions";
import {getCategoriesState, getCurrencyState, getErrorState, getLoadingState} from "../../contexts/store/selectors";
import {getCategoriesQuery, getCurrenciesQuery} from "./gql";
import {mapCurrencyToSymbol} from "../../../../lib/utils";


class Navbar extends Component {

    constructor(props) {
        const {getCategoryQuery, getCurrenciesQuery} = props
        super(props);
        this.state = {
            categories: [],
            selected: 0,
            currencies: null,
            loading: getCategoryQuery.loading && getCurrenciesQuery.loading,
            error: getCategoryQuery.error || getCurrenciesQuery.error
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
    }

    render() {
        const {loading, categories} = this.state

        return (
            <NavbarUI>
                <NavigationCategories>
                    {!loading && categories &&
                    categories.map((category, idx) => (
                        <NavigationCategory key={idx} selected={idx === this.state.selected}
                                            onClick={() => this.setState((prevState) => ({
                                                ...prevState,
                                                selected: idx
                                            }))}>{category.name.toUpperCase()}</NavigationCategory>)
                    )
                    }
                </NavigationCategories>
                <LogoWrapper>
                    <LogoImg alt="logo" src={logo}/>
                </LogoWrapper>
                <NavigationActions>
                    <CurrencyActionLogoWrapper>
                        <CurrencyActionLogo>
                            {this.props.currency?.symbol}
                        </CurrencyActionLogo>
                        <LogoWrapper>
                            <ActionLogo src={arrowDown} width={6} height={3} pT/>
                        </LogoWrapper>
                        <ActionLogo src={cart}/>
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
        currency: getCurrencyState(state)
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

export default connect(mapStateToProps, mapDispatchToProps)(
    compose(
        graphql(getCategoriesQuery, {name: "getCategoryQuery"}),
        graphql(getCurrenciesQuery, {name: "getCurrenciesQuery"})
    )
    (Navbar)
);

