import React, {Component} from "react";
import CategoryHeader from "./modules/CategoryHeader/CategoryHeader";
import {connect} from "react-redux";
import {getSelectedCategory} from "../../core/contexts/store/selectors";
import Category from "./pages/Category";

class Layout extends Component{

    formatTitle(title){
        if(title)
            return title[0].toUpperCase() + title.slice(1);
    }


    render() {
        return <div>
            <CategoryHeader title={this.formatTitle(this.props.category?.name)}/>
            <Category/>
        </div>
    }

}


const mapStateToProps = state =>{
    return {category:getSelectedCategory(state)}
}

export default connect(mapStateToProps)(Layout)