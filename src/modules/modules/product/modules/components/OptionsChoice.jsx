import React, {Component} from "react";
import {ChoiceWrapper, Option, OptionsLayout, Swatch} from "../../../../core/ui/product/Options";


class OptionsChoice extends Component {

    render() {
        return (
            <ChoiceWrapper>
                {this.props.attributes.map((attr, idx) => {
                    return <Swatch key={`swatch-${idx}`}>
                        <p>{attr.name.toUpperCase()}:</p>
                        <OptionsLayout>
                            {attr.items.map((item, idxAttr) => (
                                <Option key={`option-${idx}-${idxAttr}`}
                                        backgroundColor={attr.type === "swatch" ? item.value : null}>
                                    {attr.type !== "swatch" && <p>{item.displayValue}</p>}
                                </Option>
                            ))}
                        </OptionsLayout>
                    </Swatch>
                })}
            </ChoiceWrapper>
        )
    }
}


export default OptionsChoice;