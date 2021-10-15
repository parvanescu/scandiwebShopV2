import React, {Component} from "react";
import CategoryHeader from "./modules/CategoryHeader/CategoryHeader";
import {connect} from "react-redux";
import {getSelectedCategory} from "../../core/contexts/store/selectors";
import Category from "./pages/Category";

class Layout extends Component{

    render() {
        return <div>
            <CategoryHeader title={this.props.category?.name.toUpperCase()}/>
            <Category/>
        </div>
    }

}


const mapStateToProps = state =>{
    return {category:getSelectedCategory(state)}
}

export default connect(mapStateToProps)(Layout)