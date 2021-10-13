import {Component} from "react";
import {gql} from "@apollo/client";
import {graphql} from "@apollo/client/react/hoc";
import {NavbarUI, NavigationActions, NavigationCategories, NavigationCategory} from "../ui/navbar/NavbarUI";
import logo from "../../../assets/icons/logo.png"
import cart from "../../../assets/icons/empty_cart.png"
import arrowDown from "../../../assets/icons/arrow-down.png"
import {
    ActionLogo,
    CartActionLogo,
    CurrencyActionLogo,
    CurrencyActionLogoWrapper,
    LogoImg,
    LogoWrapper
} from "./LogoImg";

const getCategoryQuery = gql`
query getCategories{
    categories{
        name
    }
}
`


class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: props.data.loading,
            categories: [],
            selected: 0,
            currency: "$"
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }


    render() {
        const {data: {loading, error, categories}} = this.props;

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
                            {this.state.currency}
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

export default graphql(getCategoryQuery)(Navbar);