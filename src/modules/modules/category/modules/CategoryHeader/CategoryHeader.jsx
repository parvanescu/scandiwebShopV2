import React, {Component} from "react";
import CategoryHeaderWrapper from "./components/CategoryHeaderWrapper";
import CategoryHeaderText from "./components/CategoryHeaderText";


class CategoryHeader extends Component {

    render() {
        return <CategoryHeaderWrapper>
            <CategoryHeaderText>{this.props.title}</CategoryHeaderText>
        </CategoryHeaderWrapper>
    }
}

export default CategoryHeader