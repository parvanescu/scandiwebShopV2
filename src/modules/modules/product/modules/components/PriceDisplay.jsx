import React,{Component} from "react";
import {PriceHeader, PriceLayout, PriceValue} from "../../../../core/ui/product/Price";
import {connect} from "react-redux";
import {getCurrencyState} from "../../../../core/contexts/store/selectors";

class PriceDisplay extends Component{

    render() {
        return (
            <PriceLayout>
                <PriceHeader>PRICE:</PriceHeader>
                <PriceValue>
                    {this.props.currency.symbol}
                    {this.props.prices.filter(price=>price.currency === this.props.currency.label )[0].amount}
                </PriceValue>
            </PriceLayout>
        );
    }
}

const mapStateToProps = state => ({
    currency: getCurrencyState(state)
})

export default connect(mapStateToProps)(PriceDisplay);